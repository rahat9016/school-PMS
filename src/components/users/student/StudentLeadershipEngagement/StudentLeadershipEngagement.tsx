import HeroSection from '@/components/shared/HeroSection';
import herobg from "../../../../../public/students/StudentLeadershipEngagementImg.jpg";
import PAISSchoolProfileSection from './components/PAISSchoolProfileSection';
import StudentCouncilMembers from './components/StudentCouncilMembers';
import StudentCounsellingSection from './components/StudentCounsellingSection';
export default function StudentCouncil() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Student Council"
        className="bg-cover h-[280px]"
      />
      <StudentCounsellingSection />
      <StudentCouncilMembers />
      <PAISSchoolProfileSection />
    </div>
  )
}
