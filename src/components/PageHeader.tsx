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
      className="page-header"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="page-header-overlay"></div>
      <div className="header-content container">
        {/* Breadcrumb Premium */}
        <motion.div 
          className="breadcrumb"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href={lang === 'en' ? '/en' : '/es'}>{lang === 'en' ? 'HOME' : 'INICIO'}</a>
          <span className="separator">›</span>
          <span className="current">{title.toUpperCase()}</span>
        </motion.div>

        <motion.h1 
          className="serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title} {titleAccent && <><br/> <span>{titleAccent}</span></>}
        </motion.h1>
        <motion.p 
          className="page-header-subtitle"
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
