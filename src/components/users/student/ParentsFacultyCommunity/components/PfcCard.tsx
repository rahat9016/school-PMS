import Image from "next/image";

interface IPageProps {
  title: string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

export default function PfcCard({ title, date, image }: IPageProps) {
  return (
    <div className="pfcCard  rounded-md  group flex flex-col gap-y-2 ">
      <div className="relative w-full h-[12rem] rounded-md overflow-hidden   ">
        <Image
          src={image}
          alt="cardImg "
          fill
          className="object-cover object-center"
        />
      </div>

      <p className=" font-semibold  text-black "> {title} </p>

      <p className=" text-black-dark "> {date} </p>
    </div>
  );
}
