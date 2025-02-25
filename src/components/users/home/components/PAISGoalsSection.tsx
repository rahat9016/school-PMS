import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/goals/icon.png";
import icon1 from "../../../../../public/goals/icon4.png";
import icon2 from "../../../../../public/goals/icon1.png";
import icon3 from "../../../../../public/goals/icon2.png";
import icon4 from "../../../../../public/goals/icon3.png";
import PAISGoalCard from "./PAISGoalCard";
const paisdata = [
  {
    title: "Certified Teachers",
    icon: icon1,
    count: 10,
  },
  {
    title: "Students Enrolled",
    icon: icon2,
    count: 512,
  },
  {
    title: "Passing to Universities",
    icon: icon3,
    count: 20,
    percentage:true
  },
  {
    title: "Satisfied Parents",
    icon: icon4,
    count: 10,
    percentage:true  },
];

export default function PAISGoalsSection() {
  return (
    <div className="bg-main-secondary pt-[94px] pb-[104px]">
      <div className="container">
        <Image
          src={Logo}
          alt="PAIS Goals"
          width={320}
          height={96}
          className="mx-auto"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {paisdata.map((pais, indx) => <PAISGoalCard key={indx} {...pais}/>)}
        </div>
      </div>
    </div>
  );
}
