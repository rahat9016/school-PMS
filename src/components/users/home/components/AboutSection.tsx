import TitleTag from "@/components/shared/TitleTag";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import aboutUsImg from "../../../../../public/about/aboutus.png";
import aboutUsImg2 from "../../../../../public/about/Group 1000002290.png";
import aboutUsImg3 from "../../../../../public/about/Rectangle 94.png";
import Link from "next/link";
export default function AboutSection() {
  return (
    <div className="bg-white py-12 md:py-32">
        <div className="flex flex-col-reverse md:flex-row gap-10 lg:gap-32 container">
      <div className="relative md:w-1/2">
        <Image src={aboutUsImg} alt="aboutUsImg" />
        <Image
          src={aboutUsImg3}
          alt="aboutUsImg3"
          className="absolute top-[35%] md:top-[18%] lg:top-[20%] xl:top-[30%] left-[45%] md:left-[40%] lg:left-[45%] xl:left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-zoom-in-out w-[50px] md:w-[74px]"
          width={74}
          height={77}
        />
        <Image
          src={aboutUsImg2}
          alt="aboutUsImg3"
          className="absolute animate-zoom-in-out w-[50px] xl:w-[74px] top-[70%] sm:top-[40%] lg:top-[45%] xl:top-[60%] xl:left-[7%]"
          width={74}
          height={77}
        />
      </div>

      {/* Text Content */}
      <div className="lg:text-left md:w-1/2">
        <TitleTag title="About Us" />
        <h2 className="text-xl lg:text-5xl font-semibold font-poppins lg:leading-[58px] mt-6 xl:mt-12">
          Pan Asia
          <br /> International School
        </h2>
        <p className="text-gray-600 mb-6 xl:mb-12 mt-7 xl:mt-14 text-darkGray font-poppins font-light leading-[24px]">
          Pan-Asia International School is extremely proud to be a member of the
          IB MYP & DP world-wide community. PAIS completed its MYP verification
          in May 2020. PAIS now offers a complete MYP & DP program for our
          students from grades 6 to 12.
        </p>
        <p className="text-gray-600 mb-6 xl:mb-[60px] text-darkGray font-poppins font-light leading-[24px] ">
          IB World Schools share a common philosophy- a commitment to
          high-quality, challenging, international education- that we believe is
          important for our students. * Only schools authorized by the IB
          Organization can offer any of its four academic programmes: the
          Primary Years Programme (PYP), the Middle Years Programme (MYP), the
          Diploma Programme (DP), or the Career-related Programme (CP).
          Candidate status gives no guarantee that authorization will be
          granted.
        </p>
        <Link href="/" className="bg-transparent shadow-none border border-main-primary text-main-primary font-medium font-poppins text-sm hover:bg-main-primary hover:text-white duration-300 flex items-center justify-center w-[215px] py-3 rounded-lg">
          For More Information <ChevronRight />
        </Link>
      </div>
    </div>
    </div>
  );
}
