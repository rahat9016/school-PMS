import React from "react";
import QR from "../../../../../../public/academic/QR.jpg";
import Image from "next/image";
export default function ScholarshipQR() {
  return (
    <div className="bg-white pt-10 lg:pt-20 pb-10">
      <div className="container">
        <div className="w-full lg:w-3/4 mx-auto bg-main-primary p-10 flex flex-col lg:flex-row gap-8 lg:gap-20 rounded-lg">
          <div className="w-full lg:w-[70%]">
            <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-white uppercase">
              Scholarship
            </h1>
            <span className="block bg-main-secondary h-[3px] w-[140px] mt-3"></span>
            <p className="text-sm lg:text-lg font-poppins font-medium text-white mt-8">
              Connect with us on LINE Official for direct access to our
              admission team and to stay updated on more promotions!
            </p>
          </div>
          <div className="w-[30%]">
            <Image
              src={QR}
              alt="QR"
              width={240}
              height={240}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10 lg:mt-20">
          <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-main-primary uppercase text-center">
            Online Enrollment Form
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[140px] mt-3 mx-auto"></span>
        </div>
      </div>
    </div>
  );
}
