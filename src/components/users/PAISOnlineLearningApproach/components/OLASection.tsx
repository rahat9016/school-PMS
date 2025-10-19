import React from "react";
import OLA1 from "../../../../../public/OLA/OLA1.jpg";
import OLA2 from "../../../../../public/OLA/OLA2.jpg";
import Image from "next/image";
import Link from "next/link";
export interface ILevel {
  title: string;
  link: string;
  tag: string;
  id: number;
  date: string;
}

export const levels: ILevel[] = [
  { title: "Protected: Online Learning Approach", tag: "Pre-School", link: "/pre-school", id: 1, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "KG 1", link: "/kg-1", id: 2, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "KG 2", link: "/kg-2", id: 12, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "KG 3", link: "/kg-3", id: 13, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "Grade 1", link: "/grade-1", id: 14, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "Grade 3", link: "/grade-3", id: 16, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "Grade 4", link: "/grade-4", id: 17, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "Grade 5 A", link: "/grade-5-a", id: 18, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "Grade 5 B", link: "/grade-5-b", id: 19, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 1 A", link: "/myp-1-a", id: 122, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 1 B", link: "/myp-1-b", id: 123, date:"June 13, 2024"},
  { title: "Protected: Online Learning Approach", tag: "MYP 2 A", link: "/myp-2-a", id: 1345, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 2 B", link: "/myp-2-b", id: 134, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 3 A", link: "/myp-3-a", id: 14534, date:"June 13, 2024"},
  { title: "Protected: Online Learning Approach", tag: "MYP 3 B", link: "/myp-3-b", id: 1098, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 4 A", link: "/myp-4-a", id: 178, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 4 B", link: "/myp-4-b", id: 167, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 5 A", link: "/myp-5-a", id: 156, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "MYP 5 B", link: "/myp-5-b", id: 15675, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "DP 1 A", link: "/dp-1-a", id: 1567, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "DP 1 B", link: "/dp-1-b", id: 1567, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "DP 2 A", link: "/dp-2-a", id: 156744, date:"June 13, 2024" },
  { title: "Protected: Online Learning Approach", tag: "DP 2 B", link: "/dp-2-b", id: 1566, date:"June 13, 2024" },
];

export default function OLASection() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
        }}
        className="py-10 lg:py-20"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Image src={OLA1} alt="OLA" width={632} height={330} />
            <Image src={OLA2} alt="OLA" width={632} height={330} />
          </div>
          <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-5 lg:mt-10 mb-3 lg:mb-6">
            <span className="text-main-primary font-medium">
              PAIS Online Learning Approach (OLA)
            </span>{" "}
            is a dedicated platform designed to enhance students&apos; learning
            experience through structured digital resources. Covering all levels
            from preschool to the diploma program, OLA provides tailored lesson
            plans, study materials, and interactive content to support academic
            growth. Students can easily navigate and select their respective
            classes to access relevant learning resources.
          </p>
          <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-4 lg:mt-10 mb-5 lg:mb-10">
            To ensure a secure and personalized experience, access to course
            materials is protected. Students must enter their password to unlock
            their class-specific learning content.
          </p>
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {levels.map((label, index) => (
              <Link
                href={`/pais-online-learning-approach/${label.id}`}
                key={index}
                className="font-poppins font-normal text-sm bg-transparent border border-main-secondary shadow-none text-main-primary hover:bg-[#FFE8D1] py-2 lg:py-4 px-4 lg:px-8 h-11 flex items-center rounded-lg"
              >
                {label.tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
