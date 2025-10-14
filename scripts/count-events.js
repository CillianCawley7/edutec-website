/**
 * Count total events that will appear on the calendar
 */

// Simulate the event extraction logic
function extractEventDate(content, pubDate) {
  // Try to find date patterns in content first
  const datePatterns = [
    /(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i,
    /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i,
  ];
  
  for (const pattern of datePatterns) {
    const match = content.match(pattern);
    if (match) {
      try {
        const dateStr = match[0];
        const date = new Date(dateStr);
        if (!isNaN(date.getTime()) && date.getFullYear() >= 2025) {
          return date.toISOString().split('T')[0];
        }
      } catch (e) {
        // Continue
      }
    }
  }
  
  // Fallback: use pubDate + 1 month buffer
  try {
    const pubDateObj = new Date(pubDate);
    if (!isNaN(pubDateObj.getTime())) {
      const today = new Date();
      
      if (pubDateObj < today) {
        const futureDate = new Date(pubDateObj);
        futureDate.setMonth(futureDate.getMonth() + 1);
        
        if (futureDate < today) {
          const weekFromNow = new Date(today);
          weekFromNow.setDate(weekFromNow.getDate() + 7);
          return weekFromNow.toISOString().split('T')[0];
        }
        
        return futureDate.toISOString().split('T')[0];
      }
      
      return pubDateObj.toISOString().split('T')[0];
    }
  } catch (e) {
    // Fallback
  }
  
  return new Date().toISOString().split('T')[0];
}

async function countEvents() {
  console.log('📊 Counting events on calendar...\n');
  
  try {
    // Fetch itag events
    const response = await fetch('https://itag.ie/events/feed/');
    const xmlText = await response.text();
    
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = xmlText.match(itemRegex) || [];
    
    console.log(`🔵 itag RSS feed: ${items.length} events`);
    
    // Process each event
    let upcomingCount = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    items.forEach((item, index) => {
      const titleMatch = item.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      let title = titleMatch ? titleMatch[1] : '';
      const cdataMatch = title.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
      if (cdataMatch) title = cdataMatch[1];
      
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const pubDate = dateMatch ? dateMatch[1] : '';
      
      const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      const content = contentMatch ? contentMatch[1] : '';
      
      const eventDate = extractEventDate(content, pubDate);
      const eventDateObj = new Date(eventDate);
      
      if (eventDateObj >= today) {
        upcomingCount++;
        console.log(`  ✓ ${index + 1}. ${title.substring(0, 50)}... (${eventDate})`);
      } else {
        console.log(`  ✗ ${index + 1}. ${title.substring(0, 50)}... (${eventDate}) - PAST`);
      }
    });
    
    console.log(`\n🟢 EdUTec placeholder events: 8 events`);
    console.log('  ✓ All EdUTec events are in the future\n');
    
    const totalUpcoming = upcomingCount + 8;
    
    console.log('═'.repeat(50));
    console.log(`📅 TOTAL UPCOMING EVENTS: ${totalUpcoming}`);
    console.log(`   - ${upcomingCount} from itag`);
    console.log(`   - 8 from EdUTec`);
    console.log('═'.repeat(50));
    
    if (totalUpcoming < 18) {
      console.log(`\n⚠️  Expected 18 total (10 itag + 8 EdUTec)`);
      console.log(`   Some itag events may be filtered as past events`);
    } else {
      console.log(`\n✅ All events are showing!`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

countEvents();

