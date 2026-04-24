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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
