import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import herobg from "../../../../public/OLA/pupils-sitting-computer-science-lesson.jpg"
import OLASection from './components/OLASection'
export default function PAISOnlineLearningApproach() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="PAIS Online Learning Approach (OLA)"
        className="bg-cover h-[280px]"
      />
      <OLASection/>
    </div>
  )
}
