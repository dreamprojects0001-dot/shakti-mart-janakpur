import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ValueProps from "@/components/ValueProps";
import FeaturedOffers from "@/components/FeaturedOffers";
import AboutStrip from "@/components/AboutStrip";
import Testimonials from "@/components/Testimonials";
import LoyaltyBanner from "@/components/LoyaltyBanner";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ValueProps />
      <FeaturedOffers />
      <AboutStrip />
      <Testimonials />
      <LoyaltyBanner />
      <LocationHours />
      <Footer />
    </div>
  );
};

export default Index;