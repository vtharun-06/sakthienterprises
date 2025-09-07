import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientSection";
import FinalCTA from "@/components/GetQuote";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import CompletedProjects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "[Your Company Name]",
            image: "https://yourwebsite.com/logo.png",
            "@id": "https://yourwebsite.com",
            url: "https://yourwebsite.com",
            telephone: "+91-9840879504",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Address",
              addressLocality: "Chennai",
              addressRegion: "TN",
              postalCode: "600XXX",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "13.0827",
              longitude: "80.2707",
            },
            openingHours: "Mo-Sa 09:00-18:00",
          }),
        }}
      />
      <main className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Section */}
        <AboutSection />

        {/* Product Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Products
            </h2>
            <ProductCarousel />
          </div>
        </section>

        {/* Clients Section */}
        <ClientsSection />

        {/* Completed Projects */}
        <CompletedProjects />

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </>
  );
}
