import AboutSection from "./components/AboutSection";
import AdmissionsProcessSection from "./components/AdmissionsProcessSection";
import FacilitiesSection from "./components/FacilitiesSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PAISGoalsSection from "./components/PAISGoalsSection";
import PreRegister from "./components/PreRegister";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <PreRegister />
      <AdmissionsProcessSection />
      <PAISGoalsSection />
      <GallerySection />
    </div>
  );
}
