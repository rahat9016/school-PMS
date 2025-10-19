import React from 'react'
import shape from "../../../../../../public/students/bgShape.png";
import SportNewsCard from './SportNewsCard';
export default function SportNewsSection() {
  return (
    <div
      className="bg-aliceBlue bg-no-repeat bg-[length:159px] lg:bg-[length:259px] bg-[top_0_left_0] py-10 lg:py-[108px]"
      style={{
        backgroundImage: `url(${shape.src})`,
      }}
    >
      <div className="container">
        <h3 className="text-main-secondary font-medium font-poppins text-sm text-center">
        Article
        </h3>
        <h1 className="text-center text-black text-xl lg:text-5xl font-semibold mt-3 lg:mt-6">
        Sports News
        </h1>
        <div className="w-full mt-6 lg:mt-[72px]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SportNewsCard />
        </div>
        </div>
      </div>
    </div>
  )
}
