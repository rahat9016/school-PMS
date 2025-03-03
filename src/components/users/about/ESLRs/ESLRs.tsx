import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../../public/ESLRs/hero.jpg";
import ExpectedSection from './components/ExpectedSection';
export default function ESLRs() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Expected Schoolwide Learning Results"
        className="bg-cover h-[280px]"
      />
      <ExpectedSection />
    </div>
  )
}
