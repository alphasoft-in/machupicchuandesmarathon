import React from 'react';
import { useTranslations, useTranslatedPath } from '../utils/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Props {
  lang: 'en' | 'es';
}

export default function PremiumCTA({ lang }: Props) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const WHATSAPP_NUMBER = "51993187203";
  const defaultMessage = lang === 'es' 
    ? "Hola, me gustaría planear mi próximo viaje con Peru Andes Trekking."
    : "Hello, I would like to plan my next trip with Peru Andes Trekking.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0e3b2e]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-bg.webp" 
          alt="Machu Picchu" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e3b2e] via-[#0e3b2e]/70 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#fc6111] font-bold tracking-[0.25em] text-sm mb-6 uppercase">
            {lang === 'es' ? 'Experiencias de Élite' : 'Elite Experiences'}
          </span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] font-serif">
            {lang === 'es' ? '¿Listo para tu próxima' : 'Ready for Your Next'} 
            <span className="text-[#fc6111] block mt-2">{lang === 'es' ? 'Aventura?' : 'Adventure?'}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
            {lang === 'es' 
              ? 'Únete a nosotros en un viaje inolvidable por el corazón del Imperio Inca. Diseñamos expediciones que transforman el alma y desafían tus límites.' 
              : 'Join us for an unforgettable journey through the heart of the Inca Empire. We craft expeditions that transform the soul and challenge your limits.'}
          </p>

          <div className="flex flex-wrap gap-5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#fc6111] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#fc6111]/90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-orange-500/20"
            >
              {lang === 'es' ? 'Planea tu Viaje' : 'Plan Your Trip'}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            
            <a 
              href={translatePath('/inca-trail')}
              className="flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              {lang === 'es' ? 'Ver Expediciones' : 'View Expeditions'}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Micro-animations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
