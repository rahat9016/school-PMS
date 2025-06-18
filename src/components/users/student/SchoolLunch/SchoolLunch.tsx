import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../../public/academic/SchoolLunchHeroBg.jpg";
import LunchSection from './components/LunchSection';
import LunchMenuSection from './components/LunchMenuSection';
import LunchPrimaryMenuSection from './components/LunchPrimaryMenuSection';
export default function SchoolLunch() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="School Lunch"
        className="bg-cover h-[280px]"
      />
      <LunchSection />
      <LunchMenuSection />
      <LunchPrimaryMenuSection />
    </div>
  )
}
