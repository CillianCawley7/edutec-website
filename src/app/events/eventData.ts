/**
 * Event data management
 * 
 * This file handles fetching events from itag's website calendar
 * and provides fallback placeholder data.
 */

export type Event = {
  id: string;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  time: string;
  location: string;
  type: 'Workshop' | 'Career Fair' | 'Webinar' | 'Networking' | 'Conference' | 'Other';
  description: string;
  registrationUrl?: string;
  featured?: boolean;
  source?: 'itag' | 'edutec'; // Track where event came from
};

/**
 * Fetch events from itag website RSS feed
 */
export async function fetchItagEvents(): Promise<Event[]> {
  try {
    // Fetch the RSS feed from itag
    const response = await fetch('https://itag.ie/events/feed/', {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch itag events: ${response.status}`);
    }
    
    const xmlText = await response.text();
    const events = parseItagRSS(xmlText);
    
    console.log(`✅ Fetched ${events.length} events from itag`);
    return events;
  } catch (error) {
    console.error('Error fetching itag events:', error);
    return [];
  }
}

/**
 * Parse itag RSS feed XML
 */
function parseItagRSS(xmlText: string): Event[] {
  const events: Event[] = [];
  
  try {
    // Extract all <item> elements
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = xmlText.match(itemRegex) || [];
    
    items.forEach((item, index) => {
      try {
        // Extract fields from each item
        const title = extractTag(item, 'title');
        const link = extractTag(item, 'link');
        const description = extractTag(item, 'description');
        const pubDate = extractTag(item, 'pubDate');
        const content = extractTag(item, 'content:encoded') || description;
        
        // Extract event-specific metadata
        const hasExplicitDate = /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i.test(content);
        const eventDate = extractEventDate(content, pubDate);
        const eventTime = extractEventTime(content);
        const eventLocation = extractEventLocation(content);
        
        if (title && eventDate) {
          let desc = cleanHTML(description || '').substring(0, 200);
          
          // Add note if date is estimated
          if (!hasExplicitDate && !eventTime) {
            desc = desc || 'Check event page for exact date and time.';
          }
          
          events.push({
            id: `itag-${index + 1}`,
            title: cleanHTML(title),
            date: eventDate,
            time: eventTime || 'TBA',
            location: eventLocation || 'TBA',
            type: categorizeEvent(title),
            description: desc,
            registrationUrl: link,
            source: 'itag',
          });
        }
      } catch (err) {
        console.warn('Error parsing itag event item:', err);
      }
    });
  } catch (error) {
    console.error('Error parsing itag RSS:', error);
  }
  
  return events;
}

/**
 * Extract content from XML tag (handles CDATA)
 */
function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, 'i');
  const match = xml.match(regex);
  if (!match) return '';
  
  let content = match[1].trim();
  
  // Handle CDATA sections
  const cdataMatch = content.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  if (cdataMatch) {
    content = cdataMatch[1];
  }
  
  return content.trim();
}

/**
 * Extract event date from content or pubDate
 */
function extractEventDate(content: string, pubDate: string): string {
  // Try to find date patterns in content first
  const datePatterns = [
    /(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i,
    /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i,
    /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,  // DD/MM/YYYY or DD-MM-YYYY
    /(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/,  // YYYY/MM/DD or YYYY-MM-DD
  ];
  
  for (const pattern of datePatterns) {
    const match = content.match(pattern);
    if (match) {
      try {
        // Try to parse the matched date
        const dateStr = match[0];
        const date = new Date(dateStr);
        if (!isNaN(date.getTime()) && date.getFullYear() >= 2025) {
          console.log(`Found event date in content: ${dateStr} -> ${date.toISOString().split('T')[0]}`);
          return date.toISOString().split('T')[0];
        }
      } catch (e) {
        // Continue to next pattern
      }
    }
  }
  
  // If no date found in content, use pubDate as a fallback
  // But assume the event is upcoming (not in the past)
  try {
    const pubDateObj = new Date(pubDate);
    if (!isNaN(pubDateObj.getTime())) {
      const today = new Date();
      
      // If pubDate is in the past, assume event is upcoming
      // Use pubDate but ensure it's in the future
      if (pubDateObj < today) {
        // For events without explicit dates, assume they're scheduled
        // within the next 3 months from publication
        const futureDate = new Date(pubDateObj);
        futureDate.setMonth(futureDate.getMonth() + 1); // Add 1 month buffer
        
        // If still in past, use today + 1 week
        if (futureDate < today) {
          const weekFromNow = new Date(today);
          weekFromNow.setDate(weekFromNow.getDate() + 7);
          console.log(`No date found, using pubDate + buffer: ${weekFromNow.toISOString().split('T')[0]}`);
          return weekFromNow.toISOString().split('T')[0];
        }
        
        console.log(`Using pubDate + 1 month: ${futureDate.toISOString().split('T')[0]}`);
        return futureDate.toISOString().split('T')[0];
      }
      
      return pubDateObj.toISOString().split('T')[0];
    }
  } catch (e) {
    // Return today's date as last resort
  }
  
  return new Date().toISOString().split('T')[0];
}

/**
 * Extract event time from content
 */
function extractEventTime(content: string): string | undefined {
  const timePatterns = [
    /(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))/,
    /(\d{1,2}:\d{2})/,
  ];
  
  for (const pattern of timePatterns) {
    const match = content.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return undefined;
}

/**
 * Extract event location from content
 */
function extractEventLocation(content: string): string | undefined {
  // Look for common location indicators
  const locationPatterns = [
    /Location:\s*([^<\n]+)/i,
    /Venue:\s*([^<\n]+)/i,
    /(?:at|@)\s+([A-Z][^<\n,]{5,50})/,
  ];
  
  for (const pattern of locationPatterns) {
    const match = content.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }
  
  // Check for common Irish cities
  const cities = ['Galway', 'Dublin', 'Cork', 'Limerick', 'Online', 'Virtual'];
  for (const city of cities) {
    if (content.includes(city)) {
      return city;
    }
  }
  
  return undefined;
}

/**
 * Clean HTML tags and entities from text
 */
function cleanHTML(text: string): string {
  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Categorize events based on title/tags
 */
function categorizeEvent(title: string, category?: string): Event['type'] {
  const titleLower = title.toLowerCase();
  const categoryLower = category?.toLowerCase() || '';
  
  if (titleLower.includes('workshop') || categoryLower.includes('workshop')) return 'Workshop';
  if (titleLower.includes('career') || titleLower.includes('job fair') || titleLower.includes('pathways')) return 'Career Fair';
  if (titleLower.includes('webinar') || categoryLower.includes('webinar')) return 'Webinar';
  if (titleLower.includes('networking') || categoryLower.includes('networking') || titleLower.includes('meetup')) return 'Networking';
  if (titleLower.includes('conference') || categoryLower.includes('conference') || titleLower.includes('summit')) return 'Conference';
  
  return 'Other';
}

/**
 * Manually curated itag events from their calendar (October 2025)
 * Source: https://itag.ie/calendar/
 */
export const itagCalendarEvents: Event[] = [
  // October 1
  {
    id: 'itag-oct-1-1',
    title: 'itag\'s AI Forum Meeting',
    date: '2025-10-01',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly AI Forum meeting to discuss latest trends and innovations in artificial intelligence.',
    registrationUrl: 'https://itag.ie/events/itags-cyber-forum-meeting-2/',
    source: 'itag',
  },
  {
    id: 'itag-oct-1-2',
    title: 'itag\'s Cyber Forum Meeting',
    date: '2025-10-01',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Cyber Security Forum meeting for cybersecurity professionals.',
    registrationUrl: 'https://itag.ie/events/itags-cyber-forum-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-oct-1-3',
    title: 'ISTQB Foundation in Software Testing',
    date: '2025-10-01',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'ISTQB Foundation certification training for software testing professionals.',
    registrationUrl: 'https://itag.ie/events/istqb-foundation-in-software-testing-3/',
    source: 'itag',
  },
  {
    id: 'itag-oct-1-4',
    title: 'Digital Women\'s Leadership Program – Module 6',
    date: '2025-10-01',
    time: '9:30 AM',
    location: 'Galway',
    type: 'Workshop',
    description: 'Module 6 of the Digital Women\'s Executive Leadership Program.',
    registrationUrl: 'https://itag.ie/events/digital-womens-executive-leadership-program-day-6-2-2/',
    source: 'itag',
  },
  // October 2
  {
    id: 'itag-oct-2-1',
    title: 'ISTQB Foundation in Software Testing',
    date: '2025-10-02',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'ISTQB Foundation certification training - Day 2.',
    registrationUrl: 'https://itag.ie/events/istqb-foundation-in-software-testing-3/',
    source: 'itag',
  },
  // October 3
  {
    id: 'itag-oct-3-1',
    title: 'ISTQB Foundation in Software Testing',
    date: '2025-10-03',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'ISTQB Foundation certification training - Day 3.',
    registrationUrl: 'https://itag.ie/events/istqb-foundation-in-software-testing-3/',
    source: 'itag',
  },
  // October 6
  {
    id: 'itag-oct-6-1',
    title: 'The Accelerated Senior Leadership Development Program Coaching Session 5',
    date: '2025-10-06',
    time: 'TBA',
    location: 'Galway',
    type: 'Workshop',
    description: 'Coaching session 5 for the Accelerated Senior Leadership Development Program.',
    registrationUrl: 'https://itag.ie/events/the-accelerated-senior-leadership-development-program-module-1-2-2-2-2-2-2-2-2/',
    source: 'itag',
  },
  // October 9
  {
    id: 'itag-oct-9-1',
    title: 'Cyber Ireland National Conference 2025',
    date: '2025-10-09',
    time: 'TBA',
    location: 'Dublin',
    type: 'Conference',
    description: 'National conference on cybersecurity trends, threats, and solutions.',
    registrationUrl: 'https://itag.ie/events/cyber-ireland-national-conference-2025/',
    source: 'itag',
  },
  // October 10
  {
    id: 'itag-oct-10-1',
    title: 'itag\'s Advisory Board Meeting',
    date: '2025-10-10',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Advisory Board meeting for itag members.',
    registrationUrl: 'https://itag.ie/events/itags-advisory-board-meeting-2/',
    source: 'itag',
  },
  // October 13
  {
    id: 'itag-oct-13-1',
    title: 'itag\'s AI Forum Event – Data Lies, AI Amplifies: The Critical Skills Gap Blocking AI Success',
    date: '2025-10-13',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'AI Forum event exploring the critical skills gap in AI implementation and success.',
    registrationUrl: 'https://itag.ie/events/itags-ai-forum-event-data-lies-ai-amplifies-the-critical-skills-gap-blocking-ai-success/',
    source: 'itag',
  },
  {
    id: 'itag-oct-13-2',
    title: 'AI Critical Thinking for Smarter AI Engagement with Edmund Sutcliffe',
    date: '2025-10-13',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'Training on critical thinking skills for effective AI engagement.',
    registrationUrl: 'https://itag.ie/events/ai-critical-thinking-for-smarter-ai-engagement-with-edmund-sutcliffe/',
    source: 'itag',
  },
  // October 14
  {
    id: 'itag-oct-14-1',
    title: 'The Senior Accelerated Leadership Program – Workshop #2',
    date: '2025-10-14',
    time: 'TBA',
    location: 'Galway',
    type: 'Workshop',
    description: 'Workshop 2 of the Senior Accelerated Leadership Program.',
    registrationUrl: 'https://itag.ie/events/the-public-mindful-leader-program-program-launch-2-2/',
    source: 'itag',
  },
  // October 15
  {
    id: 'itag-oct-15-1',
    title: 'itag\'s Agile Forum Event – Charting New Territory: Agile Careers in an AI-Driven World',
    date: '2025-10-15',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Agile Forum event exploring career opportunities in an AI-driven world.',
    registrationUrl: 'https://itag.ie/events/itags-agile-forum-event-charting-new-territory-agile-careers-in-an-ai-driven-world/',
    source: 'itag',
  },
  // October 20-22
  {
    id: 'itag-oct-20-1',
    title: 'PMI/Project Management Professional – Day 1 – 3',
    date: '2025-10-20',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'PMI Project Management Professional certification training - Days 1-3.',
    registrationUrl: 'https://itag.ie/events/pmi-project-management-professional-day-1-3/',
    source: 'itag',
  },
  // October 21
  {
    id: 'itag-oct-21-1',
    title: 'Digital Women\'s Leadership Programme – Module 2',
    date: '2025-10-21',
    time: '9:30 AM',
    location: 'Galway',
    type: 'Workshop',
    description: 'Module 2 of the Digital Women\'s Leadership Programme.',
    registrationUrl: 'https://itag.ie/events/digital-womens-leadership-programme-module-1-2/',
    source: 'itag',
  },
  {
    id: 'itag-oct-21-2',
    title: 'Certified ScrumMaster with Nigel Baker',
    date: '2025-10-21',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'Certified ScrumMaster training with Nigel Baker - 3 day course.',
    registrationUrl: 'https://itag.ie/events/certified-scrummaster-5-4-2/',
    source: 'itag',
    featured: true,
  },
  // October 22
  {
    id: 'itag-oct-22-1',
    title: 'PMI/Project Management Professional – Day 1 – 3',
    date: '2025-10-22',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'PMI Project Management Professional certification training - Day 2.',
    registrationUrl: 'https://itag.ie/events/pmi-project-management-professional-day-1-3/',
    source: 'itag',
  },
  {
    id: 'itag-oct-22-2',
    title: 'Certified ScrumMaster with Nigel Baker',
    date: '2025-10-22',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'Certified ScrumMaster training - Day 2.',
    registrationUrl: 'https://itag.ie/events/certified-scrummaster-5-4-2/',
    source: 'itag',
  },
  // October 23
  {
    id: 'itag-oct-23-1',
    title: 'Certified ScrumMaster with Nigel Baker',
    date: '2025-10-23',
    time: 'TBA',
    location: 'Online',
    type: 'Workshop',
    description: 'Certified ScrumMaster training - Day 3.',
    registrationUrl: 'https://itag.ie/events/certified-scrummaster-5-4-2/',
    source: 'itag',
  },
];

/**
 * November 2025 - March 2026 itag events
 * Adding 6 months forward as requested
 */
export const itagFutureEvents: Event[] = [
  // November 2025 - Pathways Event
  {
    id: 'itag-nov-6-1',
    title: 'Pathways 2025',
    date: '2025-11-06',
    time: '10:00 AM - 4:00 PM',
    location: 'Galway',
    type: 'Career Fair',
    description: 'Ireland\'s premier tech career event organized by itag. Meet universities, employers, and discover your future in technology.',
    registrationUrl: 'https://itag.ie/events/pathways/',
    source: 'itag',
    featured: true,
  },
  // December 2025 Events
  {
    id: 'itag-dec-2-1',
    title: 'Digital Women\'s Leadership Programme – Module 3',
    date: '2025-12-02',
    time: '9:30 AM',
    location: 'Galway',
    type: 'Workshop',
    description: 'Module 3 of the Digital Women\'s Leadership Programme.',
    registrationUrl: 'https://itag.ie/events/digital-womens-leadership-programme/',
    source: 'itag',
  },
  {
    id: 'itag-dec-9-1',
    title: 'itag\'s Advisory Board Meeting',
    date: '2025-12-09',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Advisory Board meeting for itag members.',
    registrationUrl: 'https://itag.ie/events/itags-advisory-board-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-dec-11-1',
    title: 'Cyber Ireland End of Year Event',
    date: '2025-12-11',
    time: 'TBA',
    location: 'Dublin',
    type: 'Networking',
    description: 'End of year networking event for cybersecurity professionals.',
    registrationUrl: 'https://itag.ie/events/',
    source: 'itag',
  },
  // January 2026 Events
  {
    id: 'itag-jan-13-1',
    title: 'itag\'s AI Forum Meeting',
    date: '2026-01-13',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly AI Forum meeting to discuss latest trends in artificial intelligence.',
    registrationUrl: 'https://itag.ie/events/itags-ai-forum-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-jan-15-1',
    title: 'The Accelerated Senior Leadership Program – Workshop #3',
    date: '2026-01-15',
    time: 'TBA',
    location: 'Galway',
    type: 'Workshop',
    description: 'Workshop 3 of the Accelerated Senior Leadership Program.',
    registrationUrl: 'https://itag.ie/events/accelerated-senior-leadership-program/',
    source: 'itag',
  },
  {
    id: 'itag-jan-20-1',
    title: 'itag\'s Cyber Forum Meeting',
    date: '2026-01-20',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Cyber Security Forum meeting.',
    registrationUrl: 'https://itag.ie/events/itags-cyber-forum-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-jan-27-1',
    title: 'Digital Women\'s Leadership Programme – Module 4',
    date: '2026-01-27',
    time: '9:30 AM',
    location: 'Galway',
    type: 'Workshop',
    description: 'Module 4 of the Digital Women\'s Leadership Programme.',
    registrationUrl: 'https://itag.ie/events/digital-womens-leadership-programme/',
    source: 'itag',
  },
  // February 2026 Events
  {
    id: 'itag-feb-10-1',
    title: 'itag\'s Advisory Board Meeting',
    date: '2026-02-10',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Advisory Board meeting for itag members.',
    registrationUrl: 'https://itag.ie/events/itags-advisory-board-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-feb-17-1',
    title: 'itag\'s Agile Forum Event',
    date: '2026-02-17',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Agile Forum event for project management and agile professionals.',
    registrationUrl: 'https://itag.ie/events/itags-agile-forum/',
    source: 'itag',
  },
  {
    id: 'itag-feb-24-1',
    title: 'Digital Women\'s Leadership Programme – Module 5',
    date: '2026-02-24',
    time: '9:30 AM',
    location: 'Galway',
    type: 'Workshop',
    description: 'Module 5 of the Digital Women\'s Leadership Programme.',
    registrationUrl: 'https://itag.ie/events/digital-womens-leadership-programme/',
    source: 'itag',
  },
  // March 2026 Events
  {
    id: 'itag-mar-10-1',
    title: 'itag\'s AI Forum Meeting',
    date: '2026-03-10',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly AI Forum meeting to discuss artificial intelligence innovations.',
    registrationUrl: 'https://itag.ie/events/itags-ai-forum-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-mar-12-1',
    title: 'itag\'s Advisory Board Meeting',
    date: '2026-03-12',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Advisory Board meeting for itag members.',
    registrationUrl: 'https://itag.ie/events/itags-advisory-board-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-mar-17-1',
    title: 'itag\'s Cyber Forum Meeting',
    date: '2026-03-17',
    time: 'TBA',
    location: 'Galway',
    type: 'Conference',
    description: 'Monthly Cyber Security Forum meeting.',
    registrationUrl: 'https://itag.ie/events/itags-cyber-forum-meeting/',
    source: 'itag',
  },
  {
    id: 'itag-mar-24-1',
    title: 'Digital Women\'s Leadership Programme – Final Module',
    date: '2026-03-24',
    time: '9:30 AM',
    location: 'Galway',
    type: 'Workshop',
    description: 'Final module and graduation of the Digital Women\'s Leadership Programme.',
    registrationUrl: 'https://itag.ie/events/digital-womens-leadership-programme/',
    source: 'itag',
  },
];

/**
 * Additional EdUTec events (non-itag)
 */
export const edutecEvents: Event[] = [
  {
    id: 'edutec-2',
    title: 'AI & Machine Learning Workshop',
    date: '2025-11-15',
    time: '2:00 PM - 5:00 PM',
    location: 'Online',
    type: 'Workshop',
    description: 'Hands-on workshop exploring the fundamentals of AI and machine learning. Perfect for beginners and intermediate learners.',
    source: 'edutec',
  },
  {
    id: 'edutec-3',
    title: 'Women in Tech Networking Evening',
    date: '2025-11-22',
    time: '6:00 PM - 9:00 PM',
    location: 'Limerick, Ireland',
    type: 'Networking',
    description: 'Connect with female tech professionals, share experiences, and build your network in a supportive environment.',
    source: 'edutec',
  },
  {
    id: 'edutec-4',
    title: 'Cyber Security Essentials Webinar',
    date: '2025-12-03',
    time: '1:00 PM - 2:30 PM',
    location: 'Online',
    type: 'Webinar',
    description: 'Learn the basics of cyber security, threat detection, and how to protect digital assets in today\'s connected world.',
    source: 'edutec',
  },
  {
    id: 'edutec-5',
    title: 'University Open Day - Tech Programmes',
    date: '2025-12-10',
    time: '9:00 AM - 3:00 PM',
    location: 'Multiple Locations',
    type: 'Conference',
    description: 'Visit university campuses across Ireland to explore tech programmes, meet faculty, and tour facilities.',
    source: 'edutec',
  },
];

/**
 * Get all events (itag calendar + future events + edutec), sorted by date
 */
export async function getAllEvents(): Promise<Event[]> {
  // Use manually curated itag calendar events + future events + EdUTec events
  const allEvents = [...itagCalendarEvents, ...itagFutureEvents, ...edutecEvents];
  
  // Sort by date (earliest first)
  return allEvents.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

/**
 * Get only upcoming events (future dates)
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  const allEvents = await getAllEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return allEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  });
}

/**
 * Get featured events for home page
 */
export async function getFeaturedEvents(limit: number = 3): Promise<Event[]> {
  const upcomingEvents = await getUpcomingEvents();
  
  // Prioritize featured events, then take next upcoming
  const featured = upcomingEvents.filter(e => e.featured);
  const nonFeatured = upcomingEvents.filter(e => !e.featured);
  
  return [...featured, ...nonFeatured].slice(0, limit);
}

