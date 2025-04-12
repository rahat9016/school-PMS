import React from "react";
import TitleTag from "@/components/shared/TitleTag";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import img from "../../../../../public/apply/img.jpg";
import img2 from "../../../../../public/apply/img2.jpg";
import img3 from "../../../../../public/apply/img3.png";
import img4 from "../../../../../public/apply/img4.png";
import Image from "next/image";
export default function PreRegister() {
  return (
    <div className="bg-[#F2FBFD] py-32">
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-32">
        <div>
          <TitleTag title="Apply" />
          <h1 className="text-black font-poppins font-semibold text-2xl lg:text-5xl mb-12 mt-6">
            Apply for Admission
          </h1>
          <p className="text-base font-poppins font-light text-darkGray mb-14">
            Pan-Asia International School is extremely proud to be a member of
            the IB MYP & DP world-wide community. PAIS completed its MYP
            verification in May 2020. PAIS now offers a complete MYP & DP
            program for our students from grades 6 to 12.
          </p>
          <Link
            href={"/"}
            className="hover:bg-transparent shadow-none hover:border hover:border-main-primary bg-main-primary text-white hover:text-main-primary font-medium font-poppins text-sm duration-300 flex items-center justify-center text-center py-3 w-[191px] rounded-xl"
          >
            Pre-Register Now <ChevronRight size={16} />
          </Link>
        </div>
        <div className="flex items-end gap-[25px] relative">
          <div className="bg-white shadow-lg absolute top-8 w-[200px] h-[108px] px-19px py-15px rounded-xl left-24 flex items-center justify-center">
            <Image src={img3} alt="" width={156} height={44} />
          </div>
          <Image
            src={img4}
            alt=""
            width={40}
            height={40}
            className="absolute right-4 bottom-10"
          />

          <Image
            src={img2}
            alt=""
            width={200}
            height={293}
            className="mt-auto"
          />
          <Image src={img} alt="" width={295} height={391} />
          <div className="bg-white shadow-lg absolute bottom-5 w-[166px] h-[57px] px-19px py-15px text-xs font-poppins  font-normal rounded-xl -left-10 flex items-center">
            Internationally
            <br /> Trained Instructors
          </div>
          <div className="bg-main-secondary shadow-lg absolute -bottom-8 w-[205px] h-[67px] px-19px py-15px text-xs font-poppins  font-normal rounded-xl right-44 text-white flex items-center">
            Empowering future leaders through innovation.
          </div>
        </div>
      </div>
    </div>
  );
}
