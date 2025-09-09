"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Cuplock System",
    slug: "cuplock-system",
    image: "/scaffolding-safety-img.jpg",
    desc: "A versatile and easy-to-use modular scaffolding system, widely used in construction projects worldwide.",
  },
  {
    title: "Ringlock System",
    slug: "ringlock-system",
    image: "/scaffolding-safety-img.jpg",
    desc: "Quick to assemble, high load capacity, and ideal for complex structures and industrial applications.",
  },
  {
    title: "H-Frame Scaffolding",
    slug: "h-frame-scaffolding",
    image: "/scaffolding-safety-img.jpg",
    desc: "Reliable and economical scaffolding solution for residential, commercial, and industrial works.",
  },
  {
    title: "Props & Shoring",
    slug: "props-shoring",
    image: "/scaffolding-safety-img.jpg",
    desc: "Adjustable props and shoring systems to provide safe vertical support for formwork and slabs.",
  },
  {
    title: "Formwork Systems",
    slug: "formwork-systems",
    image: "/scaffolding-safety-img.jpg",
    desc: "Durable and reusable formwork panels designed for fast and accurate concrete construction.",
  },
  // {
  //   title: "Industrial Access",
  //   slug: "industrial-access",
  //   image: "/scaffolding-safety-img.jpg",
  //   desc: "Specialized scaffolding solutions for refineries, power plants, and heavy industrial projects.",
  // },
];

export default function ProductsPage() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4 text-yellow-600">
          Our Products
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our wide range of scaffolding and formwork systems designed to
          deliver safety, durability, and efficiency for every construction
          project.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 flex-1">{product.desc}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
