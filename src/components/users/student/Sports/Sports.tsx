import React from 'react'
import herobg from "../../../../../public/students/sports/medium-shot-kids-laying-grass.jpg"
import HeroSection from '@/components/shared/HeroSection'
import SportGallerySection from './components/SportGallerySection'
export default function Sports() {
  return (
    <div>
        <HeroSection
        img={herobg}
        title="Sports"
        className="bg-cover h-[280px]"
      />
      <SportGallerySection />
    </div>
  )
}
