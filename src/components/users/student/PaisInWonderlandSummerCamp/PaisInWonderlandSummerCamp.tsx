import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/students/campHeroBg.jpg";
import AcademicCampsSection from "./components/AcademicCampsSection";
import OctopusCamp from "./components/OctopusCampa";
import PreRegisterSection from "./components/PreRegisterSection";
export default function PaisInWonderlandSummerCamp() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="PAIS in Wonderland Summer Camp"
        className="bg-cover h-[280px]"
      />
      <OctopusCamp />
      {/* <AboutSummerCamp /> */}
      <PreRegisterSection />
      <AcademicCampsSection />
    </div>
  );
}
