import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/newsEvents/AcademicHeroBg.jpg";
import AcademicCalendar from "./components/AcademicCalendar";
import ActivityCalendarSection from "./components/ActivityCalendarSection";

export default function AcademicActivityCalendar() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Activity Calendar"
        className="bg-cover h-[280px]"
      />
      <AcademicCalendar />
      <ActivityCalendarSection />
    </div>
  );
}
