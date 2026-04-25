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
    <section id="home" className="relative flex items-center justify-center h-screen min-h-[700px] overflow-hidden text-center text-white bg-primary bg-[linear-gradient(rgba(0,0,0,0.4),rgba(14,59,46,0.7)),url('/images/hero_new.png')] bg-[position:center_25%] bg-cover bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,rgba(14,59,46,0.8),transparent)] z-10"></div>
      <div className="relative z-20 container max-w-[900px] px-4 mx-auto">
        <motion.div 
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-[1px] w-8 sm:w-12 bg-white/30 hidden xs:block"></div>
          <span className="text-[0.75rem] sm:text-[1rem] font-bold uppercase tracking-[3px] sm:tracking-[4px] text-white/90">
            {lang === 'en' ? 'Experience the Andes like never before' : 'Vive los Andes como nunca antes'}
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-white/30 hidden xs:block"></div>
        </motion.div>
        
        <motion.h1 
          className="serif text-[clamp(1.8rem,6vw,3.5rem)] leading-[1.1] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Machu Picchu <br/> <span className="block text-secondary">Andes Marathon</span>
        </motion.h1>
        
        <motion.p
          className="text-[clamp(0.85rem,4vw,1.1rem)] max-w-[600px] mx-auto mb-10 sm:mb-[clamp(2rem,5vw,3.5rem)] opacity-90 leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href={categoryPath} className="btn btn-primary w-full sm:w-auto max-w-[300px] flex justify-center items-center">
            {ctaText} <ArrowRight size={20} className="ml-2" />
          </a>
          <a href="#about" className="btn btn-outline w-full sm:w-auto max-w-[300px] flex justify-center items-center">
            {lang === 'en' ? 'Why Choose Us' : 'Por qué elegirnos'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
