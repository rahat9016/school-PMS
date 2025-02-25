import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../../public/academic/academicBg.jpeg";
import AcademicGradeSection from '@/components/users/academic/CurriculumOverview/AcademicGradeSection';
export default function CurriculumOverviewPage() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Curriculum Overview"
      />
      <AcademicGradeSection/>
    </div>
  )
}
