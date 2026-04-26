import React from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import BookingForm from './BookingForm';
import { useTranslations } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
}

export default function BookingCTA({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <section id="contact" className="w-full relative overflow-hidden py-24 bg-cover bg-center bg-[linear-gradient(rgba(14,59,46,0.85),rgba(14,59,46,0.95)),url('/images/home/book-your-expedition.png')]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
          <div className="text-center lg:text-left">
            <div className="text-[0.7rem] font-bold uppercase tracking-[2px] text-secondary mb-5 text-center lg:text-left">
              {lang === 'en' ? 'Expert-guided expeditions since 2010' : 'Expediciones con guías expertos desde 2010'}
            </div>

            <h2 className="serif text-4xl lg:text-[2.4rem] leading-[1.1] mb-3 text-white">{t('booking.title')}</h2>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-[500px] mx-auto lg:mx-0">{t('booking.subtitle')}</p>

            <div className="flex flex-col gap-3 mb-10">
              <a href="mailto:info@machupicchuandesmarathon.com" className="flex items-center gap-4 p-4 sm:p-[0.85rem_1rem] rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 max-w-[400px] mx-auto lg:mx-0 no-underline w-full">
                <div className="w-[38px] h-[38px] bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0"><Mail size={18} /></div>
                <div className="text-left min-w-0">
                  <strong className="block text-[0.65rem] font-bold uppercase tracking-[1.5px] text-secondary mb-0.5">{lang === 'en' ? 'Email Us' : 'Escríbenos'}</strong>
                  <p className="m-0 text-[0.75rem] sm:text-[0.88rem] text-white/90 leading-[1.3] break-all sm:break-normal">info@machupicchuandesmarathon.com</p>
                </div>
              </a>
              <a href="https://wa.me/51993187203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 sm:p-[0.85rem_1rem] rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 max-w-[400px] mx-auto lg:mx-0 no-underline w-full">
                <div className="w-[38px] h-[38px] bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0"><Phone size={18} /></div>
                <div className="text-left min-w-0">
                  <strong className="block text-[0.65rem] font-bold uppercase tracking-[1.5px] text-secondary mb-0.5">{lang === 'en' ? 'Call / WhatsApp' : 'Llámanos / WhatsApp'}</strong>
                  <p className="m-0 text-[0.88rem] text-white/90 leading-[1.3]">+51 993 187 203</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 sm:p-[0.85rem_1rem] rounded-2xl bg-white/5 border border-white/10 max-w-[400px] mx-auto lg:mx-0 w-full">
                <div className="w-[38px] h-[38px] bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0"><MapPin size={18} /></div>
                <div className="text-left min-w-0">
                  <strong className="block text-[0.65rem] font-bold uppercase tracking-[1.5px] text-secondary mb-0.5">{lang === 'en' ? 'Visit Our HQ' : 'Visítanos'}</strong>
                  <p className="m-0 text-[0.88rem] text-white/90 leading-[1.3]">Jr. Santa Rosa P7, Cusco – Perú</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-8 pt-6 border-t border-white/10 max-w-[500px] mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 text-[0.65rem] sm:text-[0.7rem] font-semibold text-white/80 bg-white/5 p-1.5 sm:p-2 px-3 sm:px-4 rounded-full border border-white/10">
                <CheckCircle size={14} className="text-green-400 shrink-0" />
                <span>{lang === 'en' ? 'Licensed Operator' : 'Operador Licenciado'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[0.65rem] sm:text-[0.7rem] font-semibold text-white/80 bg-white/5 p-1.5 sm:p-2 px-3 sm:px-4 rounded-full border border-white/10">
                <CheckCircle size={14} className="text-green-400 shrink-0" />
                <span>{lang === 'en' ? '100% Local Guides' : 'Guías 100% Locales'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[0.65rem] sm:text-[0.7rem] font-semibold text-white/80 bg-white/5 p-1.5 sm:p-2 px-3 sm:px-4 rounded-full border border-white/10">
                <CheckCircle size={14} className="text-green-400 shrink-0" />
                <span>{lang === 'en' ? 'Free Cancellation' : 'Cancelación Gratuita'}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-14 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] max-w-[520px] w-full mx-auto flex flex-col justify-center">
            <BookingForm lang={lang} tours={[]} />
          </div>
        </div>
      </div>
    </section>
  );
}
