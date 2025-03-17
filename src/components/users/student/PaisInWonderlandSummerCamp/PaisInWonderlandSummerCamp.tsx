import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import herobg from "../../../../../public/students/campHeroBg.jpg";
import AboutSummerCamp from './components/AboutSummerCamp';
import PreRegisterSection from './components/PreRegisterSection';
import AcademicCampsSection from './components/AcademicCampsSection';
export default function PaisInWonderlandSummerCamp() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="PAIS in Wonderland Summer Camp"
        className="bg-cover h-[280px]"
      />
      <AboutSummerCamp/>
      <PreRegisterSection />
      <AcademicCampsSection />
    </div>
  )
}
