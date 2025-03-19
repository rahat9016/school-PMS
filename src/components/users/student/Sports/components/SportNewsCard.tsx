import React from 'react'
import img1 from "../../../../../../public/students/IndividualCounseling.png"
import Image from 'next/image'

export default function SportNewsCard() {
  return (
    <div className='bg-white p-6 shadow-sm rounded-xl'>
      <div className='w-full h-[200px] lg:h-[285px]'>
        <Image src={img1}  alt="img" width={368} height={285} className='rounded-lg w-auto h-auto'  />
      </div>
      <div>
        <h4 className='font-medium text-base  font-poppins text-black'>KG Family Sports Day 2022 </h4>
        <span className='text-mediumGray text-sm  font-poppins'>22 November, 2022</span>
      </div>
    </div>
  )
}
