import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import herobg from "../../../../../public/students/AlumniNetworkHeroBg.jpg";
import WelcomeAlumniSchool from './components/WelcomeAlumniSchool';
export default function AlumniNetwork() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Alumni Network"
        className="bg-cover h-[280px]"
      />
      <WelcomeAlumniSchool />
    </div>
  )
}
