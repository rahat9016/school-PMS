import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
interface IAdmissionsProcessCardProps {
  bgColor: string;
  bgIcon: StaticImageData; // Assuming icon1 is a string (like a URL or class name)
  icon: StaticImageData; // Assuming img1 is also a string (like an image URL)
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
}
export default function AdmissionsProcessCard({
  bgColor,
  bgIcon,
  icon,
  title,
  description,
  buttonLabel,
  href,
}: IAdmissionsProcessCardProps) { 
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${bgIcon.src})`,
      }}
      className="bg-no-repeat bg-[length:auto_80px] bg-top-left rounded-xl"
    >
      <div className="flex px-6 pt-9 pb-11">
        <Image src={icon} alt="Icon" width={109} height={120} className="w-auto h-[110px]"/>
        <div>
          <h3 className="text-black-dark font-poppins font-semibold text-xl">{title}</h3>
          <div className="h-[60px]">
          <p className="text-sm font-poppins font-light text-darkGray mt-[18px]">{description}</p>
          </div>
          <Link
            href={href}
            className="hover:bg-transparent shadow-none border border-main-primary bg-main-primary text-white hover:text-main-primary font-medium font-poppins text-sm duration-300 flex items-center justify-center text-center rounded-xl px-4 py-3 mt-12 w-fit gap-2"
          >
            {buttonLabel} <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
