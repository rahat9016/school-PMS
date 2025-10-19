import React from 'react'
import herobg from "../../../../../public/academic/back-school-educationHeroBg.jpg";
import HeroSection from '@/components/shared/HeroSection'
import OnlineAppointmentSection from './components/OnlineAppointmentSection';
import LetUsCallYouBack from './components/LetUsCallYouBack';
import BookForSchoolTourSection from './components/BookForSchoolTourSection';
import MeetingStudentsSection from './components/MeetingStudentsSection';

export default function OpenHouseSchoolTour() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Open House & School Tour"
        className="bg-cover h-[280px]"
      />
      <OnlineAppointmentSection />
      <LetUsCallYouBack />
      <BookForSchoolTourSection />
      <MeetingStudentsSection />
    </div>
  )
}
