import HeroSection from "@/components/shared/HeroSection";
import React from "react";
import herobg from "../../../../../public/academic/EnrollmentScholarshipHeroBg.jpg";
import ScholarshipQR from "./components/ScholarshipQR";
import StudentInformation from "./components/StudentInformation";
export default function EnrollmentScholarship() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Enrollment & Scholarship"
        className="bg-cover h-[280px]"
      />
      <ScholarshipQR />
      <StudentInformation />
    </div>
  );
}
