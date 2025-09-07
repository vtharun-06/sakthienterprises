"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const clients = [
  { logo: "/client1.png", name: "Client 1" },
  { logo: "/client2.png", name: "Client 2" },
  { logo: "/client3.png", name: "Client 3" },
  { logo: "/client4.png", name: "Client 4" },
  { logo: "/client5.png", name: "Client 5" },
  { logo: "/client6.png", name: "Client 6" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Clients</span>
        </h2>

        {/* Swiper for Mobile */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop
            spaceBetween={20}
            slidesPerView={2}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={300}
                    height={300}
                    className="max-h-16 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Tablet/Desktop */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={300}
                height={300}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
