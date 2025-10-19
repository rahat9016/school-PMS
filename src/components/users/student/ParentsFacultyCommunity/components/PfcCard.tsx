import Image from "next/image";

export default function PfcCard() {
  return (
    <div className="pfcCard  rounded-md  group flex flex-col gap-y-3 ">
      <div className="relative w-full h-[12rem] rounded-md overflow-hidden   ">
        <Image
          //   src={"/public/pfc_event/pfcCardImg.png"}
          src={
            "https://i.postimg.cc/tCy4ys25/918f5aa29127fa42546e3c42c336ef75da59bb89.png"
          }
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
