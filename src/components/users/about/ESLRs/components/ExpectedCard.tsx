import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ExpectedCard({
  title,
  description,
  img,
  isReverse
}: {
  title: string;
  description: string;
  img: StaticImageData;
  isReverse: boolean
}) {
  return (
    <div className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" :"lg:flex-row"} items-center gap-8 lg:gap-28`}>
      <div className="w-full lg:w-1/2">
        <h2 className="text-white font-poppins font-medium text-xl lg:text-[30px] mb-5 lg:mb-10">
          {title}
        </h2>
        <p className="text-white font-poppins font-light text-sm lg:text-base">
          {description}
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={img} alt="expected" className="mx-auto"/>
      </div>
    </div>
  );
}
