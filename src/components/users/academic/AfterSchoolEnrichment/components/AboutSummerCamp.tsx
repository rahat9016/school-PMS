import Carousel from "@/components/shared/Carousel";
import React from "react";
import img1 from "../../../../../../public/students/camp1.png";
import img2 from "../../../../../../public/students/camp2.png";
import img3 from "../../../../../../public/students/camp3.png";
export default function AboutSummerCamp() {
  return (
    <div className="bg-white  py-10 lg:pt-[96px] lg:pb-[104px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
          <div className="w-full lg:w-1/2">
            <h1 className="font-poppins text-2xl xl:text-5xl font-semibold text-black">
              About Summer Camp
            </h1>
            <span className="block w-[47px] h-[3px] bg-main-secondary my-5 lg:my-10"></span>
            <p className="text-sm lg:text-base font-light font-poppins text-darkGray">
              <span className="font-medium text-black">
                Dive into a world of English language adventure at PAIS in
                Wonderland Summer Camp 2024!
              </span>
               From exciting activities to engaging lessons, our summer camp is
              the perfect opportunity to enhance your child’s English skills
              while making lifelong memories.
            </p>
            <ul className="mt-3 lg:mt-10 flex flex-col gap-1">
              <li className="text-darkGray text-sm lg:text-base font-light font-poppins">
                <span className="font-medium text-black">Camp Dates:</span> June
                24 – July 12, 2024
              </li>
              <li className="text-darkGray text-sm lg:text-base font-light font-poppins">
                <span className="font-medium text-black">Registration Fee:</span> June
                24,000 baht
              </li>
              <li className="text-darkGray text-sm lg:text-base font-light font-poppins">
                <span className="font-medium text-black">Early Bird Special:</span> June
                20,000 baht until May 31, 2024
              </li>
              <li className="text-darkGray text-sm lg:text-base font-light font-poppins">
                <span className="font-medium text-black">Ages:</span> June
                4-10 years old
              </li>
            </ul>
            <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7 lg:mt-14">
            Hurry, secure your spot today and take advantage of our Early Bird offer. Contact us at 083-096-2291 or 02-3472280 for inquiries and registration. See you there!
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Carousel
              slides={[img1, img2, img3]}
              isShowDotButton={false}
              nextClassName="right-8 top-8 bottom-auto transform-none w-10 rounded-md bg-[#F2FBFDB2] text-main-primary"
              prevClassName="left-[65%] sm:left-[75%] md:left-[84%] lg:left-[320px] xl:left-[448px] top-8 bottom-auto transform-none w-10 rounded-md bg-[#F2FBFDB2] text-main-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
