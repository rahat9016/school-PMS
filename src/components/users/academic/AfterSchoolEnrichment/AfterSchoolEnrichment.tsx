import HeroSection from '@/components/shared/HeroSection';
import herobg from "../../../../../public/academic/AfterSchoolHeroBg.jpg";
import MarketSpaceSection from '../../about/ExamsAssessments/MarketSpaceSection';
import AfterSchoolProgramSection from './components/AfterSchoolProgramSection';
export default function AfterSchoolEnrichment() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="After-School & Enrichment"
        className="bg-cover h-[280px]"
      />
      <AfterSchoolProgramSection />
      <MarketSpaceSection />
      
    </div>
  )
}
