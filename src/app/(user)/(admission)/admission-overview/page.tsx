import React from 'react'
import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/admission/heroBg.png";
import AdmissionsOverviewSection from '@/components/users/admission/AdmissionsOverviewSection';
import WelcomingSection from '@/components/users/admission/WelcomingSection';
import AdmissionProcess from '@/components/users/admission/AdmissionProcess';
export default function AdmissionOverview() {
  return (
    <div>
      <HeroSection img={herobg} title="Admissions Overview" />
      <AdmissionsOverviewSection />
      <WelcomingSection />
      <AdmissionProcess />
    </div>
  )
}
