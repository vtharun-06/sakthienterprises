"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative bg-yellow-400 py-16 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Sakthi Enterprises provides trusted, safe, and high-quality
          scaffolding solutions tailored to your construction needs. Let’s build
          something together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
