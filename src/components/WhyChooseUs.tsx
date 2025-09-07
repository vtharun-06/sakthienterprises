"use client";

import { FaCheckCircle } from "react-icons/fa";

const pointsLeft = [
  {
    title: "ISO 9001:2015 Certified",
    desc: "Our company spans 155,000 Sq. Ft. with 100,000 Sq. Ft. of covered infrastructure.",
  },
  {
    title: "21+ Years of Experience",
    desc: "We specialize in design, fabrication, and merchandising of Scaffolding & Formwork systems.",
  },
  {
    title: "Certified Products",
    desc: "Products tested for quality and strength at IIT Madras & Element Lab, U.K.",
  },
];

const pointsRight = [
  {
    title: "In-House Team",
    desc: "Customization & manufacturing to BS, EN, DIN, ASTM & IS standards.",
  },
  {
    title: "Flexible System Options",
    desc: "Wide range of easy-to-erect systems conforming to international standards.",
  },
  {
    title: "Executed 1400+ Projects",
    desc: "Trusted across India and abroad with extensive project execution experience.",
  },
];

function renderPoint(point: { title: string; desc: string }, idx: number) {
  return (
    <div key={idx} className="flex items-start space-x-3 mb-6">
      <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={22} />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{point.title}</h4>
        <p className="text-gray-600">{point.desc}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why{" "}
          <span className="text-yellow-400">Choose Sakthi Enterprises?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>{pointsLeft.map(renderPoint)}</div>

          {/* Right Column */}
          <div>{pointsRight.map(renderPoint)}</div>
        </div>
      </div>
    </section>
  );
}
