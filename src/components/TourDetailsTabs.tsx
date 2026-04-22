import React, { useState } from 'react';
import { CheckCircle, X, Info, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LightboxGallery from './LightboxGallery';
import { useTranslations } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
  content: any;
  tour: any;
}

export default function TourDetailsTabs({ lang, content, tour }: Props) {
  const t = useTranslations(lang);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: lang === 'en' ? 'Overview' : 'Resumen' },
    { id: 'itinerary', label: lang === 'en' ? 'Itinerary' : 'Itinerario' },
    { id: 'includes', label: lang === 'en' ? 'Includes' : 'Incluye' },
    { id: 'info', label: lang === 'en' ? 'Extra Info' : 'Info Extra' },
  ];

  if (tour.gallery && tour.gallery.length > 0) {
    tabs.push({ id: 'gallery', label: lang === 'en' ? 'Gallery' : 'Galería' });
  }

  return (
    <div className="tour-details-container">
      <nav className="tour-tabs" aria-label="Tour Information">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="tab-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="tab-panel active"
          >
            {activeTab === 'overview' && (
              <section className="tour-section first-section">
                <h2 className="serif">{content.expect?.title || t('tour.overview')}</h2>
                {content.expect ? (
                  <div className="expect-content">
                    {content.expect.paragraphs.map((p: string, i: number) => (
                      <p key={i} className="description-text">{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="description-text">{content.description}</p>
                )}
                
                {content.highlightsList && (
                  <div className="highlights-container">
                    <h3 className="section-subtitle">{lang === 'en' ? 'Tour Highlights' : 'Puntos Destacados'}</h3>
                    <div className="highlights-grid">
                      {content.highlightsList.map((item: string, i: number) => (
                        <div key={i} className="highlight-item">
                          <CheckCircle size={20} color="var(--secondary)" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {activeTab === 'itinerary' && (
              <section className="tour-section first-section">
                <h2 className="serif">{t('tour.itinerary')}</h2>
                <div className="itinerary-timeline">
                  {content.itinerary?.map((item: any, index: number) => (
                    <div key={index} className="timeline-day">
                      <div className="day-number">{lang === 'en' ? 'Day' : 'Día'} {item.day}</div>
                      <div className="day-content">
                        <h3>{item.title}</h3>
                        <ul className="day-activities">
                          {item.description.split('\n').map((line: string, i: number) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'includes' && (
              <section className="tour-section first-section">
                <h2 className="serif">{lang === 'en' ? 'Included & Excluded' : 'Incluido y Excluido'}</h2>
                <div className="inc-exc-grid">
                  <div className="includes-box">
                    <h3 className="serif"><CheckCircle size={20} /> {t('tour.includes')}</h3>
                    <ul>
                      {content.includes?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="excludes-box">
                    <h3 className="serif"><X size={20} /> {t('tour.excludes')}</h3>
                    <ul>
                      {content.excludes?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'info' && (
              <div className="first-section">
                {content.circuits && (
                  <section className="tour-section">
                    <h2 className="serif">{content.circuits.title}</h2>
                    <div className="circuits-card">
                      <div className="circuits-header">
                        <Info size={24} color="var(--primary)" />
                        <p>{content.circuits.description}</p>
                      </div>
                      <div className="circuits-note">
                        <p>{content.circuits.note}</p>
                      </div>
                    </div>
                  </section>
                )}

                {content.addons && (
                  <section className="tour-section">
                    <h2 className="serif">{lang === 'en' ? 'Optional Add-ons' : 'Adicionales Opcionales'}</h2>
                    <div className="addons-grid">
                      {content.addons.map((addon: string, i: number) => (
                        <div key={i} className="addon-item">
                          <Plus size={18} color="var(--secondary)" />
                          <span>{addon}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            {activeTab === 'gallery' && (
              <section className="tour-section first-section">
                <h2 className="serif">{lang === 'en' ? 'Experience in Photos' : 'Experiencia en Fotos'}</h2>
                <LightboxGallery images={tour.gallery} />
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
