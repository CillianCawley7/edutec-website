/**
 * Parse the calendar table HTML to extract events with their actual dates
 */

const https = require('https');
const fs = require('fs');

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

function parseCalendarTable(html) {
  const events = [];
  
  // The calendar is in October 2025
  const year = 2025;
  const month = 10; // October
  
  // Extract table cells with day numbers and events
  // Pattern: day number followed by event links
  const cellPattern = /<td[^>]*>([\s\S]*?)<\/td>/g;
  
  let cellMatch;
  let currentDay = null;
  
  // First, let's find all the day cells
  const dayPattern = />\s*(\d{1,2})\s*<\/td>|>\s*(\d{1,2})\s+<a href/g;
  
  // Better approach: find event links with their context
  const eventWithDayPattern = /(\d{1,2})\s+<a href="(https:\/\/itag\.ie\/events\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
  
  let match;
  while ((match = eventWithDayPattern.exec(html)) !== null) {
    const day = parseInt(match[1]);
    const url = match[2];
    const title = cleanHTML(match[3]);
    
    // Skip category links
    if (url.includes('/event-categories/')) continue;
    
    // Create date string
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    events.push({
      title,
      url,
      date: dateStr,
      day,
    });
  }
  
  return events;
}

async function main() {
  console.log('🔍 Parsing itag calendar table structure...\n');
  
  // Read the saved calendar HTML
  const html = fs.readFileSync('itag-calendar-page.html', 'utf8');
  
  const events = parseCalendarTable(html);
  
  console.log(`✅ Found ${events.length} events with dates:\n`);
  
  // Group by date
  const byDate = {};
  events.forEach(event => {
    if (!byDate[event.date]) byDate[event.date] = [];
    byDate[event.date].push(event);
  });
  
  // Sort by date
  const sortedDates = Object.keys(byDate).sort();
  
  sortedDates.forEach(date => {
    const eventsOnDate = byDate[date];
    console.log(`📅 ${date} (${eventsOnDate.length} events):`);
    eventsOnDate.forEach(event => {
      console.log(`   • ${event.title}`);
    });
    console.log('');
  });
  
  console.log(`\n📊 Total: ${events.length} events across ${sortedDates.length} days`);
}

main();

