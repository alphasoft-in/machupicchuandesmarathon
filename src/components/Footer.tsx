import React from 'react';
import { Mail, Phone, MapPin, Shield, Award, Users, Instagram, Facebook } from 'lucide-react';
import { useTranslations, useTranslatedPath } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
}

export default function Footer({ lang }: Props) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href={translatePath('/')} className="footer-logo-link">
            <img src="/images/logo.webp" alt="Logo" className="footer-logo" />
          </a>
          <p className="footer-tagline">
            {t('footer.tagline')}
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com/machupicchu_andes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/machupicchuandesmarathon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h3>{t('footer.expeditions')}</h3>
            <ul>
              <li><a href={translatePath('/inca-trail')}>{t('nav.inca')}</a></li>
              <li><a href={translatePath('/alternative-treks')}>{t('nav.alternative')}</a></li>
              <li><a href={translatePath('/other-treks')}>{t('nav.other')}</a></li>
              <li><a href={translatePath('/tour-days')}>{t('nav.daily')}</a></li>
              <li><a href={translatePath('/luxury')}>{t('nav.luxury')}</a></li>
              <li><a href={translatePath('/ayni-project')}>{t('nav.ayni')}</a></li>
              <li><a href="#">{lang === 'en' ? 'Luxury Custom Trips' : 'Viajes Personalizados'}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t('footer.resources')}</h3>
            <ul>
              <li><a href="#">{t('footer.safety')}</a></li>
              <li><a href="#">{t('footer.packing')}</a></li>
              <li><a href="#">{t('footer.altitude')}</a></li>
              <li><a href="#">{t('footer.faq')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t('footer.contact')}</h3>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:info@machupicchuandesmarathon.com">
                  <Mail size={18} /> info@machupicchuandesmarathon.com
                </a>
              </li>
              <li>
                <a href="tel:+51993187203">
                  <Phone size={18} /> +51 993 187 203
                </a>
              </li>
              <li className="footer-address">
                <MapPin size={18} /> 
                <span>Jr. Santa Rosa P7, Cusco – Perú</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-trust container">
        <div className="trust-item">
          <Shield size={16} />
          <span>{t('trust.secure')}</span>
        </div>
        <div className="trust-item">
          <Award size={16} />
          <span>{t('trust.certified')}</span>
        </div>
        <div className="trust-item">
          <Users size={16} />
          <span>{t('trust.small')}</span>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="footer-legal">
          <p>
            &copy; {new Date().getFullYear()} Machu Picchu Andes Marathon. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
          <div className="legal-links">
            <a href="#">{lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}</a>
            <a href="#">{lang === 'en' ? 'Terms of Service' : 'Términos de Servicio'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
