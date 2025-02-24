import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <video 
        autoPlay loop muted playsInline width="800" height="450" className="object-cover"

      >
        <source src={"/public/videos/heroVideo.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
