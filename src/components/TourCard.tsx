import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  lang: 'en' | 'es';
  tour: any;
  t: (key: string) => string;
  translatePath: (path: string) => string;
  index: number;
}

export function TourCard({ lang, tour, t, translatePath, index }: Props) {
  const tourUrl = translatePath(`/tours/${tour.slug}`);
  const whatsappUrl = `https://wa.me/51993187203?text=${encodeURIComponent(lang === 'en' ? `Hello, I'd like to consult about the tour: ${tour[lang].title}` : `Hola, me gustaría consultar sobre el tour: ${tour[lang].title}`)}`;

  return (
    <motion.div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col h-full relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href={tourUrl} className="absolute top-0 left-0 w-full h-full z-10" aria-label={tour[lang].title}></a>
      <div className="relative h-[250px] overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour[lang].title} 
          loading="lazy" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-primary">
          {tour[lang].tag}
        </span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex gap-4 text-[0.85rem] text-slate-500 mb-4 relative z-0">
          <span className="flex items-center gap-1.5"><Clock size={16} /> {tour[lang].duration}</span>
          <span>
            {lang === 'en' ? 'From' : 'Desde'} <strong className="text-primary font-bold">{tour.price}</strong>
          </span>
        </div>
        <h3 className="serif text-2xl mb-4 relative z-0">{tour[lang].title}</h3>
        <p className="text-[0.9rem] text-slate-500 leading-relaxed mb-6 line-clamp-3 relative z-0">
          {tour[lang].description}
        </p>
        
        <div className="relative z-20 mt-auto mb-2">
          <a href={tourUrl} className="flex items-center justify-center w-full py-3 px-6 rounded-full border-[1.5px] border-primary text-primary text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(14,59,46,0.2)]">
            {lang === 'en' ? 'View Itinerary' : 'Ver itinerario'}
          </a>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 relative z-20">
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-[0.85rem] font-semibold uppercase tracking-[0.5px] text-primary transition-colors duration-300 hover:!text-[#25D366]"
          >
             {lang === 'en' ? 'Consult now' : 'Consultar ahora'}
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={lang === 'en' ? `Consult about ${tour[lang].title} on WhatsApp` : `Consultar sobre ${tour[lang].title} por WhatsApp`}
            className="w-[40px] h-[40px] bg-slate-50 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#25D366]"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-[#25D366] group-hover:text-white transition-colors duration-300">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
             </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
