import os
import json

tours_dir = 'src/content/tours'
files = os.listdir(tours_dir)

report = []

for file in files:
    if not file.endswith('.json'):
        continue
    
    path = os.path.join(tours_dir, file)
    with open(path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
            
            slug = data.get('slug')
            en = data.get('en', {})
            es = data.get('es', {})
            
            # Check translations
            if not en or not es:
                report.append(f"{file}: Missing EN or ES section")
                continue
            
            # Check itinerary days
            duration_en = en.get('duration', '')
            itinerary_en = en.get('itinerary', [])
            itinerary_es = es.get('itinerary', [])
            
            # Try to parse days from duration string
            days = 1
            if 'day' in duration_en.lower():
                try:
                    days = int(duration_en.split()[0])
                except:
                    pass
            
            if len(itinerary_en) != days:
                 report.append(f"{file}: Duration says {days} days, but EN itinerary has {len(itinerary_en)}")
            
            if len(itinerary_es) != days:
                 report.append(f"{file}: Duration says {days} days, but ES itinerary has {len(itinerary_es)}")

            # Check if ES title is same as EN (might be untranslated)
            if en.get('title') == es.get('title'):
                 report.append(f"{file}: ES title is identical to EN title: '{es.get('title')}'")

        except Exception as e:
            report.append(f"{file}: Error parsing JSON: {str(e)}")

for line in report:
    print(line)
