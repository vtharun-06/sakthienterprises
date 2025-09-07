"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

// Same products array (could be imported from a shared file)
const products = [
  {
    title: "Cuplock System",
    slug: "cuplock-system",
    image: "/scaffolding-safety-img.jpg",
    desc: "A versatile and easy-to-use modular scaffolding system, widely used in construction projects worldwide.",
    details:
      "Cuplock system offers multi-purpose scaffolding solutions suitable for access and formwork applications. It ensures high load-bearing capacity, easy assembly, and durability.",
  },
  {
    title: "Ringlock System",
    slug: "ringlock-system",
    image: "/scaffolding-safety-img.jpg",
    desc: "Quick to assemble, high load capacity, and ideal for complex structures and industrial applications.",
    details:
      "Ringlock is a modular system with a rosette connection point that allows multiple angles, making it flexible for industrial and infrastructure projects.",
  },
  {
    title: "H-Frame Scaffolding",
    slug: "h-frame-scaffolding",
    image: "/scaffolding-safety-img.jpg",
    desc: "Reliable and economical scaffolding solution for residential, commercial, and industrial works.",
    details:
      "H-Frame scaffolding is simple, cost-effective, and widely used in plastering, painting, and brickwork applications.",
  },
  {
    title: "Props & Shoring",
    slug: "props-shoring",
    image: "/scaffolding-safety-img.jpg",
    desc: "Adjustable props and shoring systems to provide safe vertical support for formwork and slabs.",
    details:
      "Props and shoring systems are adjustable, reusable, and suitable for temporary vertical support of formwork and heavy loads.",
  },
  {
    title: "Formwork Systems",
    slug: "formwork-systems",
    image: "/scaffolding-safety-img.jpg",
    desc: "Durable and reusable formwork panels designed for fast and accurate concrete construction.",
    details:
      "Formwork panels provide accurate concrete shaping, are reusable, and help reduce construction time significantly.",
  },
  {
    title: "Industrial Access",
    slug: "industrial-access",
    image: "/scaffolding-safety-img.jpg",
    desc: "Specialized scaffolding solutions for refineries, power plants, and heavy industrial projects.",
    details:
      "Industrial access scaffolding is designed for complex industrial maintenance and construction, ensuring worker safety in challenging environments.",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-gray-700 mb-6">{product.desc}</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.details}
          </p>

          <Link
            href={`/contact?product=${encodeURIComponent(product.title)}`}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </main>
  );
}
