import React from "react";
import shapeBg from "../../../../../../public/academic/SchoolLunchShape.png";
import Carousel from "@/components/shared/Carousel";
import img1 from "../../../../../../public/academic/SchoolLunchImg1.jpg";
import img2 from "../../../../../../public/academic/SchoolLunchImg2.jpg";
import shape2 from "../../../../../../public/Facilities/shape2.png";
export default function LunchSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${shapeBg.src})`,
        }}
        className="bg-main-primary py-10 lg:py-20 bg-no-repeat bg-contain bg-center"
      >
        <div className="w-full lg:w-1/2 mx-auto px-4 lg:px-0">
            <p className="text-white font-poppins font-medium text-lg">PAIS presents our monthly menu with dishes that are varied for everyone to savor, taste and eat according to ones preferences, and choices. It is open for improvement as we try to cater as much as we can to provide meals that is hearty, healthy, balanced and that everyone can enjoy.</p>
            <div
            className="w-full lg:w-[80%] mx-auto p-4 object-contain bg-contain bg-no-repeat mt-10"
            style={{
              backgroundImage: `url(${shape2.src})`,
            }}
          >
            <Carousel slides={[img1, img2]} className="rounded-3xl overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
