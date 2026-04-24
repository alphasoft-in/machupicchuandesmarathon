const fs = require('fs');

const dataSalk4D = JSON.parse(fs.readFileSync('./src/content/tours/salkantay-trek-4d3n.json', 'utf8'));
dataSalk4D.en.itinerary = [
  { day: 1, title: 'Cusco – Soraypampa – Humantay Lake', description: 'Early morning drive to Soraypampa (3,900m). Hike up to the stunning Humantay Lake (4,200m) to acclimatize. Return to Soraypampa for lunch and camp overnight with views of the Salkantay peak.' },
  { day: 2, title: 'Soraypampa – Salkantay Pass – Chaullay', description: 'The most challenging day. Hike up to the Salkantay Pass (4,600m) enjoying spectacular views of the glacier. Descend into the cloud forest and camp at Chaullay (2,900m).' },
  { day: 3, title: 'Chaullay – Lucmabamba – Hidroelectrica – Aguas Calientes', description: 'Hike through the lush high jungle, passing coffee and passion fruit plantations. From Lucmabamba, take transport to Hidroelectrica, then walk along the train tracks to Aguas Calientes for a hotel stay.' },
  { day: 4, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Early bus to Machu Picchu. Enjoy a guided tour of the citadel. Afternoon train and private transport back to Cusco.' }
];
dataSalk4D.es.itinerary = [
  { day: 1, title: 'Cusco – Soraypampa – Laguna Humantay', description: 'Viaje temprano a Soraypampa (3,900m). Caminata hacia la impresionante Laguna Humantay (4,200m) para aclimatar. Regreso a Soraypampa para el almuerzo y campamento con vistas al nevado Salkantay.' },
  { day: 2, title: 'Soraypampa – Paso Salkantay – Chaullay', description: 'El día más exigente. Subida al Paso Salkantay (4,600m) disfrutando de vistas espectaculares del glaciar. Descenso hacia el bosque nuboso y campamento en Chaullay (2,900m).' },
  { day: 3, title: 'Chaullay – Lucmabamba – Hidroeléctrica – Aguas Calientes', description: 'Caminata por la selva alta, pasando por plantaciones de café y maracuyá. Desde Lucmabamba, transporte a Hidroeléctrica y caminata por las vías del tren hasta Aguas Calientes para pasar la noche en un hotel.' },
  { day: 4, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Bus temprano a Machu Picchu. Tour guiado por la ciudadela. Por la tarde, tren y transporte privado de regreso a Cusco.' }
];
fs.writeFileSync('./src/content/tours/salkantay-trek-4d3n.json', JSON.stringify(dataSalk4D, null, 2));

const dataSalk5D = JSON.parse(fs.readFileSync('./src/content/tours/classic-salkantay-5d4n.json', 'utf8'));
dataSalk5D.en.itinerary = [
  { day: 1, title: 'Cusco – Soraypampa – Humantay Lake', description: 'Morning drive to Soraypampa. Afternoon hike to Humantay Lake (4,200m) for acclimatization. Camp at Soraypampa (3,900m) under the stars.' },
  { day: 2, title: 'Soraypampa – Salkantay Pass – Chaullay', description: 'Tough ascent to the Salkantay Pass (4,600m), the highest point of the trek. Witness the massive glaciers before a long descent into the cloud forest, camping at Chaullay (2,900m).' },
  { day: 3, title: 'Chaullay – Lucmabamba', description: 'Hike through the Santa Teresa valley, a lush microclimate with orchids, coffee farms, and waterfalls. Camp at Lucmabamba (2,000m) and enjoy a local coffee tour.' },
  { day: 4, title: 'Lucmabamba – Llactapata – Aguas Calientes', description: 'Hike up a section of the original Inca Trail to the Llactapata ruins, offering a unique distant view of Machu Picchu. Descend to Hidroelectrica and walk to Aguas Calientes for the night.' },
  { day: 5, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Take the first bus to Machu Picchu. Fully guided tour of the lost city. In the afternoon, take the train back to Ollantaytambo and transfer to your hotel in Cusco.' }
];
dataSalk5D.es.itinerary = [
  { day: 1, title: 'Cusco – Soraypampa – Laguna Humantay', description: 'Viaje matutino a Soraypampa. Caminata por la tarde a la Laguna Humantay (4,200m) para aclimatación. Campamento en Soraypampa (3,900m) bajo las estrellas.' },
  { day: 2, title: 'Soraypampa – Paso Salkantay – Chaullay', description: 'Exigente ascenso al Paso Salkantay (4,600m), el punto más alto del trek. Observa los inmensos glaciares antes de un largo descenso hacia el bosque nuboso, acampando en Chaullay (2,900m).' },
  { day: 3, title: 'Chaullay – Lucmabamba', description: 'Caminata por el valle de Santa Teresa, un exuberante microclima con orquídeas, fincas de café y cascadas. Campamento en Lucmabamba (2,000m) y tour de café local.' },
  { day: 4, title: 'Lucmabamba – Llactapata – Aguas Calientes', description: 'Subida por una sección del Camino Inca original hasta las ruinas de Llactapata, que ofrecen una vista lejana y única de Machu Picchu. Descenso a Hidroeléctrica y caminata a Aguas Calientes para pasar la noche.' },
  { day: 5, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Toma el primer bus a Machu Picchu. Tour guiado completo por la ciudad perdida. Por la tarde, toma el tren de regreso a Ollantaytambo y traslado a tu hotel en Cusco.' }
];
fs.writeFileSync('./src/content/tours/classic-salkantay-5d4n.json', JSON.stringify(dataSalk5D, null, 2));

const dataHQ = JSON.parse(fs.readFileSync('./src/content/tours/huchuy-qosqo-trek-3d2n.json', 'utf8'));
dataHQ.en.itinerary = [
  { day: 1, title: 'Cusco – Tambomachay – Pucamarca', description: 'Start the trek near Cusco at Tambomachay. Hike up through high Andean passes, enjoying views of lakes and mountains. Camp at the traditional village of Pucamarca (3,800m).' },
  { day: 2, title: 'Pucamarca – Huchuy Qosqo – Ollantaytambo', description: 'Hike through a spectacular canyon on an original Inca trail to reach the Huchuy Qosqo ruins. Enjoy a guided tour before descending to the Sacred Valley at Lamay. Drive to Ollantaytambo and take the train to Aguas Calientes.' },
  { day: 3, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Early morning bus up to Machu Picchu. Discover the magic of the citadel with a guided tour. Afternoon return to Cusco by train and bus.' }
];
dataHQ.es.itinerary = [
  { day: 1, title: 'Cusco – Tambomachay – Pucamarca', description: 'Inicia el trek cerca de Cusco en Tambomachay. Camina por pasos altoandinos, disfrutando de vistas de lagunas y montañas. Acampa en el pueblo tradicional de Pucamarca (3,800m).' },
  { day: 2, title: 'Pucamarca – Huchuy Qosqo – Ollantaytambo', description: 'Camina por un cañón espectacular en un camino inca original hasta llegar a las ruinas de Huchuy Qosqo. Disfruta de un tour guiado antes de descender al Valle Sagrado en Lamay. Viaje a Ollantaytambo y tren a Aguas Calientes.' },
  { day: 3, title: 'Aguas Calientes – Machu Picchu – Cusco', description: 'Bus temprano a Machu Picchu. Descubre la magia de la ciudadela con un tour guiado. Regreso a Cusco por la tarde en tren y bus.' }
];
fs.writeFileSync('./src/content/tours/huchuy-qosqo-trek-3d2n.json', JSON.stringify(dataHQ, null, 2));

console.log('Updated Salkantay and Huchuy Qosqo itineraries');
