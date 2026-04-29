export const languages = {
  en: 'English',
  es: 'Español'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    "nav.inca": "Inca Trail",
    "nav.alternative": "Alternative Treks",
    "nav.daily": "Daily Tours",
    "nav.other": "Other Treks",
    "nav.luxury": "Luxury",
    "nav.ayni": "AYNI Project",
    "nav.contact": "Contact Us",
    "nav.about": "About Us",
    "hero.title": "Spirit of the Andes, Heart of a Marathoner.",
    "hero.subtitle": "Your expert local guide for trekking and unique expeditions in Cusco and Machu Picchu.",
    "hero.cta": "Explore Expeditions",
    "home.featured.title": "Featured Experiences",
    "home.featured.subtitle": "A handpicked selection of our most extraordinary journeys through the heart of the Andes.",
    "section.inca.title": "The Historic Path",
    "section.inca.subtitle": "Classic Inca Trail Experiences",
    "section.alt.title": "Off the Beaten Path",
    "section.alt.subtitle": "Alternative Treks to Machu Picchu",
    "section.daily.title": "One Day Wonders",
    "section.daily.subtitle": "Short Tours and Daily Excursions",
    "booking.title": "Book Your Expedition",
    "booking.subtitle": "Start your journey today with the experts.",
    "form.name": "Full Name",
    "form.email": "Email Address",
    "form.select": "Select Interest",
    "form.interest.inca": "Inca Trail Tours",
    "form.interest.alt": "Alternative Treks",
    "form.interest.daily": "Tour Days",
    "form.interest.custom": "Custom Luxury Tour",
    "form.submit": "Send Inquiry",
    "tour.overview": "Tour Overview",
    "tour.itinerary": "Daily Itinerary",
    "tour.includes": "What's Included",
    "tour.excludes": "Not Included",
    "tour.book": "Book Now",
    "tour.from": "From",
    "footer.tagline": "Premier Travel Agency in Cusco with expert local guides. Specialized in Trekking Peru and authentic Machu Picchu expeditions.",
    "footer.expeditions": "Expeditions",
    "footer.resources": "Resources",
    "footer.contact": "Contact Us",
    "footer.safety": "Travel Safety",
    "footer.packing": "Packing List",
    "footer.altitude": "Altitude Prep",
    "footer.faq": "Common FAQ",
    "trust.secure": "Secure Payments",
    "trust.certified": "Certified Local Agency",
    "trust.small": "Small Groups Only"
  },
  es: {
    "nav.inca": "Camino Inca",
    "nav.alternative": "Treks Alternativos",
    "nav.daily": "Tours de un Día",
    "nav.other": "Otros Treks",
    "nav.luxury": "Luxury",
    "nav.ayni": "Proyecto AYNI",
    "nav.contact": "Contáctanos",
    "nav.about": "Sobre Nosotros",
    "hero.title": "Espíritu de los Andes, Corazón de Maratonista.",
    "hero.subtitle": "Tu guía local experto para trekking y expediciones únicas en Cusco y Machu Picchu.",
    "hero.cta": "Explorar Expediciones",
    "home.featured.title": "Experiencias Destacadas",
    "home.featured.subtitle": "Una selección curada de nuestros viajes más extraordinarios a través del corazón de los Andes.",
    "section.inca.title": "El Sendero Histórico",
    "section.inca.subtitle": "Experiencias Clásicas del Camino Inca",
    "section.alt.title": "Rutas Inexploradas",
    "section.alt.subtitle": "Treks Alternativos a Machu Picchu",
    "section.daily.title": "Maravillas de un Día",
    "section.daily.subtitle": "Tours Cortos y Excursiones Diarias",
    "booking.title": "Reserva tu Expedición",
    "booking.subtitle": "Comienza tu viaje hoy mismo con los expertos.",
    "form.name": "Nombre Completo",
    "form.email": "Correo Electrónico",
    "form.select": "Selecciona tu Interés",
    "form.interest.inca": "Tours de Camino Inca",
    "form.interest.alt": "Treks Alternativos",
    "form.interest.daily": "Tours de un Día",
    "form.interest.custom": "Tour de Lujo a Medida",
    "form.submit": "Enviar Consulta",
    "tour.overview": "Resumen del Tour",
    "tour.itinerary": "Itinerario Diario",
    "tour.includes": "Qué Incluye",
    "tour.excludes": "No Incluye",
    "tour.book": "Reservar Ahora",
    "tour.from": "Desde",
    "footer.tagline": "Tu Agencia de viajes en Cusco con guía local experto. Especialistas en Trekking y expediciones auténticas a Machu Picchu.",
    "footer.expeditions": "Expediciones",
    "footer.resources": "Recursos",
    "footer.contact": "Contáctanos",
    "footer.safety": "Seguridad de Viaje",
    "footer.packing": "Lista de Equipo",
    "footer.altitude": "Preparación Altitud",
    "footer.faq": "Preguntas Frecuentes",
    "trust.secure": "Pagos Seguros",
    "trust.certified": "Agencia Local Certificada",
    "trust.small": "Solo Grupos Pequeños"
  }
};

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return `/${l}${path.startsWith('/') ? path : '/' + path}`;
  }
}
