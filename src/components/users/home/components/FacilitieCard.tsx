/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IFacilitieCardProps {
  img: any;
  icon: any;
  title: string;
  description: string;
  href: string;
}

export default function FacilitieCard({
  img,
  icon,
  title,
  description,
  href,
}: IFacilitieCardProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${img.src})`,
      }}
      className="w-full h-[380px] xl:h-[417px] bg-no-repeat bg-cover bg-center group rounded-[12px] overflow-hidden"
    >
      <div className="w-full h-full group-hover:bg-[#000000CC] duration-200 relative">
        <div className="absolute bottom-12 group-hover:bottom-[160px] px-6 xl:px-12 duration-300">
          <Image
            src={icon.src}
            alt="Icon"
            width={60}
            height={60}
            className="group-hover:filter-custom-filter"
          />
          <h2 className="text-main-secondary font-poppins font-semibold text-2xl w-full xl:w-9/12 mb-5 mt-3">
            {title}
          </h2>
        </div>
        <div className="w-full h-full flex flex-col justify-end px-6 xl:px-12 pb-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
          <p className="text-white text-sm font-poppins font-medium">
            {description}
          </p>
          <Link
            href={href}
            className="bg-transparent shadow-none border border-charcoalGray text-main-secondary font-medium font-poppins text-sm duration-300 flex items-center justify-center mt-3 xl:mt-6 w-[129px] text-center py-3"
          >
            Learn More <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
