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
 * Fetch events from itag website
 * TODO: Implement actual API/scraping logic once we know the itag calendar structure
 */
export async function fetchItagEvents(): Promise<Event[]> {
  try {
    // Option 1: If itag has a public API endpoint
    // const response = await fetch('https://itag.ie/api/events');
    // const data = await response.json();
    // return transformItagEvents(data);

    // Option 2: If they have an RSS feed
    // const response = await fetch('https://itag.ie/events/feed');
    // const feed = await parseRSS(response);
    // return transformRSSEvents(feed);

    // Option 3: If we need to scrape their calendar page
    // This would require server-side implementation
    // const response = await fetch('https://itag.ie/events');
    // const html = await response.text();
    // return scrapeEvents(html);

    // For now, return empty array - will be replaced with actual implementation
    console.log('itag event fetching not yet implemented');
    return [];
  } catch (error) {
    console.error('Error fetching itag events:', error);
    return [];
  }
}

/**
 * Transform itag event data to our Event format
 * Adjust this based on actual itag data structure
 */
function transformItagEvents(itagData: any[]): Event[] {
  return itagData.map((event, index) => ({
    id: `itag-${event.id || index}`,
    title: event.title || event.name,
    date: formatDate(event.date || event.start_date),
    time: event.time || 'TBA',
    location: event.location || event.venue || 'TBA',
    type: categorizeEvent(event.title, event.category),
    description: event.description || event.summary || '',
    registrationUrl: event.registration_url || event.url,
    source: 'itag',
  }));
}

/**
 * Categorize events based on title/tags
 */
function categorizeEvent(title: string, category?: string): Event['type'] {
  const titleLower = title.toLowerCase();
  const categoryLower = category?.toLowerCase() || '';
  
  if (titleLower.includes('workshop') || categoryLower.includes('workshop')) return 'Workshop';
  if (titleLower.includes('career') || titleLower.includes('job fair')) return 'Career Fair';
  if (titleLower.includes('webinar') || categoryLower.includes('webinar')) return 'Webinar';
  if (titleLower.includes('networking') || categoryLower.includes('networking')) return 'Networking';
  if (titleLower.includes('conference') || categoryLower.includes('conference')) return 'Conference';
  
  return 'Other';
}

/**
 * Format date to ISO format
 */
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
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

