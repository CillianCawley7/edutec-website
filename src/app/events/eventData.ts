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
        const eventDate = extractEventDate(content, pubDate);
        const eventTime = extractEventTime(content);
        const eventLocation = extractEventLocation(content);
        
        if (title && eventDate) {
          events.push({
            id: `itag-${index + 1}`,
            title: cleanHTML(title),
            date: eventDate,
            time: eventTime || 'TBA',
            location: eventLocation || 'TBA',
            type: categorizeEvent(title),
            description: cleanHTML(description || '').substring(0, 200),
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
  // Try to find date patterns in content
  const datePatterns = [
    /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,  // DD/MM/YYYY or DD-MM-YYYY
    /(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/,  // YYYY/MM/DD or YYYY-MM-DD
    /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i,
  ];
  
  for (const pattern of datePatterns) {
    const match = content.match(pattern);
    if (match) {
      try {
        // Try to parse the matched date
        const dateStr = match[0];
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
          return date.toISOString().split('T')[0];
        }
      } catch (e) {
        // Continue to next pattern
      }
    }
  }
  
  // Fallback to pubDate
  try {
    const date = new Date(pubDate);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0];
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
 * Placeholder/fallback events for EdUTec
 */
export const edutecEvents: Event[] = [
  {
    id: 'edutec-1',
    title: 'Pathways 2025 - Tech Career Fair',
    date: '2025-11-06',
    time: '10:00 AM - 4:00 PM',
    location: 'Galway, Ireland',
    type: 'Career Fair',
    description: 'Ireland\'s premier tech career event. Meet universities, employers, and discover your future in technology.',
    registrationUrl: '/initiatives/pathways',
    featured: true,
    source: 'edutec',
  },
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
  {
    id: 'edutec-6',
    title: 'Full-Stack Development Bootcamp',
    date: '2026-01-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Dublin, Ireland',
    type: 'Workshop',
    description: 'Intensive one-day bootcamp covering modern web development with React, Node.js, and databases.',
    source: 'edutec',
  },
  {
    id: 'edutec-7',
    title: 'Tech Mentoring Speed Dating',
    date: '2026-01-20',
    time: '5:00 PM - 7:00 PM',
    location: 'Galway, Ireland',
    type: 'Networking',
    description: 'Meet potential mentors in quick 10-minute sessions. Find the perfect match for your career development journey.',
    source: 'edutec',
  },
  {
    id: 'edutec-8',
    title: 'Data Science Career Panel',
    date: '2026-02-05',
    time: '3:00 PM - 5:00 PM',
    location: 'Online',
    type: 'Webinar',
    description: 'Hear from industry data scientists about career paths, required skills, and breaking into the field.',
    source: 'edutec',
  },
];

/**
 * Get all events (itag + edutec), sorted by date
 */
export async function getAllEvents(): Promise<Event[]> {
  const itagEvents = await fetchItagEvents();
  const allEvents = [...itagEvents, ...edutecEvents];
  
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

