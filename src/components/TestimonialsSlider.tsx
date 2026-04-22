import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial {
  text: string;
  client: string;
  rating: number;
}

interface Props {
  lang: 'en' | 'es';
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ lang, testimonials }: Props) {
  return (
    <section className="section bg-white text-center testimonials-section">
      <div className="container header-group" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="serif section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          {lang === 'en' ? 'Whispers from the Andes' : 'Susurros de los Andes'}
        </h2>
        <p className="text-muted section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '1.05rem', maxWidth: '700px' }}>
          {lang === 'en' 
            ? 'Join hundreds of satisfied explorers who found their soul in the mountains.' 
            : 'Únete a los cientos de exploradores que encontraron su alma en las montañas.'}
        </p>
      </div>
      
      <div className="container relative testimonials-slider-wrapper">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-nav.next',
            prevEl: '.swiper-nav.prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p>"{item.text}"</p>
                <div className="client">- {item.client}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Global Nav Buttons (managed by Swiper Navigation module) */}
        <button className="swiper-nav prev" aria-label="Previous slide">
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button className="swiper-nav next" aria-label="Next slide">
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        {/* Pagination dots */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
