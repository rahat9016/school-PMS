import React from 'react'

export default function HeroTitleTag({title}:{title: string}) {
  return (
    <div className='flex items-center gap-3 md:gap-7 mb-6 md:mb-10'>
      <div className='w-[5px] h-[42px] lg:h-[58px] bg-main-secondary'></div>
      <h1 className='font-poppins text-2xl lg:text-5xl font-semibold text-white'>{title}</h1>
    </div>
  )
}
