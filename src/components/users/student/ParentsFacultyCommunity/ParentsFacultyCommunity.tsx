import HeroSection from '@/components/shared/HeroSection';
import herobg from "../../../../../public/students/ParentsFacultyCommunityHeroImg.jpg";
import AboutPFC from './components/AboutPFC';
import AboutPFCLeadership from './components/AboutPFCLeadership';
import MembersObjective from './components/MembersObjective';

export default function ParentsFacultyCommunity() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Parent-Faculty Committee (PFC)"
        className="bg-cover h-[280px]"
      />
      <AboutPFCLeadership />
      <AboutPFC />
      <MembersObjective />
    </div>
  );
}
