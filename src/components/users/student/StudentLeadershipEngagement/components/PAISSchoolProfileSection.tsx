import React from "react";
import shape from "../../../../../../public/students/bgShape.png";
import img1 from "../../../../../../public/students/PAISSchoolProfileImg1.jpg";
import img2 from "../../../../../../public/students/PAISSchoolProfileImg2.jpg";
import Image from "next/image";
export default function PAISSchoolProfileSection() {
  return (
    <div
      className="bg-aliceBlue bg-no-repeat bg-[length:159px] lg:bg-[length:259px] bg-[top_0_left_0] py-10 lg:py-[108px]"
      style={{
        backgroundImage: `url(${shape.src})`,
      }}
    >
      <div className="container">
        <h3 className="text-main-secondary font-medium font-poppins text-sm text-center">
          Counselling
        </h3>
        <h1 className="text-center text-black text-3xl lg:text-5xl font-semibold mt-6">
          PAIS School Profile
        </h1>
        <div className="w-full xl:w-3/4 mx-auto mt-6 lg:mt-[72px]">
            <Image src={img1} alt="PAIS School Profile" width={808} height={1142} className="mx-auto" />
            <Image src={img2} alt="PAIS School Profile" width={808} height={1142} className="mx-auto mt-6 lg:mt-14" />
        </div>
      </div>
    </div>
  );
}
