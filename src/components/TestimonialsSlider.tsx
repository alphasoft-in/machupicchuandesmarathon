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
    <section className="py-20 bg-white text-center relative">
      <div className="container text-center mb-12">
        <h2 className="serif text-[1.8rem] mb-4">
          {lang === 'en' ? 'Whispers from the Andes' : 'Susurros de los Andes'}
        </h2>
        <p className="text-slate-700 mx-auto text-[1.05rem] max-w-[700px]">
          {lang === 'en' 
            ? 'Join hundreds of satisfied explorers who found their soul in the mountains.' 
            : 'Únete a los cientos de exploradores que encontraron su alma en las montañas.'}
        </p>
      </div>
      
      <div className="container relative px-[50px]">
        <style>{`
          .swiper-pagination-bullet-active {
            background: var(--secondary) !important;
          }
          .custom-swiper-pagination {
            position: relative !important;
            margin-top: 3rem;
          }
        `}</style>
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
            el: '.custom-swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-nav-next',
            prevEl: '.swiper-nav-prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 sm:p-14 rounded-[25px] text-center shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-[#f2f2f2] h-auto min-h-[320px] flex flex-col justify-center">
                <div className="flex justify-center gap-[5px] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p className="text-[0.95rem] sm:text-[1.1rem] italic mb-6 sm:mb-8 text-slate-800 leading-[1.6] sm:leading-[1.7]">"{item.text}"</p>
                <div className="font-bold uppercase text-[0.7rem] sm:text-[0.75rem] tracking-[1.5px] text-secondary">- {item.client}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Global Nav Buttons (managed by Swiper Navigation module) */}
        <button className="swiper-nav-prev absolute top-1/2 -translate-y-1/2 left-0 bg-transparent text-primary border-none cursor-pointer z-10 transition-all duration-300 p-0 flex items-center justify-center hover:text-secondary hover:scale-110" aria-label="Previous slide">
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button className="swiper-nav-next absolute top-1/2 -translate-y-1/2 right-0 bg-transparent text-primary border-none cursor-pointer z-10 transition-all duration-300 p-0 flex items-center justify-center hover:text-secondary hover:scale-110" aria-label="Next slide">
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        {/* Pagination dots */}
        <div className="custom-swiper-pagination"></div>
      </div>
    </section>
  );
}
