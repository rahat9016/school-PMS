import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import herobg from "../../../../../public/students/StudentLeadershipEngagementImg.jpg";
import StudentCounsellingSection from './components/StudentCounsellingSection';
import StudentCouncilMembers from './components/StudentCouncilMembers';
import PAISSchoolProfileSection from './components/PAISSchoolProfileSection';
export default function StudentLeadershipEngagement() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Student Leadership & Engagement"
        className="bg-cover h-[280px]"
      />
      <StudentCounsellingSection />
      <StudentCouncilMembers />
      <PAISSchoolProfileSection />
    </div>
  )
}
