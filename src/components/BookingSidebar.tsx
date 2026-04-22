import React, { useState } from 'react';
import { Calendar, Users, Baby, ArrowRight } from 'lucide-react';
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
    <aside className="tour-sidebar" id="booking-anchor">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            key="thanks"
            className="booking-card sticky"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ textAlign: 'center' }}
          >
            <h3 className="serif" style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>
              {lang === 'en' ? 'Perfect!' : '¡Perfecto!'}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
              {lang === 'en' 
                ? 'We have received your details. Our team is checking availability and will get back to you within 24 hours.' 
                : 'Hemos recibido tu solicitud. Nuestro equipo está verificando disponibilidad y te responderemos en menos de 24 horas.'}
            </p>
            <button 
              className="btn btn-outline btn-full" 
              onClick={() => setIsSubmitted(false)}
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              {lang === 'en' ? 'Edit Request' : 'Editar Solicitud'}
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            className="booking-card sticky"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="price-tag">
              <span>{t('tour.from')}</span>
              <h3>{tour.price}</h3>
            </div>
            <form className="sidebar-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label><Calendar size={16} /> {lang === 'en' ? 'Select Date' : 'Selecciona Fecha'}</label>
                <input type="date" required />
              </div>
              <div className="travelers-row">
                <div className="form-group">
                  <label><Users size={16} /> {lang === 'en' ? 'Adults' : 'Adultos'}</label>
                  <select defaultValue="2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n}{n === 10 ? '+' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label><Baby size={16} /> {lang === 'en' ? 'Children' : 'Niños'}</label>
                  <select defaultValue="0">
                    {[0, 1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n}{n === 5 ? '+' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                {t('tour.book')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
            <p className="sidebar-note">
              {lang === 'en' ? 'No payment required yet. Booking is safe and secure.' : 'Sin pago requerido aún. Tu reserva es segura.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
