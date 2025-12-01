import Image from "next/image";
import Logo from "../../../../../public/goals/goals.png";
import icon2 from "../../../../../public/goals/icon1.png";
import icon3 from "../../../../../public/goals/icon2.png";
import icon4 from "../../../../../public/goals/icon3.png";
import icon1 from "../../../../../public/goals/icon4.png";
import PAISGoalCard from "./PAISGoalCard";
const paisdata = [
  {
    title: "Certified Teachers",
    icon: icon1,
    count: 100,
  },
  {
    title: "Students Enrolled",
    icon: icon2,
    count: 700,
  },
  {
    title: "University Placements",
    icon: icon3,
    count: 100,
    percentage:true
  },
  {
    title: "Nationalities",
    icon: icon4,
    count: "32+",  },
];

export default function PAISGoalsSection() {
  return (
    <div className="bg-main-secondary pt-[94px] pb-[104px]">
      <div className="container">
          
        <Image
          src={Logo}
          alt="PAIS Goals"
          width={320}
          height={96}
          className="mx-auto"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {paisdata.map((pais, indx) => <PAISGoalCard key={indx} {...pais}/>)}
        </div>
      </div>
    </div>
  );
}
