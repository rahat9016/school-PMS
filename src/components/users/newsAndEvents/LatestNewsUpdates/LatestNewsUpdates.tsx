import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/newsEvents/latestNewsHeroBg.jpg";
import LatestNews from "./components/LatestNews";
import PAISPostSection from "./components/PAISPostSection";
export default function LatestNewsUpdates() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Latest News & Updates"
        className="bg-cover h-[280px]"
      />
      <LatestNews />
      <PAISPostSection />
    </div>
  );
}
