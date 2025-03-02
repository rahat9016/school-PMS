import HeroSection from "@/components/shared/HeroSection";
import React from "react";
import herobg from "../../../../../public/Facilities/heroImg.jpeg";
import facaltiesSliderImg1 from "../../../../../public/Facilities/facaltiesSliderImg1.jpg";
import facaltiesSliderImg2 from "../../../../../public/Facilities/facaltiesSliderImg2.jpg";
import facaltiesSliderImg3 from "../../../../../public/Facilities/facaltiesSliderImg3.jpg";

import FacilitiesLayout from "./components/FacilitiesLayout";
const data ={
    slides: [facaltiesSliderImg1, facaltiesSliderImg2, facaltiesSliderImg3],
    title:"Library",
    description: "PAIS has a rapidly growing library with books in English, Thai and other languages and has been recently renovated to accommodate all our books. Students are provided with a wide variety of fiction and nonfiction books in our library in addition to periodicals such as magazines, newspapers and computer resources."
}
export default function FacilitiesSafety() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Facilities"
        className="bg-cover h-[280px]"
      />
      <FacilitiesLayout data={data}/>
    </div>
  );
}
