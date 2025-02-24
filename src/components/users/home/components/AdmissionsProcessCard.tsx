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
  href,
}: IAdmissionsProcessCardProps) {
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${bgIcon.src})`,
      }}
      className="bg-no-repeat bg-left-top bg-contain"
    >
      <div className="flex ">
        <Image src={icon} alt="Icon" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link
            href={href}
            className="hover:bg-transparent shadow-none hover:border hover:border-main-primary bg-main-primary text-white hover:text-main-primary font-medium font-poppins text-sm duration-300 flex items-center justify-center text-center rounded-xl px-4 py-3"
          >
            Pre-Register Now <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
