import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  lang: 'en' | 'es';
  tour: any;
  t: (key: string) => string;
  translatePath: (path: string) => string;
  index: number;
}

export function TourCard({ lang, tour, t, translatePath, index }: Props) {
  return (
    <motion.div 
      className="tour-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="tour-image-w">
        <img src={tour.image} alt={tour[lang].title} loading="lazy" />
        <span className="tour-tag">{tour[lang].tag}</span>
      </div>
      <div className="tour-body">
        <div className="tour-meta">
          <span><Clock size={16} /> {tour[lang].duration}</span>
          <span><Star key={`star-${tour.slug}`} size={16} fill="var(--secondary)" color="var(--secondary)" /> {tour.rating}</span>
        </div>
        <h3 className="serif">{tour[lang].title}</h3>
        <p className="tour-desc">{tour[lang].description}</p>
        <div className="tour-footer">
          <span className="tour-price">{t('tour.from')} {tour.price}</span>
          <a href={translatePath(`/tours/${tour.slug}`)} className="btn-icon">
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
