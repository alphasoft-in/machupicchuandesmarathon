import React from 'react';
import { Mail, Phone, MapPin, Shield, Award, Users } from 'lucide-react';
import { useTranslations, useTranslatedPath } from '../utils/i18n';
import SocialIcon from './SocialIcon';

interface Props {
  lang: 'en' | 'es';
}

const socialLinks = [
  { icon: 'tripadvisor', label: 'TripAdvisor', url: 'https://www.tripadvisor.com.pe/UserReviewEdit-g294314-d28603761-Machupicchu_Andes_Marathon-Cusco_Cusco_Region.html', scale: 1.2 },
  { icon: 'googlemaps', label: 'Google Maps', url: 'https://share.google/pAUNF0pj4QE86i5Hu', scale: 1.25 },
  { icon: 'instagram', label: 'Instagram', url: 'https://instagram.com/machupicchu_andes' },
  { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/machupicchuandesmarathn' },
  { icon: 'tiktok', label: 'TikTok', url: '#' },
];

export default function Footer({ lang }: Props) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  
  return (
    <footer className="bg-[#051c14] text-[#f8fafc] py-16 lg:py-24 pb-12 mt-0">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 pb-12 lg:pb-16">
        <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <a href={translatePath('/')} className="transition-opacity hover:opacity-80">
            <img src="/images/logo.webp" alt="Logo" className="h-[60px] w-auto" />
          </a>
          <p className="text-white/55 leading-loose text-[0.88rem] max-w-[260px]">
            {t('footer.tagline')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-[36px] h-[36px] bg-white/5 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-1 group"
              >
                <SocialIcon icon={link.icon} size={18 * (link.scale || 1)} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h3 className="serif text-lg text-white">{t('footer.expeditions')}</h3>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li><a href={translatePath('/inca-trail')} className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('nav.inca')}</a></li>
              <li><a href={translatePath('/alternative-treks')} className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('nav.alternative')}</a></li>
              <li><a href={translatePath('/other-treks')} className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('nav.other')}</a></li>
              <li><a href={translatePath('/tour-days')} className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('nav.daily')}</a></li>
              <li><a href={translatePath('/luxury')} className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('nav.luxury')}</a></li>
              <li><a href={translatePath('/ayni-project')} className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('nav.ayni')}</a></li>
              <li><a href="#" className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{lang === 'en' ? 'Luxury Custom Trips' : 'Viajes Personalizados'}</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="serif text-lg text-white">{t('footer.resources')}</h3>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li><a href="#" className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('footer.safety')}</a></li>
              <li><a href="#" className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('footer.packing')}</a></li>
              <li><a href="#" className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('footer.altitude')}</a></li>
              <li><a href="#" className="text-white/60 text-[0.82rem] no-underline transition-all duration-300 hover:text-secondary hover:translate-x-1 inline-block">{t('footer.faq')}</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="serif text-lg text-white">{t('footer.contact')}</h3>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                <li>
                  <a href="mailto:info@machupicchuandesmarathon.com" className="flex items-center justify-center md:justify-start gap-3 text-white/60 text-[0.85rem] no-underline transition-all duration-300 hover:text-secondary group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-secondary/20 shrink-0">
                      <Mail size={16} className="group-hover:text-secondary" />
                    </div>
                    info@machupicchuandesmarathon.com
                  </a>
                </li>
                <li>
                  <a href="tel:+51993187203" className="flex items-center justify-center md:justify-start gap-3 text-white/60 text-[0.85rem] no-underline transition-all duration-300 hover:text-secondary group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-secondary/20 shrink-0">
                      <Phone size={16} className="group-hover:text-secondary" />
                    </div>
                    +51 993 187 203
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3 text-white/60 text-[0.85rem] leading-snug group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span className="mt-1">Jr. Santa Rosa P7, Cusco – Perú</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 py-8 border-y border-white/5 mb-0 px-6 md:px-0">
        <div className="flex items-center gap-3 text-white/60 text-[0.65rem] font-bold uppercase tracking-widest text-center">
          <Shield size={16} className="text-secondary" />
          <span>{t('trust.secure')}</span>
        </div>
        <div className="flex items-center gap-3 text-white/60 text-[0.65rem] font-bold uppercase tracking-widest text-center">
          <Award size={16} className="text-secondary" />
          <span>{t('trust.certified')}</span>
        </div>
        <div className="flex items-center gap-3 text-white/60 text-[0.65rem] font-bold uppercase tracking-widest text-center">
          <Users size={16} className="text-secondary" />
          <span>{t('trust.small')}</span>
        </div>
      </div>

      <div className="container pt-6 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[0.68rem] text-white/30 text-center md:text-left">
          <p className="m-0 font-normal">
            &copy; {new Date().getFullYear()} Machu Picchu Andes Marathon. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
          <div className="flex gap-8 justify-center font-normal">
            <a href="#" className="no-underline transition-colors hover:text-white">{lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}</a>
            <a href="#" className="no-underline transition-colors hover:text-white">{lang === 'en' ? 'Terms of Service' : 'Términos de Servicio'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
