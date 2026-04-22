import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  lang: 'en' | 'es';
  subtitle: string;
  ctaText: string;
  categoryPath: string;
}

export default function Hero({ lang, subtitle, ctaText, categoryPath }: Props) {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.h4 
          className="serif italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {lang === 'en' ? 'Experience the Andes like never before' : 'Vive los Andes como nunca antes'}
        </motion.h4>
        
        <motion.h1 
          className="serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Machu Picchu <br/> <span>Andes Marathon</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href={categoryPath} className="btn btn-primary">
            {ctaText} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
          <a href="#about" className="btn btn-outline">
            {lang === 'en' ? 'Why Choose Us' : 'Por qué elegirnos'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
