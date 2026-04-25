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

  return (
    <div className="w-full">
      <nav className="flex gap-2 p-1 bg-slate-50/50 rounded-2xl border border-slate-100 mb-10 overflow-x-auto no-scrollbar scroll-smooth w-fit max-w-full" aria-label="Tour Information">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-xl text-[0.65rem] sm:text-[0.75rem] font-black uppercase tracking-[1.5px] transition-all duration-300 whitespace-nowrap border ${
              activeTab === tab.id 
                ? 'bg-white text-[#0e3b2e] border-slate-200 shadow-sm' 
                : 'text-slate-400 border-transparent hover:text-slate-600 hover:bg-white/50'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            {activeTab === 'overview' && (
              <section className="animate-in fade-in duration-500">
                <h2 className="serif text-2xl sm:text-3xl mb-6 text-[#0e3b2e] leading-tight break-words">{content.expect?.title || t('tour.overview')}</h2>
                <div className="space-y-4">
                  {(content.expect?.paragraphs || [content.description]).map((p: string, i: number) => (
                    <p key={i} className="text-[0.95rem] sm:text-base leading-relaxed text-slate-600 font-light break-words">{p}</p>
                  ))}
                </div>
                
                {content.highlightsList && (
                  <div className="mt-10 pt-10 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#0e3b2e] mb-6 tracking-tight uppercase text-[0.75rem]">{lang === 'en' ? 'Tour Highlights' : 'Puntos Destacados'}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {content.highlightsList.map((item: string, i: number) => (
                        <div key={i} className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-50 shadow-sm transition-transform hover:scale-[1.01]">
                          <CheckCircle size={18} className="text-[#fc6111] shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-[0.95rem] text-slate-600 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {activeTab === 'itinerary' && (
              <section className="animate-in fade-in duration-500">
                <h2 className="serif text-2xl sm:text-3xl mb-8 text-[#0e3b2e]">{t('tour.itinerary')}</h2>
                <div className="relative pl-8 sm:pl-10 space-y-12 before:content-[''] before:absolute before:left-[11px] sm:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-secondary before:to-secondary/10">
                  {content.itinerary?.map((item: any, index: number) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[31px] sm:-left-[37px] top-0 w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#0e3b2e] text-white flex items-center justify-center text-[0.65rem] sm:text-xs font-bold border-4 border-white shadow-md">
                        {item.day}
                      </div>
                      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <h3 className="text-base sm:text-lg font-bold text-[#0e3b2e] mb-4">{item.title}</h3>
                        <ul className="space-y-3">
                          {item.description.split('\n').map((line: string, i: number) => (
                            <li key={i} className="flex gap-3 text-sm sm:text-[0.95rem] text-slate-600 leading-relaxed items-start">
                              <span className="text-secondary mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'includes' && (
              <section className="animate-in fade-in duration-500 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-emerald-50/30 p-6 sm:p-8 rounded-[32px] border border-emerald-100/50">
                  <h3 className="serif text-xl mb-6 flex items-center gap-3 text-emerald-900">
                    <CheckCircle size={22} className="text-emerald-600" /> {t('tour.includes')}
                  </h3>
                  <ul className="space-y-4">
                    {content.includes?.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-[0.9rem] text-emerald-800/80 leading-relaxed items-start">
                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 sm:p-8 rounded-[32px] border border-slate-100">
                  <h3 className="serif text-xl mb-6 flex items-center gap-3 text-slate-900">
                    <X size={22} className="text-slate-400" /> {t('tour.excludes')}
                  </h3>
                  <ul className="space-y-4">
                    {content.excludes?.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-[0.9rem] text-slate-500 leading-relaxed items-start">
                        <X size={14} className="text-slate-300 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {activeTab === 'info' && (
              <div className="animate-in fade-in duration-500 space-y-8">
                {content.circuits && (
                  <section className="bg-blue-50/30 p-6 sm:p-8 rounded-[32px] border border-blue-100/50">
                    <div className="flex gap-4 mb-4 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Info size={22} />
                      </div>
                      <h2 className="serif text-xl sm:text-2xl text-blue-900">{content.circuits.title}</h2>
                    </div>
                    <div className="space-y-4 pl-14">
                      <p className="text-[0.95rem] text-blue-800/80 leading-relaxed">{content.circuits.description}</p>
                      <p className="text-[0.85rem] italic text-blue-700/60">{content.circuits.note}</p>
                    </div>
                  </section>
                )}

                {content.addons && (
                  <section>
                    <h2 className="serif text-2xl mb-6 text-[#0e3b2e]">{lang === 'en' ? 'Optional Add-ons' : 'Adicionales Opcionales'}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {content.addons.map((addon: string, i: number) => (
                        <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-slate-50 shadow-sm">
                          <Plus size={18} className="text-secondary" />
                          <span className="text-[0.9rem] text-slate-600">{addon}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
