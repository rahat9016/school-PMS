import Image, { StaticImageData } from "next/image";
import rectangle from "../../../../../../public/ESLRs/rectangle.png";
export default function ExpectedCard({
  title,
  description,
  img,
  img2,
  isReverse,
}: {
  title: string;
  description: string;
  img: StaticImageData;
  isReverse: boolean;
  img2?: StaticImageData;
}) {
  return (
    <div
      className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-28`}
    >
      <div className="w-full lg:w-1/2">
        <h2 className="text-white font-poppins font-medium text-xl lg:text-[30px] mb-5 lg:mb-10">
          {title}
        </h2>
        <p className="text-white font-poppins font-light text-sm lg:text-base">
          {description}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex items-center">
        <Image
          width={262}
          height={272}
          src={img}
          alt="expected"
          className="ml-auto rounded-md max-h-[310px] object-cover"
        />
        <div
          style={{
            backgroundImage: `url(${rectangle.src})`,
          }}
          className="bg-no-repeat bg-contain bg-center w-[215px] h-[180px] flex items-center "
        >
          {img2 && (
            <Image
              width={200}
              height={212}
              src={img2}
              alt="expected"
              className="rounded-md ml-3"
            />
          )}
        </div>
      </div>
    </div>
  );
}
