import React from "react";
import MissionVisionCard from "./MissionVisionCard";
import mv from "../../../../../public/about/mv.png";
import Image from "next/image";
const missionVisionData = [
  {
    title: "Mission",
    description:
      "The mission of PAIS is to provide its student with the best elements of Western education within an Eastern cultural environment through cooperation among students, parents, educators and the community.",
  },
  {
    title: "Vision",
    description:
      "The vision of Pan-Asia International School is to present its students with an opportunity to excel both academically and morally and to become responsible balanced future citizens of the global community.",
  },
  {
    title: "Philosophy",
    description:
      "The vision of Pan-Asia International School is to present its students with an opportunity to excel both academically and morally and to become responsible balanced future citizens of the global community.",
  },
];
export default function MissionVisionSection() {
  return (
    <div className="bg-[#F2FBFD] py-20 gap-10 xl:py-[167px]">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-[106px]">
          <div className="flex flex-col gap-8 xl:gap-[64px]">
            {missionVisionData.map((msn, indx) => (
              <MissionVisionCard key={indx} {...msn} />
            ))}
          </div>
          <div>
            <Image src={mv} alt="comaLeft" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
