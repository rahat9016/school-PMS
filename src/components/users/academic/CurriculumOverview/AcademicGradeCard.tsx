import Image, { StaticImageData } from 'next/image';
import React from 'react'
interface IPoint {
    point: string;
  }
  
  interface IGradeInfo {
    img: StaticImageData; 
    title: string;
    points: IPoint[];
  }
  
export default function AcademicGradeCard({ img, title, points} : IGradeInfo) {
    console.log(points)
  return (
    <div className='bg-softGray p-10 rounded-xl'>
        <Image src={img.src} alt='AcademicGrade' width={240} height={73} className='w-auto h-auto mb-10' />
        <h1 className='font-poppins text-xl lg:text-2xl font-semibold text-main-primary'>{title}</h1>
        <span className='block w-1/2 h-[3px] bg-main-secondary mt-1'></span>
    </div>
  )
}
