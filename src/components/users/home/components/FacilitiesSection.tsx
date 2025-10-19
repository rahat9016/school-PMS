import React from "react";
import img1 from "../../../../../public/Facilities/img1.jpg";
import img2 from "../../../../../public/Facilities/img2.jpg";
import img3 from "../../../../../public/Facilities/img3.jpg";
import img4 from "../../../../../public/Facilities/img4.jpg";
import img5 from "../../../../../public/Facilities/img5.jpg";
import img6 from "../../../../../public/Facilities/img6.jpg";
import icon3 from "../../../../../public/Facilities/icon3.png";
import icon2 from "../../../../../public/Facilities/icon2.png";
import icon1 from "../../../../../public/Facilities/icon1.png";
import icon4 from "../../../../../public/Facilities/icon4.png";
import icon5 from "../../../../../public/Facilities/icon5.png";
import icon6 from "../../../../../public/Facilities/icon6.png";
import bg from "../../../../../public/Facilities/bg.png";
import FacilitieCard from "./FacilitieCard";
import TitleTag from "@/components/shared/TitleTag";

const facilitiesData = [
  {
    img: img1,
    icon: icon3,
    title: "Pre-School Kindergarten",
    description: "Discover one of the best Kindergarten schools in Bangkok.",
    href: "/kindergarten-primary",
  },
  {
    img: img2,
    icon: icon2,
    title: "Primary",
    description:
      "Pan-Asia's Primary Department embraces each student's unique strengths and needs.",
    href: "/kindergarten-primary",
  },
  {
    img: img3,
    icon: icon1,
    title: "IB Middle Years Program (MYP)",
    description:
      "The Middle Years Program (IB) at Pan-Asia International School (Grades 6-8)",
    href: "/secondary-ib-programs",
  },
  {
    img: img4,
    icon: icon4,
    title: "IB Diploma Program (DP)",
    description:
      "Pan-Asia International School is proud to offer the IB Diploma Programme (IBDP).",
    href: "/secondary-ib-programs",
  },
  {
    img: img5,
    icon: icon5,
    title: "Facilities",
    description:
      "Pan-Asia International School ensures a secure, modern learning environment.",
    href: "/facilities-safety",
  },
  {
    img: img6,
    icon: icon6,
    title: "Online Learning Approach",
    description:
      "Pan-Asia equips educators to deliver quality online learning with modern tools.",
    href: "/",
  },
];

export default function FacilitiesSection() {
  return (
    <div
      className="bg-main-primary py-12 lg:py-16 xl:py-32 bg-no-repeat bg-left-bottom bg-contain"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <TitleTag title="Facilities" />
        <h1 className="text-forestWhite font-poppins font-semibold text-2xl lg:text-5xl lg:w-8/12 xl:w-5/12 mb-10 xl:mb-[90px] mt-6">
          Welcome to Pan-Asia International School
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {facilitiesData.map((fact, idx) => {
            return <FacilitieCard key={idx} {...fact} />;
          })}
        </div>
      </div>
    </div>
  );
}
