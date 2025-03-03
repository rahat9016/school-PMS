import HeroSection from "@/components/shared/HeroSection";
import React from "react";
import herobg from "../../../../../public/about/aboutBg.jpeg";
import ChairmanMessageSection from "@/components/users/about/aboutPAIS/ChairmanMessageSection";
import HistorySection from "@/components/users/about/aboutPAIS/HistorySection";
import MissionVisionSection from "@/components/users/about/aboutPAIS/MissionVisionSection";
export default function AboutPage() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="About PAIS"
        description="Pan-Asia is one of Thailand’s Best International Schools. We are a focal point for the surrounding neighborhoods, offering a place for community social events and learning opportunities."
        // className="bg-cover"
      />
      <ChairmanMessageSection/>
      <HistorySection/>
      <MissionVisionSection/>
    </div>
  );
}
