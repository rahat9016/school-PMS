import HeroSection from "@/components/shared/HeroSection";
import React from "react";
import herobg from "../../../../../public/about/SchoolBoardHeroBg.jpg";
import bgShape from "../../../../../public/about/bgShape.png";
import img from "../.../../../../../../public/about/SchoolBoardImg.jpg"
import Image from "next/image";

export default function SchoolBoard() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="School Board"
        className="bg-cover h-[280px]"
      />
      <div className="bg-white">
        <div className="container py-10 lg:py-[72px]">
          <p className="text-darkGray font-poppins font-light text-base">
            Do you wish to belong to a school community that will guide, support
            and care for your children to ensure that they learn, grow and
            discover their fullest potential? Are you a parent looking for an
            affordable, quality international education where your child will
            grow not only academically but morally as global citizens in a safe
            multi-cultural environment where all faiths are respected? Or, are
            you a student looking for teachers to serve as facilitators to help
            challenge your multiple intelligences as they guide you to acquire
            the knowledge and skills needed to help achieve your aspirations?
            Students, are you ready to become a global citizen and take your
            responsible place in the world?
          </p>
        </div>
      </div>
      <div
        className="bg-main-primary  h-[348px] lg:h-[448px]"
        style={{
          backgroundImage: `url(${bgShape.src})`,
        }}
      ></div>
      <div>
        <div className="w-10/12 lg:w-7/12 mx-auto -mt-56 mb-20 lg:mb-52">
            <Image src={img} alt="board" />
        </div>
      </div>
    </div>
  );
}
