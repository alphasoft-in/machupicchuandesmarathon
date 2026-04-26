import React, { useState } from 'react';
import { Calendar, Users, Baby, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
  tour: any;
}

export default function BookingSidebar({ lang, tour }: Props) {
  const t = useTranslations(lang);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="booking-anchor" className="w-full">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            key="thanks"
            className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="serif text-2xl text-[#0e3b2e] mb-4">
              {lang === 'en' ? 'Perfect!' : '¡Perfecto!'}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              {lang === 'en' 
                ? 'We have received your details. Our team is checking availability and will get back to you within 24 hours.' 
                : 'Hemos recibido tu solicitud. Nuestro equipo está verificando disponibilidad y te responderemos en menos de 24 horas.'}
            </p>
            <button 
              className="w-full py-4 rounded-2xl border-2 border-[#0e3b2e] text-[#0e3b2e] font-bold text-sm transition-all hover:bg-[#0e3b2e] hover:text-white" 
              onClick={() => setIsSubmitted(false)}
            >
              {lang === 'en' ? 'Edit Request' : 'Editar Solicitud'}
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="mb-6 pb-6 border-b border-slate-50">
              <span className="block text-[0.6rem] uppercase tracking-[2.5px] text-slate-400 font-bold mb-1">{t('tour.from')}</span>
              <h3 className="text-3xl font-black text-[#0e3b2e] tracking-tight leading-none">{tour.price}</h3>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="sidebar-date" className="flex items-center gap-2 text-[0.6rem] font-black uppercase tracking-wider text-slate-500">
                  <Calendar size={12} className="text-secondary" />
                  {lang === 'en' ? 'Select Date' : 'Selecciona Fecha'}
                </label>
                <input 
                  id="sidebar-date"
                  type="date" 
                  required 
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="sidebar-adults" className="flex items-center gap-2 text-[0.6rem] font-black uppercase tracking-wider text-slate-500">
                    <Users size={12} className="text-secondary" />
                    {lang === 'en' ? 'Adults' : 'Adultos'}
                  </label>
                  <select 
                    id="sidebar-adults"
                    defaultValue="2"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-[13px] focus:outline-none focus:border-secondary transition-all shadow-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n}{n === 10 ? '+' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="sidebar-kids" className="flex items-center gap-2 text-[0.6rem] font-black uppercase tracking-wider text-slate-500">
                    <Baby size={12} className="text-secondary" />
                    {lang === 'en' ? 'Kids' : 'Niños'}
                  </label>
                  <select 
                    id="sidebar-kids"
                    defaultValue="0"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-[13px] focus:outline-none focus:border-secondary transition-all shadow-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat"
                  >
                    {[0, 1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n}{n === 5 ? '+' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#fc6111] hover:bg-[#e8560f] text-white py-4 rounded-xl font-black text-[13px] uppercase tracking-widest transition-all shadow-lg shadow-orange-200 border-b-4 border-orange-800/20 active:border-b-0 active:translate-y-[2px] flex items-center justify-center gap-3">
                {t('tour.book')} <ArrowRight size={16} />
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-slate-50 text-center">
              <p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <ShieldCheck size={11} className="text-emerald-500" />
                {lang === 'en' ? 'No payment required yet' : 'Sin pago requerido aún'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
