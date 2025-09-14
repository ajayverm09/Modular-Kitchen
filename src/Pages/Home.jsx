import { useEffect } from "react";
import HeroSection from "../Components/HomeHero";
import FeaturesSection from "../Components/HomeFeatures";
import AboutSection from "../Components/HomeAbout";
import HomeService from "../Components/HomeService";
import PortfolioSection from "../Components/HomePortfolio";
import TestimonialsSection from "../Components/HomeTestimonial";
import CtaSection from "../Components/HomeCta";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <HomeService />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
