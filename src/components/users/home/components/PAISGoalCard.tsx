import Image, { StaticImageData } from "next/image";

interface IPAISGoalCardProps {
  title: string;
  icon: StaticImageData;
  count: number | string;
  percentage?: boolean;
}

export default function PAISGoalCard({
  title,
  icon,
  count,
  percentage,
}: IPAISGoalCardProps) {
  return (
    <div className="flex items-center gap-19px">
      <div className="bg-[#fbc692] w-[82px] h-[84px] p-[10px] rounded-xl">
        <Image src={icon} alt="Icon" />
      </div>
      <div>
        <h1 className="text-white font-poppins font-semibold text-[36px] mb-2 leading-none">
          {count}
          {percentage && "%"}
        </h1>
        <p className="text-base text-main-primary font-poppins font-normal">{title}</p>
      </div>
    </div>
  );
}
