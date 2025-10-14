# itag Events Integration Guide

This document explains how to integrate events from the itag parent company website into the EdUTec events calendar.

## Current Setup

The events system is now modular and ready to fetch events from itag's website. Currently, it uses placeholder EdUTec events as fallback data.

### File Structure

```
src/app/events/
├── page.tsx          # Events calendar UI
├── eventData.ts      # Event fetching logic and data management
scripts/
└── fetch-itag-events.js  # Helper script to analyze itag's event structure
```

## Step 1: Analyze itag's Event Calendar

First, we need to understand how itag's website exposes event data.

### Run the Analysis Script

```bash
node scripts/fetch-itag-events.js
```

This will:
1. Fetch the HTML from itag's events page
2. Look for common patterns (JSON-LD, API endpoints, calendar widgets)
3. Save a snapshot to `itag-events-snapshot.html` for manual inspection

### What to Look For

1. **API Endpoint**: Check browser DevTools Network tab when visiting itag.ie/events
   - Look for XHR/Fetch requests to endpoints like `/api/events` or similar
   - Note the response format (JSON structure)

2. **RSS/iCal Feed**: Check page source for:
   - `<link rel="alternate" type="application/rss+xml">`
   - Links to `.ics` or `.ical` files

3. **Structured Data**: Look for:
   - `<script type="application/ld+json">` with Event schema
   - Data attributes on HTML elements

4. **Calendar Plugin**: Identify if they use:
   - FullCalendar
   - Google Calendar embed
   - Custom calendar solution

## Step 2: Choose Integration Method

Based on what you find, choose the appropriate method:

### Option A: Public API (Best)

If itag has a public API endpoint:

```typescript
// In src/app/events/eventData.ts
export async function fetchItagEvents(): Promise<Event[]> {
  const response = await fetch('https://itag.ie/api/events');
  const data = await response.json();
  return transformItagEvents(data);
}
```

### Option B: RSS Feed

If they have an RSS feed:

```typescript
// Install rss-parser: npm install rss-parser
import Parser from 'rss-parser';

export async function fetchItagEvents(): Promise<Event[]> {
  const parser = new Parser();
  const feed = await parser.parseURL('https://itag.ie/events/feed');
  
  return feed.items.map((item, index) => ({
    id: `itag-${index}`,
    title: item.title || '',
    date: formatDate(item.pubDate || ''),
    time: extractTime(item.content || ''),
    location: extractLocation(item.content || ''),
    type: categorizeEvent(item.title || ''),
    description: item.contentSnippet || '',
    registrationUrl: item.link,
    source: 'itag',
  }));
}
```

### Option C: Server-Side Scraping

If no API/feed exists, use server-side scraping:

```typescript
// Install cheerio: npm install cheerio
// This must run server-side (API route or server component)

import * as cheerio from 'cheerio';

export async function fetchItagEvents(): Promise<Event[]> {
  const response = await fetch('https://itag.ie/events');
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const events: Event[] = [];
  
  $('.event-item').each((i, elem) => {
    events.push({
      id: `itag-${i}`,
      title: $(elem).find('.event-title').text(),
      date: $(elem).find('.event-date').attr('data-date') || '',
      time: $(elem).find('.event-time').text(),
      location: $(elem).find('.event-location').text(),
      type: categorizeEvent($(elem).find('.event-title').text()),
      description: $(elem).find('.event-description').text(),
      registrationUrl: $(elem).find('a').attr('href'),
      source: 'itag',
    });
  });
  
  return events;
}
```

### Option D: Google Calendar Integration

If they use Google Calendar:

```typescript
// Use Google Calendar API
// Get the calendar ID from their embed code
const CALENDAR_ID = 'their-calendar-id@group.calendar.google.com';
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

export async function fetchItagEvents(): Promise<Event[]> {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data.items.map((item: any) => ({
    id: `itag-${item.id}`,
    title: item.summary,
    date: item.start.date || item.start.dateTime.split('T')[0],
    time: formatTime(item.start.dateTime),
    location: item.location || 'TBA',
    type: categorizeEvent(item.summary),
    description: item.description || '',
    registrationUrl: item.htmlLink,
    source: 'itag',
  }));
}
```

## Step 3: Implement the Integration

1. **Update `eventData.ts`**:
   - Implement the `fetchItagEvents()` function based on your chosen method
   - Test the transformation logic
   - Handle errors gracefully

2. **Add Environment Variables** (if needed):
   ```bash
   # .env.local
   ITAG_API_KEY=your-api-key-here
   GOOGLE_CALENDAR_API_KEY=your-key-here
   ```

3. **Test the Integration**:
   ```bash
   npm run dev
   # Visit http://localhost:3000/events
   # Check browser console for any errors
   ```

## Step 4: Add Caching (Optional but Recommended)

To avoid fetching events on every page load:

```typescript
// Simple in-memory cache
let cachedEvents: Event[] | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getUpcomingEvents(): Promise<Event[]> {
  const now = Date.now();
  
  if (cachedEvents && (now - cacheTime) < CACHE_DURATION) {
    return cachedEvents;
  }
  
  const itagEvents = await fetchItagEvents();
  const allEvents = [...itagEvents, ...edutecEvents];
  
  cachedEvents = allEvents.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  cacheTime = now;
  
  return cachedEvents;
}
```

## Step 5: Add Source Badges (Optional)

Show which events come from itag vs EdUTec:

```tsx
// In EventCard component
{event.source === 'itag' && (
  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
    itag Event
  </span>
)}
```

## Troubleshooting

### CORS Issues
If you get CORS errors when fetching from itag's site:
- Create a Next.js API route to proxy the request
- Use server-side fetching (Server Components or API routes)

### Rate Limiting
If itag's site has rate limiting:
- Implement caching (see Step 4)
- Consider fetching events at build time (Static Site Generation)

### Data Format Changes
If itag changes their event structure:
- Add error handling and logging
- Keep fallback EdUTec events as backup
- Monitor for fetch failures

## Contact

If you need help accessing itag's event data:
1. Contact itag's web team
2. Ask if they have a public API or feed
3. Request documentation for their event system

## Current Status

- ✅ Event system architecture complete
- ✅ Placeholder EdUTec events working
- ⏳ Awaiting itag event structure analysis
- ⏳ Integration implementation pending

