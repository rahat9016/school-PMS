import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/academic/SecondaryIBProgramsHeroBg.jpg";
import SecondaryIBProgramsSection from "./components/SecondaryIBProgramsSection";

export default function SecondaryIBPrograms() {
  return (
    <div className=" bg-white">
      <HeroSection
        img={herobg}
        title="IB MYP and IB DP Program"
        className="bg-cover h-[280px]"
      />
      <SecondaryIBProgramsSection />
    </div>
  );
}
