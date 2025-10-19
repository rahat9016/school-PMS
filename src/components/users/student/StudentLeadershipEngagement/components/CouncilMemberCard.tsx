import Image, { StaticImageData } from "next/image";

const CouncilMemberCard = ({
  image,
  name,
  role,
  quote,
}: {
  image: StaticImageData;
  name: string;
  role: string;
  quote: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full xl:w-[243px]">
      <div className="relative w-full h-[269px]">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="bg-blue-700 bg-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-base font-poppins text-black">{name}</h3>
        <p className="text-sm text-mediumGray font-medium font-poppins">{role}</p>
        <span className="block bg-main-secondary h-[3px] w-[36px] my-4 mx-auto"></span>
        <p className="text-darkGray mt-4 text-sm font-poppins font-normal"><q>{quote}</q></p>
      </div>
    </div>
  );
};

export default CouncilMemberCard;
