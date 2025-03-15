import React from "react";
import bg from "../../../../../../public/students/memberBg.png";
import img1 from "../../../../../../public/students/members/members3.png";
import img2 from "../../../../../../public/students/members/members1.png";
import img3 from "../../../../../../public/students/members/members2.png";
import img4 from "../../../../../../public/students/members/members5.png";
import img5 from "../../../../../../public/students/members/members4.png";
import img6 from "../../../../../../public/students/members/members6.png";
import img7 from "../../../../../../public/students/members/members7.png";
import img8 from "../../../../../../public/students/members/members8.png";
import CouncilMemberCard from "./CouncilMemberCard";

export const councilMembers = [
  {
    id: 1,
    name: "Saleh Ahmed",
    role: "President",
    quote:
      "Without commitment you’ll never start but without consistency you’ll never finish.",
    image: img1,
  },
  {
    id: 2,
    name: "Soroush Salimi",
    role: "Vice President",
    quote: "You can let your dreams be dreams or you could make them reality.",
    image: img2,
  },
  {
    id: 3,
    name: "Sehemi Haque Ohee",
    role: "Secretary",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.” -Nelson Mandela",
    image: img3,
  },
  {
    id: 4,
    name: "Hassan Mashood",
    role: "Activity Coordinator",
    quote:
      "Motivation will only get you so far, Discipline is what you need to truly materialize your goals into achievements.",
    image: img4,
  },
  {
    id: 5,
    name: "Ei Thinn Lae Aung",
    role: "Finance",
    quote:
      "Realizing that you can only control yourself, but not external events, will help you find strength.",
    image: img5,
  },
  {
    id: 6,
    name: "Gavin Gunsantithamrong",
    role: "President",
    quote:
      "Without commitment you’ll never start but without consistency you’ll never finish.",
    image: img6,
  },
  {
    id: 7,
    name: "Faridah Namata Khan",
    role: "Council’s Advisor",
    quote:
      "“There is a difference between having a dream and having a goal. You fantasize about your dream. A goal is a dream with a deadline.”",
    image: img7,
  },
  {
    id: 8,
    name: "Ayisha Zheng Housaylin",
    role: "Council’s Advisor",
    quote:
      "Cultivate a mindset where every setback is an opportunity for growth, every failure a lesson in resilience.",
    image: img8,
  },
];

export default function StudentCouncilMembers() {
  return (
    <div className="bg-white">
      <div
        className="bg-main-primary bg-no-repeat bg-cover bg-center py-10 lg:py-[104px] h-[472px]"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="container">
          <div>
            <h3 className="text-main-secondary font-medium font-poppins text-sm text-center">
              Counselling
            </h3>
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold mt-6">
              Student Council Members 2022–2023
            </h1>
          </div>
        </div>
      </div>
      <div className="pb-28">
        <div className="container">
          <div className="-mt-52">
            <div className="mx-auto flex flex-col items-center gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full  ">
                {councilMembers.slice(0, 5).map((member) => (
                  <CouncilMemberCard key={member.id} {...member} />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-center ">
                {councilMembers.slice(5, 8).map((member) => (
                  <CouncilMemberCard key={member.id} {...member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
