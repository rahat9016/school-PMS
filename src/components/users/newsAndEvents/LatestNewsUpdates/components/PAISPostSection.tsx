import React from "react";
import paisPost1 from "../../../../../../public/newsEvents/paispost/paisPost1.png";
import paisPost2 from "../../../../../../public/newsEvents/paispost/paisPost2.png";
import paisPost3 from "../../../../../../public/newsEvents/paispost/paisPost3.png";
import paisPost4 from "../../../../../../public/newsEvents/paispost/paisPost4.png";
import paisPost5 from "../../../../../../public/newsEvents/paispost/paisPost5.png";
import paisPost6 from "../../../../../../public/newsEvents/paispost/paisPost6.png";
import paisPost7 from "../../../../../../public/newsEvents/paispost/paisPost7.png";
import paisPost8 from "../../../../../../public/newsEvents/paispost/paisPost8.png";
import Image from "next/image";

const PAISData = [
  paisPost1,
  paisPost2,
  paisPost3,
  paisPost4,
  paisPost5,
  paisPost6,
  paisPost7,
  paisPost8,
];
export default function PAISPostSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
      }}
      className="py-10"
    >
      <div className="container">
        <h1 className="text-main-primary font-semibold text-[30px] font-poppins text-center">
          PAIS<span className="text-main-secondary">Post</span>
        </h1>
        <p className="text-black-dark font-normal text-sm lg:text-lg font-poppins mt-4 mb-5 lg:mb-10 text-center">
          The Official Newsletter of Pan-Asia International School
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {PAISData.map((img, index) => (
            <Image key={index} src={img} alt={"PAISPost"} />
          ))}
        </div>
      </div>
    </div>
  );
}
