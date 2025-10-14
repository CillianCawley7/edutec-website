/**
 * Scrape itag calendar page directly to get ALL events
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

function extractEventsFromCalendar(html) {
  const events = [];
  const eventMap = new Map(); // Prevent duplicates
  
  // Extract event links and titles from the calendar table
  const eventLinkRegex = /<a href="(https:\/\/itag\.ie\/events\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
  
  let match;
  while ((match = eventLinkRegex.exec(html)) !== null) {
    const url = match[1];
    const title = match[2].trim();
    
    // Skip category links
    if (url.includes('/event-categories/')) continue;
    
    // Clean up HTML entities
    const cleanTitle = title
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, "–")
      .replace(/&#038;/g, "&")
      .replace(/&amp;/g, "&");
    
    if (!eventMap.has(url)) {
      eventMap.set(url, cleanTitle);
    }
  }
  
  console.log(`\n📅 Found ${eventMap.size} unique events on itag calendar:\n`);
  
  let index = 1;
  for (const [url, title] of eventMap) {
    console.log(`${index}. ${title}`);
    console.log(`   ${url}`);
    console.log('');
    index++;
  }
  
  return Array.from(eventMap.entries()).map(([url, title]) => ({
    url,
    title
  }));
}

async function main() {
  console.log('🔍 Scraping itag calendar page...\n');
  
  try {
    const html = await fetchHTML('https://itag.ie/calendar/');
    console.log(`✅ Fetched calendar page (${html.length} characters)\n`);
    
    const events = extractEventsFromCalendar(html);
    
    console.log(`\n✅ Successfully extracted ${events.length} events`);
    console.log('\n💡 These events should all appear in your calendar!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();

