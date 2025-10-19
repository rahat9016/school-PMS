import React from "react";
import img3 from "../../../../../public/academic/img2.png";
import img2 from "../../../../../public/academic/img1.png";
import img1 from "../../../../../public/academic/img3.png";
import AcademicGradeCard from "./AcademicGradeCard";
const gradeData = [
  {
    img: img1,
    title: "Kindergarten - Grade 5",
    points: [
      { point: "Common Core Standards for Math and English" },
      { point: "Next Generation Science Standards (NGSS) for Science" },
      { point: "Massachusetts State Standard for Arts, PE and Social Studies" },
    ],
  },
  {
    img: img2,
    title: "Grade 6 - Grade 10",
    points: [{ point: "IB Middle Years Program (IBMYP)" }],
  },
  {
    img: img3,
    title: "Grade 11 - Grade 12",
    points: [{ point: "IB Diploma Program (IBDP)" }],
  },
];

export default function AcademicGradeSection() {
  return (
    <div className="bg-white pt-16 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">
          {gradeData.map((grade, indx) => (
            <AcademicGradeCard key={indx} {...grade} />
          ))}
        </div>
      </div>
    </div>
  );
}
