import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../public/faq/faqBg.png";
import ASKQuestion from "./components/ASKQuestion";
import GeneralFAQ from "./components/GeneralFAQ";
export default function FAQ() {
  return (
    <div>
      <HeroSection img={herobg} title="FAQ" className="bg-cover h-[280px]" />
      <GeneralFAQ />
      <ASKQuestion />
    </div>
  );
}
