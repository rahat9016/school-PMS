import React from "react";
import Image from "next/image";
import tickmark from "../../../public/academic/tickmark.png";

export default function KeyPoints({ points }: { points: string[] | undefined}) {
  return (
    <ul className="flex flex-col gap-[10px]">
      {points?.map((value, index) => (
        <li
          key={index}
          className="flex items-center gap-2 font-poppins font-normal text-sm lg:text-base"
        >
          <Image src={tickmark} alt="tickmark" width={20} height={20} />
          {value}
        </li>
      ))}
    </ul>
  );
}
