import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/students/sports/medium-shot-kids-laying-grass.jpg";
import ISSAMembershipSection from "./components/ISSAMembership";
import SportGallerySection from "./components/SportGallerySection";
import SportNewsSection from "./components/SportNewsSection";
export default function Sports() {
  return (
    <div>
      <HeroSection img={herobg} title="Sports" className="bg-cover h-[280px]" />
      <SportGallerySection />
      <SportNewsSection />
      <ISSAMembershipSection />
    </div>
  );
}
