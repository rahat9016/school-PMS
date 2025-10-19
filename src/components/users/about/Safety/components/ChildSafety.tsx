import Image from "next/image";

import SaftyImg from "../../../../../../public/Facilities/sdcChart.jpg";
export default function ChildSafety() {
  return (
    <div className="py-20 lg:py-[140px] bg-white">
      <div className="container">
        <p className="font-medium text-sm font-poppins text-main-secondary text-center">Safety</p>
        <h1
          className={`text-black font-poppins font-semibold text-2xl mt-4 lg:text-5xl text-center`}
        >
          Child Safety
        </h1>
        <Image src={SaftyImg} alt="SaftyImg" className="mx-auto mt-14" />
      </div>
    </div>
  );
}
