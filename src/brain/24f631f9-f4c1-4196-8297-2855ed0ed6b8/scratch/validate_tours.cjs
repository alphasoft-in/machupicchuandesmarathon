const fs = require('fs');
const path = require('path');

const toursDir = 'src/content/tours';
const files = fs.readdirSync(toursDir);

const report = [];

files.forEach(file => {
    if (!file.endsWith('.json')) return;
    
    const filePath = path.join(toursDir, file);
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        const en = data.en || {};
        const es = data.es || {};
        
        if (!en.title || !es.title) {
            report.push(`${file}: Missing EN or ES section`);
            return;
        }
        
        const durationEn = en.duration || '';
        const itineraryEn = en.itinerary || [];
        const itineraryEs = es.itinerary || [];
        
        let days = 1;
        const match = durationEn.match(/^(\d+)/);
        if (match) {
            days = parseInt(match[1]);
        }
        
        if (itineraryEn.length !== days) {
            report.push(`${file}: Duration says ${days} days, but EN itinerary has ${itineraryEn.length}`);
        }
        
        if (itineraryEs.length !== days) {
            report.push(`${file}: Duration says ${days} days, but ES itinerary has ${itineraryEs.length}`);
        }

        if (en.title === es.title) {
            report.push(`${file}: ES title is identical to EN title: '${es.title}'`);
        }

    } catch (e) {
        report.push(`${file}: Error parsing JSON: ${e.message}`);
    }
});

report.forEach(line => console.log(line));
