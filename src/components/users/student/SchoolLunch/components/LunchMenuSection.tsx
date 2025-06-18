import Carousel from "@/components/shared/Carousel";
import React from "react";
import img1 from "../../../../../../public/academic/LUNCHMENU1.jpg";
import img2 from "../../../../../../public/academic/LUNCHMENU2.jpg";
import img3 from "../../../../../../public/academic/LUNCHMENU3.jpg";
import img4 from "../../../../../../public/academic/LUNCHMENU4.jpg";
import img5 from "../../../../../../public/academic/LUNCHMENU5.jpg";
import img6 from "../../../../../../public/academic/LUNCHMENU6.jpg";
export default function LunchMenuSection() {
  return (
    <div className="bg-[#FFE8D1] py-10">
      <div className="container">
        <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-main-primary uppercase">
          PRESCHOOL AND KINDERGARTEN LUNCH MENU
        </h1>
        <span className="block bg-main-secondary h-[3px] w-[147px] mt-3"></span>
        <div className="h-auto xl:h-[762px] flex mt-10">
          <Carousel slides={[img1, img2, img3, img4, img5, img6]} />
        </div>
      </div>
    </div>
  );
}
