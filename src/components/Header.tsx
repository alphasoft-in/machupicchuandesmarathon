import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useTranslatedPath } from '../utils/i18n';
import SocialIcon from './SocialIcon';

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

  const socialLinks = [
    { icon: 'tripadvisor', label: 'TripAdvisor', url: 'https://www.tripadvisor.com.pe/UserReviewEdit-g294314-d28603761-Machupicchu_Andes_Marathon-Cusco_Cusco_Region.html', scale: 1.2 },
    { icon: 'googlemaps', label: 'Google Maps', url: 'https://share.google/pAUNF0pj4QE86i5Hu', scale: 1.25 },
    { icon: 'instagram', label: 'Instagram', url: 'https://instagram.com/machupicchu_andes' },
    { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/machupicchuandesmarathn' },
    { icon: 'tiktok', label: 'TikTok', url: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)]' 
          : 'bg-black/20 backdrop-blur-sm py-6'
      }`}
    >
      <nav className="flex justify-between items-center max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center min-w-0">
          <a href={translatePath('/')} className="flex-shrink-0">
            <img 
              src="/images/logo.webp" 
              alt="Machu Picchu Andes Marathon" 
              className={`w-auto transition-all duration-300 ease-in-out ${isScrolled ? 'h-[32px] md:h-[40px] 2xl:h-[48px]' : 'h-[38px] md:h-[48px] 2xl:h-[60px]'}`} 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex gap-4 xl:gap-6 items-center ml-4 xl:ml-8 list-none m-0 p-0">
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
                  className={`group relative py-2 text-[13px] xl:text-base 2xl:text-lg font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap ${
                    isActive ? '!text-secondary' : isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 xl:gap-5 shrink-0">


          <div className={`flex items-center gap-0.5 p-0.5 rounded-full border transition-all duration-300 ${isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-white/10 border-white/20'}`}>
            <a 
              href={switchPath} 
              className={`text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 ${
                lang === 'en' 
                  ? 'bg-secondary text-white shadow-sm' 
                  : `${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'}`
              }`}
            >
              EN
            </a>
            <a 
              href={switchPath} 
              className={`text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 ${
                lang === 'es' 
                  ? 'bg-secondary text-white shadow-sm' 
                  : `${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'}`
              }`}
            >
              ES
            </a>
          </div>

          <button 
            className={`block xl:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed top-0 right-0 w-[280px] h-screen bg-white flex flex-col pt-24 px-8 shadow-[-10px_0_50px_rgba(0,0,0,0.2)] z-[-1]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <ul className="flex flex-col w-full m-0 p-0 list-none">
              {navLinks.map((link) => {
                const isHome = link.path === '/';
                const translated = translatePath(link.path);
                const isActive = isHome 
                  ? (currentPath === `/${lang}` || currentPath === `/${lang}/` || currentPath === '/')
                  : (currentPath === translated || currentPath === `${translated}/`);

                return (
                  <li key={link.path} className="w-full">
                    <a 
                      href={translated} 
                      className={`block w-full py-4 text-xl font-medium border-b border-gray-100 transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-12 flex flex-wrap gap-6 justify-center w-full text-primary">
              {socialLinks.map((link) => (
                <a 
                  key={link.icon}
                  href={link.url} 
                  target="_blank" 
                  aria-label={link.label} 
                  className="hover:text-secondary transition-all"
                >
                  <SocialIcon icon={link.icon} size={28 * (link.scale || 1)} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
