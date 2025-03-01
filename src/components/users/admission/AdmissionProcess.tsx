"use client";
import { useEffect } from "react";
import bg from "../../../../public/admission/shape.png";
import KeyPoints from "@/components/shared/KeyPoints";
const steps = [
  {
    title: "STEP 1: Apply to Join the PAIS Community",
    description:
      "All students seeking to enroll at Pan-Asia International School must submit the Student Application Form. This can be done in one of two ways:",
    skills: [
      "Reading Fluency (English)",
      "Reading Comprehension (English)",
      "Vocabulary Development (English)",
      "Speaking and Listening Skills (English)",
      "Writing (English)",
    ],
  },
  {
    title: "STEP 2: Schedule a Time for Testing (MAP Testing)",
    description:
      "All students from Kindergarten to Grade 12 must complete an admissions test in order to be accepted into Pan-Asia International School. Students seeking to join Kindergarten 1 to Kindergarten 3 must complete a half day trial in the appropriate Grade level paired with a short questionnaire for parents. Students from Grade 1 to Grade 5 must complete a paper test evaluating their basic academic skills and Students from Grade 6 to Grade 12 must complete the following:",
    skills: [
      "Reading Fluency (English)",
      "Reading Comprehension (English)",
      "Vocabulary Development (English)",
      "Speaking and Listening Skills (English)",
      "Writing (English)",
    ],
  },  
];

export default function AdmissionProcess() {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bg-[#F2FBFD] bg-no-repeat bg-contain bg-center lg:pt-10 pb-10 lg:pb-[140px]"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <div className="relative flex flex-col items-center p-0 lg:p-8 h-[886px] overflow-y-scroll scrollbar-hide">
          <div className="hidden lg:block absolute left-1/2 w-[2px] bg-softGray h-full transform -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex w-full ${steps.length - 1 !== index ? "mb-5 lg:mb-10":""} ${
                index % 2 === 0 ? "justify-start lg:justify-start lg:mr-8" : "justify-start lg:justify-end lg:ml-8"
              }`}
            >
              <div className="w-full lg:w-1/2 p-6 rounded-lg shadow-lg bg-[#FFE8D1] border border-main-secondary relative">
                <h2 className="text-lg font-medium font-poppins text-charcoalGray">{step.title}</h2>
                <p className="text-base text-charcoalGray font-poppins font-normal mt-6 mb-4">{step.description}</p>
                <KeyPoints points={step.skills}/>
                <div
                  className={`hidden lg:block absolute top-[15%] ${
                    index % 2 === 0 ? "lg:right-[-32px]" : "lg:-left-[18px]"
                  } w-4 h-4 bg-main-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2"`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
