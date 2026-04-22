import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Category {
  title: string;
  desc: string;
  image: string;
  link: string;
  accent: string;
}

interface Props {
  lang: 'en' | 'es';
  categories: Category[];
  translatePath: (path: string) => string;
}

export default function CategoryGrid({ lang, categories, translatePath }: Props) {
  return (
    <div className="container category-grid">
      {categories.map((cat, index) => (
        <motion.a 
          key={index}
          href={translatePath(cat.link)} 
          className="category-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="cat-image-w">
            <img src={cat.image} alt={cat.title} />
            <div 
              className="cat-overlay" 
              style={{ background: `linear-gradient(to top, ${cat.accent}dd, transparent)` }}
            ></div>
          </div>
          <div className="cat-content">
            <h3 className="serif">{cat.title}</h3>
            <p>{cat.desc}</p>
            <span className="cat-link">
              {lang === 'en' ? 'View Packages' : 'Ver Paquetes'} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
