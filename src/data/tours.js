export const allTours = [
  // INCA TRAIL TOURS
  {
    slug: "classic-inca-trail",
    category: "inca-trail",
    title: "Classic Inca Trail",
    price: "$850",
    image: "/images/marathon.png",
    duration: "4 Days",
    rating: 4.9,
    tag: "Historic",
    description: "The most iconic trek in the world. Walk through original Incan paved paths and explore mystical cloud forests.",
    itinerary: [
      { day: 1, title: "Cusco - Piscacucho - Wayllabamba", description: "Beginning of the trek at KM 82. Gentle hike along the Urubamba river, visiting the Patallacta ruins." },
      { day: 2, title: "Wayllabamba - Dead Woman's Pass - Pacaymayu", description: "The most challenging day. Ascend to Warmiwañusca at 4,215m for breathtaking views." },
      { day: 3, title: "Pacaymayu - Phuyupatamarca - Wiñay Wayna", description: "Exploration of archaeological sites including Runkurakay and Sayacmarca." },
      { day: 4, title: "Wiñay Wayna - Sun Gate - Machu Picchu", description: "Early morning arrival at Inti Punku to witness the sunrise over the Incan citadel." }
    ]
  },
  {
    slug: "short-inca-trail",
    category: "inca-trail",
    title: "Short Inca Trail",
    price: "$650",
    image: "/images/hero.png",
    duration: "2 Days",
    rating: 4.8,
    tag: "Express",
    description: "Perfect for those with limited time but who still want to experience the magic of the Sun Gate.",
    itinerary: [
      { day: 1, title: "Cusco - Chachabamba - Wiñay Wayna - Aguas Calientes", description: "Train to KM 104, visit the impressive Wiñay Wayna ruins and hike to the Sun Gate." },
      { day: 2, title: "Machu Picchu Exploration", description: "Guided tour of the citadel and optional hike to Huayna Picchu before returning to Cusco." }
    ]
  },
  // ALTERNATIVE TREKS
  {
    slug: "salkantay-trek",
    category: "alternative-treks",
    title: "Salkantay Trek",
    price: "$450",
    image: "/images/marathon.png",
    duration: "5 Days",
    rating: 4.9,
    tag: "Adventure",
    description: "Voted one of the 25 best treks in the world. Experience diverse landscapes from glacial peaks to tropical jungle.",
    itinerary: [
      { day: 1, title: "Cusco - Mollepata - Soraypampa", description: "Hike towards the majestic Salkantay peak. Camp near the turquoise Humantay Lake." },
      { day: 2, title: "Soraypampa - Salkantay Pass - Chaullay", description: "The highest point of the trek at 4,630m. Descent into the cloud forest." },
      { day: 3, title: "Chaullay - La Playa - Lucmabamba", description: "Easy hike through coffee plantations and fruit orchards." },
      { day: 4, title: "Lucmabamba - Llactapata - Aguas Calientes", description: "Unique view of Machu Picchu from a distance. Descent to the railway village." },
      { day: 5, title: "Machu Picchu - Cusco", description: "Final exploration of the Incan masterpiece." }
    ]
  },
  // TOUR DAYS
  {
    slug: "classic-sacred-valley",
    category: "tour-days",
    title: "Classic Sacred Valley",
    price: "$850",
    image: "/images/hero.png",
    duration: "4 Days",
    rating: 4.9,
    tag: "Cultural",
    description: "Visit Pisac, Ollantaytambo and Chinchero. The perfect introduction to Andean history and vibrant markets.",
    itinerary: [
      { day: 1, title: "Sacred Valley Main Circuits", description: "Full exploration of the valley's major archaeological sites." }
    ]
  },
  {
    slug: "choquequirao-trek",
    category: "alternative-treks",
    title: "Choquequirao Expedition",
    price: "$950",
    image: "/images/marathon.png",
    duration: "5 Days",
    rating: 5.0,
    tag: "Epic",
    description: "Reach the last refuge of the Incas. A true explorer's journey through remote mountain ridges.",
    itinerary: [
      { day: 1, title: "Cusco - Cachora - Chiquisca", description: "Descent into the deep Apurimac canyon." },
      { day: 2, title: "Chiquisca - Choquequirao", description: "The legendary ascent to the citadel." }
    ]
  }
];
