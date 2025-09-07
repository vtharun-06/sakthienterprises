import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientSection";
import FinalCTA from "@/components/GetQuote";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import CompletedProjects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
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
