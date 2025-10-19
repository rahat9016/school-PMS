import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/safety/PAIS.jpg";
import ChildSafety from "./components/ChildSafety";
import DevelopmentPolicy from "./components/DevelopmentPolicy";

export default function Safety() {
  return (
    <div>
      <HeroSection img={herobg} title="Safety" className="bg-cover h-[280px]" />
      <ChildSafety />
      {/* <CertificateMembership /> */}
      <DevelopmentPolicy />
    </div>
  );
}
