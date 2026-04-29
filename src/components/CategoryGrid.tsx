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
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
      {categories.map((cat, index) => (
        <motion.a 
          key={index}
          href={translatePath(cat.link)} 
          className="relative h-[520px] rounded-[30px] overflow-hidden flex flex-col justify-end p-12 text-white transition-all duration-300 group no-underline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
            />
            <div 
              className="absolute inset-0 z-10 transition-all duration-300" 
              style={{ background: `linear-gradient(to top, ${cat.accent}ee, transparent)` }}
            ></div>
          </div>
          <div className="relative z-20">
            <h2 className="serif text-3xl mb-3">{cat.title}</h2>
            <p className="text-white/80 mb-6 line-clamp-3">{cat.desc}</p>
            <span className="inline-flex items-center text-secondary font-bold uppercase tracking-wider text-sm">
              {lang === 'en' ? 'View Packages' : 'Ver Paquetes'} <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
