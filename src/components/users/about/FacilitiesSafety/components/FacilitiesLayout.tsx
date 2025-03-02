import Carousel from "@/components/shared/Carousel";
import { StaticImageData } from "next/image";
import React from "react";
import shape from "../../../../../../public/Facilities/shape.png"

export default function FacilitiesLayout({
  isReverse = false,
  data,
}: {
  isReverse?: boolean;
  data: {
    title:string;
    description: string;
    slides: StaticImageData[];
  };
}) {
  return (
    <div className={`py-20 lg:py-[140px] ${isReverse ? "bg-main-primary" : "bg-white"}`}>
      <div className="container">
        <div className={`flex gap-12 lg:gap-[100px] flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <div className="w-full lg:w-1/2 p-4 object-contain bg-contain bg-no-repeat" style={{
            backgroundImage: `url(${shape.src})`
          }}  >
            <Carousel slides={data?.slides} />
          </div>
          <div className="w-full lg:w-1/2 " >
            <h1 className="text-black font-poppins font-semibold text-2xl lg:text-5xl lg:mt-14">{data?.title}</h1>
            <span className="block bg-main-secondary h-[3px] w-[47.5px] my-5 lg:my-10"></span>
            <p className="text-darkGray text-sm lg:text-base font-light font-poppins">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
