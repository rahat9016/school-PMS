import Image from "next/image";
import React from "react";
import sportsImg1 from "../../../../../../public/students/sports/sportsImg1.png";
import img1 from "../../../../../../public/students/sports/img1.jpg";
import img2 from "../../../../../../public/students/sports/img2.jpg";
import img3 from "../../../../../../public/students/sports/img3.jpg";
const list = [
  "New Primary Futsal Court",
  "2 Covered Courts for Basketball or Volleyball",
  "2 Grassed Football Pitches",
  "An Open Court for Basketball, Volleyball of Futsal",
  "A Half Olympic Size Swimming Pool",
  "A Swimming Pool for Kindergarten",
];
export default function SportGallerySection() {
  return (
    <div className="bg-white py-10 lg:pt-[104px] lg:pb-[140px]">
      <div className="container">
        <div className="relative w-full ">
          <div className="group relative  rounded-lg">
            <Image src={sportsImg1} alt="Football" className="w-full h-auto" />
          </div>
        </div>
        <div className="relative w-full mt-8">
          <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <Image src={img1} alt="Football" className="w-full h-auto" width={630} height={459} />
            <div className="bg-aliceBlue p-7 lg:px-[64px] py-7 lg:py-14 rounded-xl">
              <h1 className="text-xl lg:text-4xl text-black font-poppins font-semibold">
                Sports Facility
              </h1>
              <span className="block h-[3px] bg-main-secondary w-[47px] my-4 lg:my-8"></span>
              <p className="text-sm lg:text-base font-poppins text-darkGray font-light leading-[28px]">
                The PAIS sports facilities provide students places to keep their
                bodies, not just their minds, in shape.
              </p>
              <ul className="list-disc mt-5 lg:mt-10">
                {list.map((value, index) => (
                  <li
                    key={index}
                    className="text-sm lg:text-base font-poppins text-darkGray font-light"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:flex-row mt-4 lg:mt-8 gap-4 lg:gap-8">
        <Image src={img3} alt="Football" className="w-full lg:w-4/12 h-auto max-h-[270px]" width={443} height={270} />
        <Image src={img2} alt="Football" className="w-full lg:w-7/12 h-auto" width={817} height={270}  />
        </div>
      </div>
    </div>
  );
}
