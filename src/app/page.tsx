import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/GetQuote";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import StatsBand from "@/components/StatsBand";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBand />
      <Services />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}
