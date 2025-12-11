"use client";

import MobileTouchbar from "@/components/Touchbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import PartnerLogos from "@/components/PartnerLogos";
import TestimonialSection from "@/components/TestimonialSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <PortfolioSection />

      <ProjectCarousel />

      <PartnerLogos />

      <TestimonialSection />

      <ContactSection />

      <Footer />

      <MobileTouchbar />
    </div>
  );
}
