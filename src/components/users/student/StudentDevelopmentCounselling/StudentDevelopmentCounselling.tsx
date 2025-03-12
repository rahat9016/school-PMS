import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../../public/students/studentHero.jpeg";
import SchoolCounsellingSection from './components/SchoolCounsellingSection';
import GuidanceSection from './components/GuidanceSection';
export default function StudentDevelopmentCounselling() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Student Development & Counselling"
        className="bg-cover h-[280px]"
      />
      <SchoolCounsellingSection />
      <GuidanceSection />
    </div>
  )
}
