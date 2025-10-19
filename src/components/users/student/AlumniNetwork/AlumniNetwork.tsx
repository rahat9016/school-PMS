import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/students/alumni.jpg";
import WelcomeAlumniSchool from "./components/WelcomeAlumniSchool";
import StrengtheningRelationships from "./components/StrengtheningRelationships";

export default function AlumniNetwork() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Alumni Network"
        className="bg-cover h-[280px]"
      />
      <WelcomeAlumniSchool />
      <StrengtheningRelationships />
    </div>
  );
}
