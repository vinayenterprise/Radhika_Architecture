import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-scroll';
import 'swiper/css';

import slide1 from '../assets/bg1.jpg';
import slide2 from '../assets/bg2.jpg';

const slides = [
  {
    image: slide1,
    subheading: 'WELCOME TO RADHIKA ARCHITECTURAL SERVICES',
    heading: 'Design with purpose build with precision',
    buttons: [
      { label: 'VIEW MORE ➝', to: 'about', style: 'border border-white text-white' },
      { label: 'OUR PROJECT ➝', to: 'projects', style: 'bg-[#c59d5f] text-white' }
    ]
  },
  {
    image: slide2,
    subheading: 'OUR PURPOSE',
    heading: 'LONG TERMS GOOD BUSINESS RELATIONSHIP',
    buttons: [
      { label: 'READ MORE ➝', to: 'about', style: 'bg-[#c59d5f] text-white' },
      { label: 'OUR GALLERY ➝', to: 'projects', style: 'border border-white text-white' }
    ]
  }
];

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[600px] md:h-[700px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-yellow-500 max-w-4xl mx-auto text-center px-4 uppercase">
                <div className="relative inline-block text-left">
                  <div className="absolute top-[-20px] left-[-20px] w-[120%] h-[120%] border-2 border-[#c59d5f] z-[-1]" />

                  {slide.subheading && (
                    <p className="text-sm md:text-base text-white uppercase tracking-wider mb-4">
                      {slide.subheading}
                    </p>
                  )}

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    {slide.heading}
                  </h1>

                  {/* Scroll Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {slide.buttons.map((btn, bIdx) => (
                      <Link
                        key={bIdx}
                        to={btn.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={`px-6 py-3 rounded-full text-sm font-semibold text-center cursor-pointer ${btn.style} hover:opacity-90 transition`}
                      >
                        {btn.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
