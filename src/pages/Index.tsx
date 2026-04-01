import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ValueProps from "@/components/ValueProps";
import FeaturedOffers from "@/components/FeaturedOffers";
import AboutStrip from "@/components/AboutStrip";
import Testimonials from "@/components/Testimonials";
import LoyaltyBanner from "@/components/LoyaltyBanner";
import MembershipForm from "@/components/MembershipForm";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingParticles from "@/components/FloatingParticles";
import BodyBackground from "@/components/BodyBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-body">
      <FloatingParticles />
      <Navbar />
      <Hero />
      <div className="relative">
        <BodyBackground />
        <ScrollReveal>
          <CategoryGrid />
      </ScrollReveal>
      <ScrollReveal>
        <ValueProps />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedOffers />
      </ScrollReveal>
      <ScrollReveal>
        <AboutStrip />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <LoyaltyBanner />
      </ScrollReveal>
      <ScrollReveal>
        <MembershipForm />
      </ScrollReveal>
      <ScrollReveal>
        <LocationHours />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
