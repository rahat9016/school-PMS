import React from 'react'
import AboutSection from './components/AboutSection'
import FacilitiesSection from './components/FacilitiesSection'
import PreRegister from './components/PreRegister'
import AdmissionsProcessSection from './components/AdmissionsProcessSection'

export default function Home() {
  return (
    <div>
        {/* <HeroSection/> */}
        <AboutSection/>
        <FacilitiesSection/>
        <PreRegister/>
        <AdmissionsProcessSection/>
    </div>
  )
}
