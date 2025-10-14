/**
 * Script to fetch and analyze events from itag website
 * 
 * Usage: node scripts/fetch-itag-events.js
 * 
 * This will help us understand the structure of itag's event calendar
 * so we can properly integrate it.
 */

const https = require('https');

const ITAG_EVENTS_URL = 'https://itag.ie/events/'; // Adjust this URL as needed

async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function analyzeItagEvents() {
  console.log('🔍 Fetching itag events from:', ITAG_EVENTS_URL);
  console.log('');
  
  try {
    const html = await fetchHTML(ITAG_EVENTS_URL);
    
    console.log('✅ Successfully fetched HTML');
    console.log('📄 Page length:', html.length, 'characters');
    console.log('');
    
    // Look for common event calendar patterns
    const patterns = {
      'JSON-LD structured data': /<script type="application\/ld\+json">(.*?)<\/script>/gs,
      'Event classes': /class="[^"]*event[^"]*"/gi,
      'Calendar divs': /<div[^>]*calendar[^>]*>/gi,
      'Date patterns': /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/g,
      'Time patterns': /\d{1,2}:\d{2}\s*(AM|PM|am|pm)?/g,
    };
    
    console.log('🔎 Analyzing HTML structure:\n');
    
    for (const [name, pattern] of Object.entries(patterns)) {
      const matches = html.match(pattern);
      if (matches) {
        console.log(`✓ Found ${matches.length} matches for: ${name}`);
        if (matches.length <= 5) {
          console.log('  Examples:', matches.slice(0, 3));
        }
      } else {
        console.log(`✗ No matches for: ${name}`);
      }
    }
    
    console.log('\n');
    console.log('📋 Next steps:');
    console.log('1. Examine the HTML structure manually at:', ITAG_EVENTS_URL);
    console.log('2. Look for:');
    console.log('   - API endpoints (check Network tab in browser DevTools)');
    console.log('   - RSS/iCal feeds');
    console.log('   - Structured data (JSON-LD)');
    console.log('   - Calendar widget/plugin being used');
    console.log('3. Update eventData.ts with the appropriate fetching logic');
    console.log('');
    
    // Save HTML for manual inspection
    const fs = require('fs');
    const outputPath = './itag-events-snapshot.html';
    fs.writeFileSync(outputPath, html);
    console.log('💾 Saved HTML snapshot to:', outputPath);
    console.log('   Open this file to inspect the structure');
    
  } catch (error) {
    console.error('❌ Error fetching events:', error.message);
    console.log('');
    console.log('💡 Tips:');
    console.log('- Check if the URL is correct');
    console.log('- The site might require authentication');
    console.log('- They might use JavaScript to load events (check for API calls)');
    console.log('- Try accessing the URL in your browser first');
  }
}

// Run the analysis
analyzeItagEvents();

