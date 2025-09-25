import Image, { StaticImageData } from "next/image";

export default function AccreditationMembershipCard({
  title,
  img,
}: {
  title: string;
  img?: StaticImageData;
}) {
  return (
    <div className="bg-forestWhite p-6 lg:pt-10 lg:px-[60px] lg:pb-[72px] rounded-xl hover:border border-main-secondary hover:shadow-md hover:-translate-y-5 duration-500 flex flex-col items-center justify-center">
      <div className="h-[132px] mb-3 lg:mb-10 flex items-center justify-center">
        {img &&<Image
          src={img.src}
          alt="AcademicGrade"
          width={120}
          height={73}
          className="w-1/2 h-auto   mx-auto"
        />}
      </div>
      <h1 className="font-poppins text-base lg:text-lg text-center text-charcoalGray font-medium">
        {title}
      </h1>
    </div>
  );
}
