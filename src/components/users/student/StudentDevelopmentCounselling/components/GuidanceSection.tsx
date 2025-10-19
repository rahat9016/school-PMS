import React from 'react'
import bg from "../../../../../../public/students/shape.png"
import tick from "../../../../../../public/students/tick.png"
import Image from 'next/image'
const data = [
    "Guidance lessons are preventive counseling providing essential skills for life or general knowledge about mental health. They are taught in class for a larger audience. The topics presented in previous years include “Anti-bullying”, “Curiosity”, “Multiple intelligence”, “Social support”.",
    "Individual counseling offers reactive support to students who need additional help beyond what is provided in regular guidance lessons. These sessions create a safe and supportive space for students to discuss their unique challenges, concerns, or personal needs. "
]
export default function GuidanceSection() {
  return (
    <div
      className="bg-main-primary bg-no-repeat bg-contain bg-center py-10 lg:py-[104px]"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {data.map((value, index) => <div key={index} className='border border-main-secondary px-8 py-14 min-h-[255px] rounded-2xl'>
            <div className='flex items-start gap-[14px]'>
                <Image src={tick} alt='tic' width={20} height={20} />
                <p className="text-white font-poppins text-base leading-[28px] font-light">{value}</p>
            </div>
        </div> )}
        </div>
      </div>
    </div>
  )
}
