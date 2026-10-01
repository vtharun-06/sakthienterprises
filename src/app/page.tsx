import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/GetQuote";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import StatsBand from "@/components/StatsBand";
import Delivery from "@/components/Delivery";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBand />
      <Services />
      <AboutSection />
      <Reviews />
      <Delivery />
      <Faq />
      <FinalCTA />
    </main>
  );
}
