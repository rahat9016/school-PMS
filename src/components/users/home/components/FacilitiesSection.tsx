import TitleTag from "@/components/shared/TitleTag";
import { facilitiesData } from "@/lib/data/data";
import bg from "../../../../../public/Facilities/bg.png";
import FacilitieCard from "./FacilitieCard";

export default function FacilitiesSection() {
  return (
    <div
      className="bg-main-primary py-12 lg:py-16 xl:py-32 bg-no-repeat bg-left-bottom bg-contain"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <TitleTag title="Facilities" />
        <h1 className="text-forestWhite font-poppins font-semibold text-2xl lg:text-5xl lg:w-8/12 xl:w-5/12 mb-10 xl:mb-[90px] mt-6">
          Welcome to Pan-Asia International School
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {facilitiesData.map((fact, idx) => {
            return <FacilitieCard key={idx} {...fact} />;
          })}
        </div>
      </div>
    </div>
  );
}
