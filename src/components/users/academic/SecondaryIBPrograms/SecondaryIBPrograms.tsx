import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/academic/SecondaryIBProgramsHeroBg.jpg";
import SecondaryIBProgramsSection from "./components/SecondaryIBProgramsSection";

export default function SecondaryIBPrograms() {
  return (
    <div className=" bg-white">
      <HeroSection
        img={herobg}
        title="Secondary & IB Programs"
        className="bg-cover h-[280px]"
      />
      <SecondaryIBProgramsSection />
    </div>
  );
}
