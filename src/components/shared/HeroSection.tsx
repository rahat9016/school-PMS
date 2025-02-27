import { StaticImageData } from "next/image";
import React from "react";
import HeroTitleTag from "./HeroTitleTag";

interface IHeroSectionProps {
  img: StaticImageData;
  title: string;
  description?: string;
}

export default function HeroSection({
  img,
  title,
  description,
}: IHeroSectionProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${img.src})`,
      }}
      className="bg-no-repeat h-[410px] md:h-[520px] lg:h-[620px] w-full object-cover bg-center bg"
    >
      <div className="w-full h-full bg-gradient-to-t from-[#242d658f] to-transparent">
        <div className="container flex flex-col justify-end h-full">
          <HeroTitleTag title={title} />
          {description && (
            <p className="pl-4 md:pl-8 mb-[72px] text-base md:text-lg text-white font-normal font-poppins">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
