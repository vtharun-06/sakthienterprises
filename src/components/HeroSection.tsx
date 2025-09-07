"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero.jpg",
    heading: "Trusted Scaffolding Partner",
    subheading:
      "Delivering safe and reliable scaffolding for all your construction needs.",
  },
  {
    image: "/scaffolding-safety-img.jpg",
    heading: "Global Quality Standards",
    subheading: "We meet BS, EN, DIN, ASTM & IS specifications.",
  },
  {
    image: "/project1.jpg",
    heading: "Proven Project Experience",
    subheading: "Executed 1400+ scaffolding & formwork projects worldwide.",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Background Image */}
            <div className="relative w-full h-[85vh]">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
                <motion.div
                  key={idx}
                  variants={fadeVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-yellow-400 drop-shadow-lg leading-snug">
                    {slide.heading}
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl mb-6 leading-relaxed">
                    {slide.subheading}
                  </p>
                  <button className="bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-yellow-400 transition">
                    Get a Quote
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
