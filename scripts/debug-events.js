/**
 * Debug script to see all event dates
 */

async function debugEvents() {
  console.log('🔍 Debugging event dates...\n');
  
  try {
    const response = await fetch('https://itag.ie/events/feed/');
    const xmlText = await response.text();
    
    // Extract items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = xmlText.match(itemRegex) || [];
    
    console.log(`Found ${items.length} events in itag RSS feed:\n`);
    
    items.forEach((item, index) => {
      // Extract title
      const titleMatch = item.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      let title = titleMatch ? titleMatch[1] : 'N/A';
      const cdataMatch = title.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
      if (cdataMatch) title = cdataMatch[1];
      
      // Extract pubDate
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const pubDate = dateMatch ? dateMatch[1] : 'N/A';
      
      // Extract content
      const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      const content = contentMatch ? contentMatch[1] : '';
      
      // Try to find event date in content
      const datePatterns = [
        /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,
        /(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/,
        /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i,
      ];
      
      let eventDate = 'Not found in content';
      for (const pattern of datePatterns) {
        const match = content.match(pattern);
        if (match) {
          eventDate = match[0];
          break;
        }
      }
      
      console.log(`${index + 1}. ${title}`);
      console.log(`   Published: ${pubDate}`);
      console.log(`   Event Date in Content: ${eventDate}`);
      console.log('');
    });
    
    console.log('\n📅 EdUTec Placeholder Events:');
    console.log('1. Pathways 2025 - Nov 6, 2025');
    console.log('2. AI Workshop - Nov 15, 2025');
    console.log('3. Women in Tech - Nov 22, 2025');
    console.log('4. Cyber Security Webinar - Dec 3, 2025');
    console.log('5. University Open Day - Dec 10, 2025');
    console.log('6. Full-Stack Bootcamp - Jan 15, 2026');
    console.log('7. Mentoring Speed Dating - Jan 20, 2026');
    console.log('8. Data Science Panel - Feb 5, 2026');
    
    console.log('\n💡 Today is:', new Date().toISOString().split('T')[0]);
    console.log('⚠️  If itag events use pubDate (Oct 2025), they are in the PAST and filtered out!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

debugEvents();

