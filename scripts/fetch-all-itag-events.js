/**
 * Fetch ALL itag events with full details by scraping individual event pages
 */

const https = require('https');

async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function cleanHTML(text) {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, '')
    .trim();
}

function extractEventDetails(html, url) {
  // Extract date - look for various patterns
  const datePatterns = [
    /<time[^>]*datetime="([^"]+)"[^>]*>([^<]+)<\/time>/i,
    /Date:\s*<\/strong>\s*([^<]+)/i,
    /(\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4})/i,
    /(\d{1,2}\/\d{1,2}\/\d{4})/,
  ];
  
  let eventDate = null;
  for (const pattern of datePatterns) {
    const match = html.match(pattern);
    if (match) {
      eventDate = match[1] || match[2];
      break;
    }
  }
  
  // Extract time
  const timePatterns = [
    /Time:\s*<\/strong>\s*([^<]+)/i,
    /(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))/,
  ];
  
  let eventTime = null;
  for (const pattern of timePatterns) {
    const match = html.match(pattern);
    if (match) {
      eventTime = match[1].trim();
      break;
    }
  }
  
  // Extract location
  const locationPatterns = [
    /Location:\s*<\/strong>\s*([^<]+)/i,
    /Venue:\s*<\/strong>\s*([^<]+)/i,
  ];
  
  let location = null;
  for (const pattern of locationPatterns) {
    const match = html.match(pattern);
    if (match) {
      location = cleanHTML(match[1]);
      break;
    }
  }
  
  return {
    date: eventDate,
    time: eventTime,
    location: location,
  };
}

async function fetchEventDetails(url, title) {
  try {
    const html = await fetchHTML(url);
    const details = extractEventDetails(html, url);
    return {
      title: cleanHTML(title),
      url,
      ...details,
    };
  } catch (error) {
    console.error(`   ❌ Error fetching ${url}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🔍 Fetching ALL itag events with full details...\n');
  
  // First, get all event URLs from calendar
  const calendarHTML = await fetchHTML('https://itag.ie/calendar/');
  const eventLinkRegex = /<a href="(https:\/\/itag\.ie\/events\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
  
  const eventMap = new Map();
  let match;
  while ((match = eventLinkRegex.exec(calendarHTML)) !== null) {
    const url = match[1];
    const title = match[2].trim();
    if (!url.includes('/event-categories/')) {
      eventMap.set(url, title);
    }
  }
  
  console.log(`📅 Found ${eventMap.size} events on calendar\n`);
  console.log('⏳ Fetching details for each event...\n');
  
  const events = [];
  let index = 1;
  
  for (const [url, title] of eventMap) {
    console.log(`${index}/${eventMap.size} Fetching: ${title.substring(0, 50)}...`);
    const event = await fetchEventDetails(url, title);
    if (event) {
      events.push(event);
      console.log(`   ✓ Date: ${event.date || 'TBA'}, Time: ${event.time || 'TBA'}, Location: ${event.location || 'TBA'}`);
    }
    index++;
    
    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n✅ Successfully fetched ${events.length} events with details\n`);
  
  // Show summary
  console.log('📊 Events Summary:\n');
  events.forEach((event, i) => {
    console.log(`${i + 1}. ${event.title}`);
    console.log(`   Date: ${event.date || 'TBA'}`);
    console.log(`   Time: ${event.time || 'TBA'}`);
    console.log(`   Location: ${event.location || 'TBA'}`);
    console.log('');
  });
}

main();

