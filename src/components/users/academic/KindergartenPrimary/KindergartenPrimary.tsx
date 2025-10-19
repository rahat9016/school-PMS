import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../../public/academic/heroBg.jpg";
import Kindergarten from './components/KindergartenPrimary';
export default function KindergartenPrimary() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Kindergarten & Primary"
        className="bg-cover h-[280px]"
      />
      <Kindergarten />
    </div>
  )
}
