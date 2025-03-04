import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/academic/ExamsHeroBg.jpg";
import NweaMapExamsKeyPoints from "./NweaMapExamsKeyPoints";

export default function ExamsAssessments() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Exams & Assessments"
        className="bg-cover h-[280px]"
      />
      <NweaMapExamsKeyPoints/>
    </div>
  );
}
