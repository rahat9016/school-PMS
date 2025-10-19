import React from "react";
import Image, { StaticImageData } from "next/image";
import tickmark from "../../../../../public/academic/tickmark.png";
interface IPoint {
  point: string;
}

interface IGradeInfo {
  img: StaticImageData;
  title: string;
  points: IPoint[];
}

export default function AcademicGradeCard({ img, title, points }: IGradeInfo) {
  return (
    <div className="bg-forestWhite p-10 rounded-xl border border-light hover:shadow-md hover:-translate-y-5 duration-500">
      <Image
        src={img.src}
        alt="AcademicGrade"
        width={240}
        height={73}
        className="w-auto h-auto mb-10"
      />
      <h1 className="font-poppins text-xl lg:text-2xl font-semibold text-main-primary">
        {title}
      </h1>
      <span className="block w-1/2 h-[3px] bg-main-secondary mt-1 mb-5"></span>
      <ul>
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-base font-normal font-poppins mb-2">
            <Image src={tickmark} alt={point?.point} width={20} height={20} />
            <p>{point.point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
