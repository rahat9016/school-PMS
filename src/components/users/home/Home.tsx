import React from 'react'
import AboutSection from './components/AboutSection'
import FacilitiesSection from './components/FacilitiesSection'
import PreRegister from './components/PreRegister'
import AdmissionsProcessSection from './components/AdmissionsProcessSection'
import PAISGoalsSection from './components/PAISGoalsSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'

export default function Home() {

  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <FacilitiesSection/>
        <PreRegister/>
        <AdmissionsProcessSection/>
        <PAISGoalsSection/>
        <GallerySection />
    </div>
  )
}
