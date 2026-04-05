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
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-body">
      <FloatingParticles />
      <Navbar />
      <Hero />
      <div className="relative">
        <BodyBackground />
        <ScrollReveal variant="flip">
          <CategoryGrid />
        </ScrollReveal>
        <ScrollReveal variant="tilt">
          <ValueProps />
        </ScrollReveal>
        <ScrollReveal variant="zoom">
          <FeaturedOffers />
        </ScrollReveal>
        <ScrollReveal variant="slide">
          <AboutStrip />
        </ScrollReveal>
        <ScrollReveal variant="flip">
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal variant="tilt">
          <LoyaltyBanner />
        </ScrollReveal>
        <ScrollReveal variant="zoom">
          <MembershipForm />
        </ScrollReveal>
        <ScrollReveal variant="slide">
          <LocationHours />
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
