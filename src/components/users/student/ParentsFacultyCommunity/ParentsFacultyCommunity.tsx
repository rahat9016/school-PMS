import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import herobg from "../../../../../public/students/ParentsFacultyCommunityHeroImg.jpg";
import AboutPFC from './components/AboutPFC';
import MembersObjective from './components/MembersObjective';

export default function ParentsFacultyCommunity() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Parents & Faculty Community (PFC)"
        className="bg-cover h-[280px]"
      />
      <AboutPFC />
      <MembersObjective />
    </div>
  )
}
