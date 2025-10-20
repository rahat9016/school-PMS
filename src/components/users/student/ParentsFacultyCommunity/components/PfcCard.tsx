import Image from "next/image";

import pfcCardImg from "../../../../../../public/pfc_event/pfcCardImg.png";

export default function PfcCard() {
  return (
    <div className="pfcCard  rounded-md  group flex flex-col gap-y-3 ">
      <div className="relative w-full h-[12rem] rounded-md overflow-hidden   ">
        <Image
          src={pfcCardImg}
          alt="cardImg "
          fill
          className="object-cover object-center"
        />
      </div>

      <p className=" font-semibold  text-black ">Positive Parenting Class </p>

      <p className=" text-black-dark ">February 17, 2024</p>
    </div>
  );
}
