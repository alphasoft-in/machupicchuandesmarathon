import React from 'react';
import { TourCard } from './TourCard';
import { useTranslations, useTranslatedPath } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
  tours: any[];
}

export default function TourGrid({ lang, tours }: Props) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  
  return (
    <div className="tour-grid">
      {tours.map((tour, index) => (
        <TourCard 
          key={tour.slug} 
          lang={lang} 
          tour={tour} 
          t={t} 
          translatePath={translatePath} 
          index={index} 
        />
      ))}
    </div>
  );
}
