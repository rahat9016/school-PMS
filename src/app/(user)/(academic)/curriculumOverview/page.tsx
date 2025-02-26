import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../../public/academic/academicBg.jpeg";
import AcademicGradeSection from '@/components/users/academic/CurriculumOverview/AcademicGradeSection';
import Independent from '@/components/users/academic/CurriculumOverview/Independent';
import GradeLevelInsights from '@/components/users/academic/CurriculumOverview/GradeLevelInsights';
import KeyLearning from '@/components/users/academic/CurriculumOverview/KeyLearning';
export default function CurriculumOverviewPage() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Curriculum Overview"
      />
      <AcademicGradeSection/>
      <Independent />
      <KeyLearning />
      <GradeLevelInsights />
    </div>
  )
}
