import bg from "../../../../../../public/students/memberBg.png";
import img1 from "../../../../../../public/students/members/1.jpg";
import img2 from "../../../../../../public/students/members/2.jpg";
import img3 from "../../../../../../public/students/members/3.jpg";
import img4 from "../../../../../../public/students/members/4.jpg";
import img5 from "../../../../../../public/students/members/5.jpg";
import img6 from "../../../../../../public/students/members/6.jpg";
import img7 from "../../../../../../public/students/members/7.jpg";
import CouncilMemberCard from "./CouncilMemberCard";

export const councilMembers = [
  {
    id: 1,
    name: "Laurene Andrea Pinto",
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
    name: "Warut Chaochaicharoenkul ",
    role: "Secretary",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.” -Nelson Mandela",
    image: img3,
  },
  {
    id: 4,
    name: "Hana Khantasit",
    role: "Treasurer",
    quote:
      "Motivation will only get you so far, Discipline is what you need to truly materialize your goals into achievements.",
    image: img4,
  },
  {
    id: 5,
    name: "Phattaranan Hayioumart",
    role: "IT",
    quote:
      "Realizing that you can only control yourself, but not external events, will help you find strength.",
    image: img5,
  },
  {
    id: 6,
    name: "Muna Sentiyanont",
    role: "Activity Coordinator",
    quote:
      "Without commitment you’ll never start but without consistency you’ll never finish.",
    image: img6,
  },
  {
    id: 7,
    name: "Shanawaz Phalanan",
    role: "Auditor",
    quote:
      "“There is a difference between having a dream and having a goal. You fantasize about your dream. A goal is a dream with a deadline.”",
    image: img7,
  },
  // {
  //   id: 8,
  //   name: "Ayisha Zheng Housaylin",
  //   role: "Council’s Advisor",
  //   quote:
  //     "Cultivate a mindset where every setback is an opportunity for growth, every failure a lesson in resilience.",
  //   image: img8,
  // },
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
              Student Council Members 2025–2026
            </h1>
          </div>
        </div>
      </div>
      <div className="pb-28">
        <div className="container">
          <div className="-mt-52">
            <div className="mx-auto flex flex-col items-center gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full gap-10 lg:gap-16">
                {councilMembers.slice(0, 4).map((member) => (
                  <CouncilMemberCard key={member.id} {...member} />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 mt-8 justify-center ">
                {councilMembers.slice(4, 8).map((member) => (
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
