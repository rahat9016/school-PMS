import React from "react";
import OLA1 from "../../../../../public/OLA/OLA1.jpg";
import OLA2 from "../../../../../public/OLA/OLA2.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const levels = [
    "Pre-School", "KG 1", "KG 2", "KG 3", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5 A", "Grade 5 B",
    "MYP 1 A", "MYP 1 B", "MYP 2 A", "MYP 2 B", "MYP 3 A", "MYP 3 B", "MYP 4 A", "MYP 4 B",
    "MYP 5 A", "MYP 5 B", "DP 1 A", "DP 1 B", "DP 2 A", "DP 2 B"
  ];

export default function OLASection() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
        }}
        className="py-20"
      >
        <div className="container">
          <div className="flex items-center gap-4">
            <Image src={OLA1} alt="OLA" width={632} height={330} />
            <Image src={OLA2} alt="OLA" width={632} height={330} />
          </div>
          <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-5 lg:mt-10 mb-3 lg:mb-6">
            <span className="text-main-primary font-medium">
              PAIS Online Learning Approach (OLA)
            </span>{" "}
            is a dedicated platform designed to enhance students&apos; learning
            experience through structured digital resources. Covering all levels
            from preschool to the diploma program, OLA provides tailored lesson
            plans, study materials, and interactive content to support academic
            growth. Students can easily navigate and select their respective
            classes to access relevant learning resources.
          </p>
          <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-10 mb-5 lg:mb-10">
            To ensure a secure and personalized experience, access to course
            materials is protected. Students must enter their password to unlock
            their class-specific learning content.
          </p>
          <div className="flex flex-wrap gap-4">
            {levels.map((label, index) => <Button key={index} className="font-poppins font-normal text-sm bg-transparent border border-main-secondary shadow-none text-main-primary hover:bg-[#FFE8D1] py-4 px-8 h-11">{label}</Button>)}
          </div>
        </div>
      </div>
    </div>
  );
}
