import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone as WhatsApp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useTranslations, useTranslatedPath } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
  switchPath: string;
  currentPath: string;
}

export default function Header({ lang, switchPath, currentPath }: Props) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'Home' : 'Inicio', path: '/' },
    { name: t('nav.inca'), path: '/inca-trail' },
    { name: t('nav.alternative'), path: '/alternative-treks' },
    { name: t('nav.other'), path: '/other-treks' },
    { name: t('nav.luxury'), path: '/luxury' },
    { name: t('nav.ayni'), path: '/ayni-project' },
    { name: t('nav.daily'), path: '/tour-days' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="header-left">
          <a href={translatePath('/')} className="logo">
            <img 
              src="/images/logo.webp" 
              alt="Machu Picchu Andes Marathon" 
              className="logo-img" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => {
            const isHome = link.path === '/';
            const translated = translatePath(link.path);
            // Handle home path matching specifically if needed
            const isActive = isHome 
              ? (currentPath === `/${lang}` || currentPath === `/${lang}/` || currentPath === '/')
              : (currentPath === translated || currentPath === `${translated}/`);

            return (
              <li key={link.path}>
                <a 
                  href={translated} 
                  className={isActive ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="header-right">
          <div className="nav-socials desktop-only">
            <a href="#" target="_blank" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" target="_blank" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" target="_blank" aria-label="WhatsApp"><WhatsApp size={18} /></a>
          </div>

          <div className="lang-switcher">
            <a href={switchPath} className={lang === 'en' ? 'active' : ''}>EN</a>
            <span className="divider">|</span>
            <a href={switchPath} className={lang === 'es' ? 'active' : ''}>ES</a>
          </div>

          <button 
            className="mobile-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="nav-links active"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ display: 'flex' }}
          >
            {navLinks.map((link) => {
              const isHome = link.path === '/';
              const translated = translatePath(link.path);
              const isActive = isHome 
                ? (currentPath === `/${lang}` || currentPath === `/${lang}/` || currentPath === '/')
                : (currentPath === translated || currentPath === `${translated}/`);

              return (
                <li key={link.path}>
                  <a 
                    href={translated} 
                    className={isActive ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <div className="mobile-socials" style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="#" target="_blank" aria-label="Instagram"><Instagram size={24} color="#333" /></a>
              <a href="#" target="_blank" aria-label="Facebook"><Facebook size={24} color="#333" /></a>
              <a href="#" target="_blank" aria-label="WhatsApp"><WhatsApp size={24} color="#333" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
