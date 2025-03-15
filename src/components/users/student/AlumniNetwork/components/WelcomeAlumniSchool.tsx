import Image from "next/image";
import React from "react";
import comaLeft from "../../../../../../public/coma1.png";
import comaRight from "../../../../../../public/coma2.png";
import SchoolCounsellingImg from "../../../../../../public/students/StudentCounsellingImg.jpg";
import shape2 from "../../../../../../public/Facilities/shape.png";
export default function WelcomeAlumniSchool() {
  return (
    <div className="bg-white py-10 lg:pt-[140px] lg:pb-[110px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-32">
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <h1 className="font-poppins text-2xl xl:text-5xl font-semibold text-black mt-4 lg:mt-8 lg:mb-10">
            Welcome to School Alumni!
            </h1>
            <span className="bg-main-secondary h-[3px] w-[47px] block"> </span>
            <div className="mt-7">
              <Image
                src={comaLeft}
                alt="comaLeft"
                className="w-[69px] h-[55px] -ml-3 xl:-ml-7"
              />
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray -mt-7">
                Welcome back to your school! We hope you enjoy being a part of
                our extended international community that brings together former
                Secondary School students, parents and staff from around the
                world. If you are not yet an Secondary School Alumni member,
                register today through the Alumni Community section and
                reconnect with a global network that just keeps growing. We look
                foward to hearing from you. With best wishes!
              </p>
              <div className="flex items-end">
                <p className="text-sm xl:text-base font-medium font-poppins text-black-dark mt-6 lg:mt-12">
                  Alumni Relations Coordinator
                </p>
                <Image
                  src={comaRight}
                  alt="comaLeft"
                  className="w-[69px] h-[55px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <div
              className="w-full p-4 object-contain bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${shape2.src})`,
              }}
            >
              <Image
                src={SchoolCounsellingImg}
                alt="School Counselling Img"
                width={590}
                height={410}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
