import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  lang: 'en' | 'es';
  title: string;
  titleAccent?: string;
  subtitle: string;
  bgImage: string;
}

export default function PageHeader({ lang, title, titleAccent, subtitle, bgImage }: Props) {
  return (
    <section 
      className="relative min-h-[55vh] flex items-center justify-center text-center pt-[180px] pb-20 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0e3b2e]/85 z-10"></div>
      <div className="relative z-20 max-w-[800px] px-6 container">
        {/* Breadcrumb Premium */}
        <motion.div 
          className="flex items-center justify-center gap-2.5 text-[0.75rem] font-bold tracking-[2px] mb-8 text-white/70"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href={lang === 'en' ? '/en' : '/es'} className="text-white/80 no-underline transition-colors hover:text-secondary">
            {lang === 'en' ? 'HOME' : 'INICIO'}
          </a>
          <span className="text-white/40">›</span>
          <span className="text-secondary">{title.toUpperCase()}</span>
        </motion.div>

        <motion.h1 
          className="serif text-[clamp(2rem,5vw,4rem)] leading-[1.1] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title} {titleAccent && <><br/> <span className="text-secondary">{titleAccent}</span></>}
        </motion.h1>
        <motion.p 
          className="text-lg leading-relaxed opacity-90 max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
