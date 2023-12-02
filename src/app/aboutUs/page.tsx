"use client"
import React from "react";
import HeroSection from "@/components/common/HeroSection";
import AboutSection from "@/components/about/about-section";




const HomePage = () => {
  return (
    <div>
      <HeroSection
        subtitle="About us"
        title="Live without anxiety 
          or exhaustion"
      />
      <AboutSection />
    </div>
  );
};
export default HomePage;
