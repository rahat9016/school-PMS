import React from "react";
import International from "../../../../../../public/Facilities/International.jpeg"
import Image from "next/image";

export default function CertificateMembership() {
  return (
    <div className="bg-[#F2FBFD] py-20 lg:py-[140px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h1
              className={`text-black font-poppins font-semibold text-2xl mt-4 lg:text-5xl text-left`}
            >
              Pan-Asia International School is a member of the Educational
              Collaborative for International Schools (ECIS)
            </h1>
            <span className="block bg-main-secondary h-[3px] w-[47.5px] my-5 lg:my-10"></span>
            <p
              className={`text-sm lg:text-base font-light font-poppins text-darkGray`}
            >
              Founded in 1965, ECIS is a non-profit global membership organisation that supports schools by providing range of services including professional development, accrediation, research and adovacy. While ECIS focuses on vaious aspects of education, they also emphasize the importance of child protection and offer resources to its members.
            </p>
            <p
              className={`text-sm lg:text-base font-light font-poppins text-darkGray mt-3`}
            >
              To equip our educators and staff, Pan-Asia International School required all educators and staff to take the Child Protection Training by the ECIS. At the same time, Pan-Asia International School will be conducting additional trainings for our faculty and staff to recognize signs of abuse, respond to emergencies, and take appropriate action to ensure the safety of the all the students and the school community.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={International} alt="International" />
          </div>
        </div>
      </div>
    </div>
  );
}
