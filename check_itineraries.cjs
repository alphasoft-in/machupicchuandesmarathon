const fs = require('fs');
const path = require('path');

const toursDir = path.join(__dirname, 'src', 'content', 'tours');
const files = fs.readdirSync(toursDir).filter(f => f.endsWith('.json'));

let hasErrors = false;

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(toursDir, file), 'utf8'));
  const checkLang = (lang) => {
    const langData = data[lang];
    if (!langData) {
      console.log(`[ERROR] ${file}: Missing ${lang} data`);
      hasErrors = true;
      return;
    }
    if (!langData.itinerary || !Array.isArray(langData.itinerary)) {
      console.log(`[ERROR] ${file}: Missing or invalid itinerary in ${lang}`);
      hasErrors = true;
      return;
    }
    
    // Extract expected days from duration string like "4D/3N" or "4 Days" or "1 Day"
    let expectedDays = 0;
    const duration = langData.duration.toLowerCase();
    const match = duration.match(/(\d+)\s*(?:d|day|día|hr|hour|hora)/i);
    
    if (match) {
      if (duration.includes('hr') || duration.includes('hour') || duration.includes('hora') || duration.includes('half')) {
        expectedDays = 1; // Half day or hours usually count as 1 itinerary item
      } else {
        expectedDays = parseInt(match[1], 10);
      }
    } else if (duration.includes('half')) {
      expectedDays = 1;
    }

    if (expectedDays > 0 && langData.itinerary.length !== expectedDays) {
      console.log(`[WARNING] ${file} (${lang}): Itinerary length (${langData.itinerary.length}) does not match expected duration (${langData.duration})`);
      hasErrors = true;
    }
  };

  checkLang('en');
  checkLang('es');
}

if (!hasErrors) {
  console.log("All tours have valid itineraries that match their durations.");
}
