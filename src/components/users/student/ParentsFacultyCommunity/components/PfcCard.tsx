import Image, { StaticImageData } from "next/image";

interface IPageProps {
  title: string;
  date: string;
  image: StaticImageData;
}

export default function PfcCard({ title, date, image }: IPageProps) {
  return (
    <div className="pfcCard  rounded-md  group flex flex-col">
      <div className="relative w-full h-[12rem] rounded-md overflow-hidden">
        <Image
          src={image}
          alt="cardImg "
          width={308}
          height={227}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <p className=" text-charcoalGray font-medium font-poppins text-lg mt-2"> {title} </p>
      <p className=" text-black-dark font-normal font-poppins text-sm mt-2"> {date} </p>
    </div>
  );
}
