"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { image: "/scaffolding-safety-img.jpg", title: "Metro Rail Project" },
  { image: "/scaffolding-safety-img.jpg", title: "High-Rise Building" },
  { image: "/scaffolding-safety-img.jpg", title: "Bridge Construction" },
  { image: "/scaffolding-safety-img.jpg", title: "Industrial Plant" },
  { image: "/scaffolding-safety-img.jpg", title: "Commercial Complex" },
  { image: "/scaffolding-safety-img.jpg", title: "Residential Towers" },
];

export default function CompletedProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Completed Projects</span>
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Small Desktops
            1280: { slidesPerView: 4 }, // Large Desktops
          }}
          className="pb-10"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-lg shadow-lg overflow-hidden bg-gray-50 hover:shadow-xl transition flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
