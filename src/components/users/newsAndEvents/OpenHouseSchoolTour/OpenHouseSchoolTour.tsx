import HeroSection from '@/components/shared/HeroSection';
import herobg from "../../../../../public/academic/back-school-educationHeroBg.jpg";
import BookForSchoolTourSection from './components/BookForSchoolTourSection';
import LetUsCallYouBack from './components/LetUsCallYouBack';
import MeetingStudentsSection from './components/MeetingStudentsSection';
import OnlineAppointmentSection from './components/OnlineAppointmentSection';

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
