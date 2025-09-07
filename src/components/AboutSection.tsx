"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-72 md:h-96">
          <Image
            src="/about-img.jpg"
            alt="About Sakthi Enterprises"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-yellow-400">Sakthi Enterprises</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With over{" "}
            <span className="font-semibold text-yellow-400">
              21 years of experience
            </span>
            , Sakthi Enterprises is a trusted name in the scaffolding and
            formwork industry. We provide safe, reliable, and innovative
            solutions that meet global standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our in-house team specializes in{" "}
            <span className="font-semibold text-yellow-400">custom design</span>
            and manufacturing, ensuring every project is delivered with
            precision, efficiency, and safety.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
