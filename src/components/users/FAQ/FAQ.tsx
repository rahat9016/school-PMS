import HeroSection from '@/components/shared/HeroSection'
import React from 'react'
import herobg from "../../../../public/faq/faqBg.png";
import GeneralFAQ from './components/GeneralFAQ';
import ASKQuestion from './components/ASKQuestion';
export default function FAQ() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="FAQ"
        className="bg-cover h-[280px]"
      />
      <GeneralFAQ />
      <ASKQuestion/>
    </div>
  )
}
