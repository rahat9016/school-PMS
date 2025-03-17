import React from "react";
import PreRegister from "./PreRegisterForm";
import bg from "../../../../../../public/students/bg.png";
export default function PreRegisterSection() {
  return (
    <div
      className=" bg-no-repeat bg-contain bg-top-center bg-aliceBlue py-10 lg:py-[140px]"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <div>
          <h1 className="font-poppins text-lg xl:text-2xl font-semibold text-black">
            Interested students may pre-register below.
          </h1>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-5">
            Our staff will contact you to formalize your registration.
          </p>
          <span className="block w-[47px] h-[3px] bg-main-secondary my-5 lg:my-10"></span>
        </div>
        <PreRegister />
      </div>
    </div>
  );
}
