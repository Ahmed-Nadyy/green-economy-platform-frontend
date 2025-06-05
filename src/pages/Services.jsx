import React from "react";
import HeroSection from "./Services/HeroSection";
import CropsSection from "./Services/CropsSection";
import GuidanceSection from "./Services/GuidanceSection";
import ClimateSection from "./Services/ClimateSection";
import ExpertSection from "./Services/ExpertSection";

const Services = () => {
  return (

    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

      <HeroSection />
      <CropsSection />
      <GuidanceSection />
      <ExpertSection />
      <ClimateSection />

    </div>

  );
};

export default Services;