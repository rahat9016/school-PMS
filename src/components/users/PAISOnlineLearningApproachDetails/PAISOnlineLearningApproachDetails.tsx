"use client";
import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import { useParams } from "next/navigation";
import herobg from "../../../../public/OLA/pupils-sitting-computer-science-lesson.jpg";
import { levels } from "../PAISOnlineLearningApproach/components/OLASection";
import ApproachSection from "./components/ApproachSection";
import Recent from "./components/Recent";

export default function PAISOnlineLearningApproachDetails() {
  const { id } = useParams();
  console.log(id);
  const lavel = levels.find((item) => item.id === Number(id));
  return (
    <div className="bg-white">
      <HeroSection
        img={herobg}
        title={`${lavel?.title} - ${lavel?.tag}`}
        className="bg-cover h-[280px]"
      />
      <div className="container flex flex-col items-start gap-4">
        <div className="w-full lg:w-[70%]">
          <ApproachSection post={lavel} />
        </div>
        <div className="w-full lg:w-[30%]">
          <Recent />
        </div>
      </div>
    </div>
  );
}
