"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            With over 20+ years of expertise,{" "}
            <span className="text-yellow-600 font-semibold">
              Sakthi Enterprises
            </span>{" "}
            has been a trusted name in providing safe, reliable, and innovative
            scaffolding and formwork solutions for construction projects across
            India.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Established in 1990s, we are specialize in the
              design, manufacturing, and supply of high-quality scaffolding and
              formwork systems. Our products adhere to international standards
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To deliver scaffolding solutions that ensure{" "}
              <span className="font-semibold text-yellow-600">
                safety, durability, and cost-effectiveness
              </span>
              . We aim to empower construction projects with the strongest
              foundations.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {/* <li>✔️ ISO 9001:2015 Certified Company</li> */}
              <li>✔️ 20+ Years of Industry Experience</li>
              {/* <li>✔️ Tested at IIT Madras & International Labs</li> */}
              <li>✔️ 500+ Successful Projects Executed</li>
              <li>✔️ Customizable & Flexible System Options</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/about-scaffolding.jpg"
              alt="About Sakthi Enterprises"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
