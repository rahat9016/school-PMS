import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import herobg from "../../../../public/contact/contactHeroBg.png";
import KeepTouch from './components/KeepTouch';
import Subscribe from './components/Subscribe';
export default function Contact() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Contact Information"
        className="bg-cover h-[280px]"
      />
      <KeepTouch />
      <Subscribe />
    </div>
  )
}
