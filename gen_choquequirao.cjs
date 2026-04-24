const fs = require('fs');

const data4D = JSON.parse(fs.readFileSync('./src/content/tours/choquequirao-trek-4d3n.json', 'utf8'));
data4D.en.itinerary = [
  { day: 1, title: 'Cusco – Capuliyoc – Chiquiska', description: 'Depart Cusco early morning, driving to Capuliyoc pass (2,900m). Enjoy panoramic views of the Apurimac canyon and Padreyoc snow-capped peaks. Hike down to our first camp at Chiquiska (1,930m).' },
  { day: 2, title: 'Chiquiska – Playa Rosalina – Choquequirao', description: 'Early start descending to Playa Rosalina (1,550m) to cross the Apurimac River. Then, a challenging uphill hike to Marampata for lunch. Continue to the Choquequirao campsite (2,950m), close to the archaeological site.' },
  { day: 3, title: 'Explore Choquequirao – Chiquiska', description: 'Spend the morning exploring the magnificent Choquequirao ruins, including the main plaza, terraces, and the famous llamas sector. In the afternoon, descend back to the Apurimac River and hike up to Chiquiska camp.' },
  { day: 4, title: 'Chiquiska – Capuliyoc – Cusco', description: 'An early hike up to the Capuliyoc pass to avoid the strong midday sun. Celebrate the completion of the trek, say goodbye to our horsemen, and drive back to Cusco, arriving in the evening.' }
];
data4D.es.itinerary = [
  { day: 1, title: 'Cusco – Capuliyoc – Chiquiska', description: 'Salida de Cusco temprano hacia el paso de Capuliyoc (2,900m). Disfruta de vistas panorámicas del cañón del Apurímac y picos nevados. Descenso hasta nuestro primer campamento en Chiquiska (1,930m).' },
  { day: 2, title: 'Chiquiska – Playa Rosalina – Choquequirao', description: 'Inicio temprano descendiendo a Playa Rosalina (1,550m) para cruzar el río Apurímac. Luego, un exigente ascenso hacia Marampata para almorzar. Continuamos hasta el campamento de Choquequirao (2,950m), muy cerca del sitio arqueológico.' },
  { day: 3, title: 'Explorar Choquequirao – Chiquiska', description: 'Pasamos la mañana explorando las magníficas ruinas de Choquequirao, incluyendo la plaza principal, andenes y el famoso sector de las llamas. Por la tarde, descendemos de regreso al río Apurímac y subimos al campamento de Chiquiska.' },
  { day: 4, title: 'Chiquiska – Capuliyoc – Cusco', description: 'Una caminata matutina hasta el paso de Capuliyoc para evitar el fuerte sol del mediodía. Celebramos el fin del trek, nos despedimos de los arrieros y regresamos a Cusco, llegando por la tarde-noche.' }
];
fs.writeFileSync('./src/content/tours/choquequirao-trek-4d3n.json', JSON.stringify(data4D, null, 2));

const data5D = JSON.parse(fs.readFileSync('./src/content/tours/choquequirao-trek-5d4n.json', 'utf8'));
data5D.en.itinerary = [
  { day: 1, title: 'Cusco – Capuliyoc – Chiquiska', description: 'Depart Cusco early morning, driving to Capuliyoc pass (2,900m). Enjoy panoramic views of the Apurimac canyon. Hike down to our first camp at Chiquiska (1,930m).' },
  { day: 2, title: 'Chiquiska – Playa Rosalina – Marampata', description: 'Descend to Playa Rosalina (1,550m) to cross the Apurimac River. Challenge yourself with an uphill hike to Marampata (2,850m) where we will camp and enjoy spectacular sunset views over the canyon.' },
  { day: 3, title: 'Marampata – Choquequirao (Full Day Exploration)', description: 'A short hike brings us to the Choquequirao ruins. Spend the entire day exploring the vast archaeological complex, including the main plaza, terraces, and the famous llamas sector without rushing. Camp near the ruins.' },
  { day: 4, title: 'Choquequirao – Playa Rosalina – Chiquiska', description: 'Enjoy a final morning view of Choquequirao before descending back to the Apurimac River at Playa Rosalina. Cross the bridge and hike up to Chiquiska camp for the night.' },
  { day: 5, title: 'Chiquiska – Capuliyoc – Cusco', description: 'An early hike up to the Capuliyoc pass. Celebrate the completion of the trek, say goodbye to our team, and drive back to Cusco, arriving in the late afternoon.' }
];
data5D.es.itinerary = [
  { day: 1, title: 'Cusco – Capuliyoc – Chiquiska', description: 'Salida de Cusco temprano hacia el paso de Capuliyoc (2,900m). Disfruta de vistas panorámicas del cañón del Apurímac. Descenso hasta nuestro primer campamento en Chiquiska (1,930m).' },
  { day: 2, title: 'Chiquiska – Playa Rosalina – Marampata', description: 'Descenso a Playa Rosalina (1,550m) para cruzar el río Apurímac. Desafíate con un ascenso hasta Marampata (2,850m) donde acamparemos y disfrutaremos de espectaculares vistas del atardecer.' },
  { day: 3, title: 'Marampata – Choquequirao (Día Completo)', description: 'Una corta caminata nos lleva a las ruinas de Choquequirao. Pasa todo el día explorando el vasto complejo arqueológico, incluyendo la plaza principal, andenes y el sector de las llamas sin prisas. Campamento cerca a las ruinas.' },
  { day: 4, title: 'Choquequirao – Playa Rosalina – Chiquiska', description: 'Disfruta de una última vista matutina de Choquequirao antes de descender de regreso al río Apurímac en Playa Rosalina. Cruza el puente y sube al campamento de Chiquiska.' },
  { day: 5, title: 'Chiquiska – Capuliyoc – Cusco', description: 'Caminata matutina hasta el paso de Capuliyoc. Celebramos el fin del trek, nos despedimos de nuestro equipo y regresamos a Cusco por la tarde.' }
];
fs.writeFileSync('./src/content/tours/choquequirao-trek-5d4n.json', JSON.stringify(data5D, null, 2));

const data6D = JSON.parse(fs.readFileSync('./src/content/tours/choquequirao-trek-machu-picchu-6d.json', 'utf8'));
data6D.en.itinerary = [
  { day: 1, title: 'Cusco – Capuliyoc – Chiquiska', description: 'Drive from Cusco to Capuliyoc. Hike down into the Apurimac canyon, enjoying spectacular views. Camp at Chiquiska (1,930m).' },
  { day: 2, title: 'Chiquiska – Marampata – Choquequirao', description: 'Cross the Apurimac River and hike uphill to Marampata. Continue to the Choquequirao campsite. Enjoy an afternoon introduction to the ruins.' },
  { day: 3, title: 'Choquequirao – Pinchaunuyoc – Rio Blanco – Maizal', description: 'Explore Choquequirao in the morning. Then hike over the Choquequirao pass and descend to the Pinchaunuyoc ruins. Continue down to Rio Blanco and ascend to camp at Maizal (3,000m).' },
  { day: 4, title: 'Maizal – San Juan Pass – Yanama', description: 'A tough uphill hike through cloud forests and historic silver mines to the San Juan pass (4,150m). Enjoy views of the Vilcabamba range before descending to Yanama village (3,520m).' },
  { day: 5, title: 'Yanama – Yanama Pass – Totora – Santa Teresa / Aguas Calientes', description: 'Hike to the highest pass of the trek, Yanama Pass (4,668m). Descend into the jungle to Totora. From here, we take transport to Hidroelectrica and take the train to Aguas Calientes for a hotel stay.' },
  { day: 6, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Early morning bus to Machu Picchu. Enjoy a comprehensive guided tour of the lost citadel. In the afternoon, take the train and private transport back to Cusco.' }
];
data6D.es.itinerary = [
  { day: 1, title: 'Cusco – Capuliyoc – Chiquiska', description: 'Viaje desde Cusco a Capuliyoc. Descenso hacia el cañón del Apurímac, disfrutando de vistas espectaculares. Campamento en Chiquiska (1,930m).' },
  { day: 2, title: 'Chiquiska – Marampata – Choquequirao', description: 'Cruzamos el río Apurímac y subimos a Marampata. Continuamos hasta el campamento de Choquequirao. Disfruta de una introducción a las ruinas por la tarde.' },
  { day: 3, title: 'Choquequirao – Pinchaunuyoc – Río Blanco – Maizal', description: 'Explora Choquequirao por la mañana. Luego caminamos sobre el paso de Choquequirao y descendemos a las ruinas de Pinchaunuyoc. Continuamos hasta Río Blanco y ascendemos al campamento en Maizal (3,000m).' },
  { day: 4, title: 'Maizal – Paso San Juan – Yanama', description: 'Una exigente caminata a través de bosques nubosos y antiguas minas de plata hasta el paso de San Juan (4,150m). Disfruta de las vistas de la cordillera de Vilcabamba antes de descender al pueblo de Yanama (3,520m).' },
  { day: 5, title: 'Yanama – Paso Yanama – Totora – Santa Teresa / Aguas Calientes', description: 'Caminata hasta el paso más alto del trek, Paso Yanama (4,668m). Descenso hacia la selva hasta Totora. Desde allí, tomamos transporte hasta Hidroeléctrica y tomamos el tren a Aguas Calientes para pasar la noche en un hotel.' },
  { day: 6, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Bus temprano por la mañana a Machu Picchu. Disfruta de un tour guiado completo por la ciudadela perdida. Por la tarde, toma el tren y transporte privado de regreso a Cusco.' }
];
fs.writeFileSync('./src/content/tours/choquequirao-trek-machu-picchu-6d.json', JSON.stringify(data6D, null, 2));

console.log('Updated Choquequirao itineraries');
