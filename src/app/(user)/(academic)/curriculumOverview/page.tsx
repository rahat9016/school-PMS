
import HeroSection from "@/components/shared/HeroSection";
import AcademicGradeSection from "@/components/users/academic/CurriculumOverview/AcademicGradeSection";
import GradeLevelInsights from "@/components/users/academic/CurriculumOverview/GradeLevelInsights";
import Independent from "@/components/users/academic/CurriculumOverview/Independent";
import KeyLearning from "@/components/users/academic/CurriculumOverview/KeyLearning";
import herobg from "../../../../../public/academic/academicBg.jpeg";
export default function CurriculumOverviewPage() {
  return (
    <div>
      <HeroSection img={herobg} title="Curriculum Overview" className="bg-cover" />
      <AcademicGradeSection />
      <Independent />
      <KeyLearning />
      <GradeLevelInsights />
    </div>
  );
}
