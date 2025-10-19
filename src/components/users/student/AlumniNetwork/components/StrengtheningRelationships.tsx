import Carousel from "@/components/shared/Carousel";
import React from "react";
import img1 from "../../../../../../public/students/Strengthening1.jpg";
import img2 from "../../../../../../public/students/Strengthening2.jpg";
import img3 from "../../../../../../public/students/Strengthening3.jpg";
import socialMedia1 from "../../../../../../public/students/socialMedia1.png";
import socialMedia2 from "../../../../../../public/students/socialMedia2.png";
import socialMedia3 from "../../../../../../public/students/socialMedia3.png";
import Link from "next/link";
import Image from "next/image";
export default function StrengtheningRelationships() {
  return (
    <div className="bg-aliceBlue py-10 lg:py-[140px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
          <div className="w-full lg:w-1/2">
            <Carousel
              slides={[img1, img2, img3]}
              isShowDotButton={false}
              nextClassName="left-20 bottom-8 top-auto transform-none w-10 rounded-md bg-[#F2FBFDB2] text-main-primary"
              prevClassName="left-8 bottom-8 top-auto transform-none w-10 rounded-md bg-[#F2FBFDB2] text-main-primary"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="font-poppins text-2xl xl:text-5xl font-semibold text-black">
              Strengthening Relationships
            </h1>
            <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-5 lg:mt-[64px]">
              The balance Secondary School maintains between honoring the past
              and remaining committed to the future is one of its most
              compelling attributes. We hope you’ll stay in touch, join our
              network, and bolster our community by supporting Secondary School
              students today.
            </p>
            <div className="flex flex-col md:flex-row items-center mt-7 lg:mt-14 gap-7 lg:gap-12">
              <div className="flex items-center justify-center bg-main-primary w-[310px] md:w-[364px] lg:w-[464px] h-[204px] rounded-lg px-5 lg:px-10 lg:-ml-48 z-40">
                <p className="text-sm lg:text-base font-light font-poppins text-white">
                  The balance Secondary School maintains between honoring the
                  past and remaining committed to the future is one of its most
                  compelling attributes. We hope you’ll stay in touch, join our
                  network, and bolster our community by supporting Secondary
                  School students today.
                </p>
              </div>
              <div className="flex items-center gap-3 lg:w-4/12">
                <Link href="#" target="_blank">
                  <Image src={socialMedia1} alt="" width={56} height={56} />
                </Link>
                <Link href="#" target="_blank">
                  <Image src={socialMedia2} alt="" width={56} height={56} />
                </Link>
                <Link href="#" target="_blank">
                  <Image src={socialMedia3} alt="" width={56} height={56} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
