import React from "react";
import bg from "../../../../../public/heroBg.png";
export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="h-[40vh] lg:h-[90vh]"
    >
      <span className="block w-[1px] h-[60px] lg:h-[121px] mx-auto bg-white pt-5"></span>
      <div className="w-full lg:w-5/12 mx-auto h-full flex flex-col items-center px-4 lg:px-0">
        <p className="text-white mt-6 lg:mt-12 text-base uppercase">WELCOME TO</p>
        <h1 className="text-white text-[20px] lg:text-[96px] text-center font-bold font-poppins">
          PAN-ASIA INTERNATIONAL SCHOOL
        </h1>
        <p className="text-white mt-6 lg:mt-12 text-sm lg:text-base uppercase text-center">
          Western curriculum, Eastern Culture
        </p>
      </div>
      <span className="block w-[1px] h-[121px] mx-auto bg-main-secondary"></span>
    </div>
  );
}
