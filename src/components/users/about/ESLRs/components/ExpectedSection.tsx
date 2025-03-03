import React from "react";
import shape from "../../../../../../public/ESLRs/shape.png";
import img from "../../../../../../public/ESLRs/img1.png";
import img2 from "../../../../../../public/ESLRs/img01.png";
import img3 from "../../../../../../public/ESLRs/img02.png";
import img4 from "../../../../../../public/ESLRs/img03.png";
import img5 from "../../../../../../public/ESLRs/img04.png";
import ExpectedCard from "./ExpectedCard";
const expectedData = [
  {
    title: "1. ACADEMIC ACHIEVERS",
    description:
      "PAIS students will be independent, self-motivated and active lifelong learners set and pursue high academic goals think logically, critically, reflectively and creatively be self directed, motivated and resourceful apply knowledge confidently and effectively produce quality work be proficient in the use of IT.",
    img: img,
  },
  {
    title: "2. PERSONALLY AND SOCIALLY WELL-BALANCED",
    description:
      "PAIS students will be informed, responsible citizens who express ideas freely, collaborate effectively, respect diversity, manage conflicts constructively, care for the environment, help others, and uphold strong moral values with a positive self-image.",
    img: img3,
  },
  {
    title: "3. EFFECTIVE COMMUNICATORS",
    description:
      "PAIS students will value and understand the importance of effective communication read a variety of printed materials to gain knowledge, for research and pleasure write in a variety of genres for different purposes and audiences create and deliver effective oral presentations understand, analyze and appreciate what is read, viewed or heard.",
    img: img4,
  },
  {
    title: "4. ARTISTICALLY AWARE AND INVOLVED",
    description:
      "PAIS students will be aware of fine and performing arts and famous artists understand the role of art in the world have a positive attitude towards the arts be capable of self-expression using the arts be able to produce original work of high quality.",
    img: img2,
  },
  {
    title: "5. PHYSICALLY FIT",
    description:
      "PAIS students will know the importance of good health in their lives understand the concept of health, nutrition and hygiene participate in sports activities enthusiastically demonstrate sportsmanship while participating in sports Understand the dangers of the use and abuse of drugs, tobacco and alcohol.",
    img: img5,
  },
];
export default function ExpectedSection() {
  return (
    <div
      className="py-10 md:py-20 lg:py-[126px] bg-main-primary bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${shape.src})`,
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20 lg:gap-[140px]">
        {expectedData.map((expected, index) => (
          <ExpectedCard key={index} {...expected} isReverse={index % 2 !== 0 ? true : false}/>
        ))}
        </div>
      </div>
    </div>
  );
}
