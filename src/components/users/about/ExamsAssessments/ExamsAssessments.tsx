import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/academic/ExamsHeroBg.jpg";
import NweaMapExamsKeyPoints from "./NweaMapExamsKeyPoints";
import OctopusCampSection from "./OctopusCampSection";

export default function ExamsAssessments() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="NWEA MAP Exams"
        className="bg-cover h-[280px]"
      />
      <NweaMapExamsKeyPoints />
      <OctopusCampSection />
    </div>
  );
}
