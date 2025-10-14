/**
 * Test script to verify itag event fetching works
 */

async function testFetch() {
  console.log('🧪 Testing itag event fetch...\n');
  
  try {
    const response = await fetch('https://itag.ie/events/feed/');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const xmlText = await response.text();
    console.log('✅ Successfully fetched RSS feed');
    console.log(`📄 Feed size: ${xmlText.length} characters\n`);
    
    // Extract items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = xmlText.match(itemRegex) || [];
    
    console.log(`📅 Found ${items.length} events in feed\n`);
    
    // Parse first few events as examples
    items.slice(0, 3).forEach((item, index) => {
      // Extract with CDATA handling
      const titleMatch = item.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      let title = titleMatch ? titleMatch[1] : 'N/A';
      const cdataMatch = title.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
      if (cdataMatch) title = cdataMatch[1];
      
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      
      console.log(`Event ${index + 1}:`);
      console.log(`  Title: ${title}`);
      console.log(`  Link: ${linkMatch ? linkMatch[1] : 'N/A'}`);
      console.log(`  Date: ${dateMatch ? dateMatch[1] : 'N/A'}`);
      console.log('');
    });
    
    console.log('✅ Integration test passed!');
    console.log('💡 Events will now appear on your calendar page');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Fallback EdUTec events will be used instead');
  }
}

testFetch();

