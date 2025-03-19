import Image from 'next/image'
import React from 'react'
import sportsImg1 from "../../../../../../public/students/sports/sportsImg1.png"
export default function SportGallerySection() {
  return (
    <div className='bg-white pt-[104px] pb-[140px]'>
      <div className="container">
        <div className="relative w-full mx-auto">
          <div className="group relative  rounded-lg">
            <Image src={sportsImg1} alt="Football" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
