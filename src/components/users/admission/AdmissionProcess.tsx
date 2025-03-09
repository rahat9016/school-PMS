"use client";
import { useEffect } from "react";
import bg from "../../../../public/admission/shape.png";
import KeyPoints from "@/components/shared/KeyPoints";
import { Button } from "@/components/ui/button";
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
  {
    title: "STEP 3: Submit Official Documents",
    description:
      "If the applicant has successfully completed the admissions tests and has been accepted into Pan-Asia International School, the following documents must be prepared and submitted to the school.",
    skills2: [
      {
        title: "Thai Students",
        skills: [
          "Previous school report",
          "A copy of residence certificate",
          "Good moral certificate or Behavior report",
          "A copy of birth certificate",
          "A medical report",
          "2 color photos (2″)",
          "House map",
        ],
      },
      {
        title: "and for parents:",
        skills: [
          "A copy of each parent’s residence certificate & ID card",
          "2 color photos (2″) of each parent or guardian",
        ],
      },
      {
        title: "Foreign Students",
        skills: [
          "Previous school report",
          "Good moral certificate or Behavior report",
          "A copy of passport and visa",
          "A medical report",
          "2 color photos (2″)",
          "House map",
        ],
      },
      {
        title: "and for parents:",
        skills: [
          "A copy of passport and visa",
          "2 color photos (2″) of each parent or guardian",
        ],
      },
    ],
  },
  {
    title: "STEP 4: Pay School Fees",
    description:
      "Before the student can register and receive class information and schedules, all required fees must be paid for in full for the semester.",
    skills: [
      "Enrollment fee",
      "Tuition fees",
      "Uniform fee",
    ],
  },
  {
    title: "STEP 5: Register for Classes",
    description:
      "Once confirmation of payment has been received, the student will be eligible to register for classes and/or receive a class schedule. Books, standard supplies and the Student & Parent Handbook will also be issued at that time.",
    skills: [
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
          <div className="hidden lg:block absolute left-1/2 w-[2px] bg-softGray h-[2600px] transform -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex w-full ${
                steps.length - 1 !== index ? "mb-5 lg:mb-10" : ""
              } ${
                index % 2 === 0
                  ? "justify-start lg:justify-start lg:mr-8"
                  : "justify-start lg:justify-end lg:ml-8"
              }`}
            >
              <div className="w-full lg:w-1/2 p-6 rounded-lg shadow-lg bg-[#FFE8D1] border border-main-secondary relative">
                <h2 className="text-lg font-medium font-poppins text-charcoalGray">
                  {step.title}
                </h2>
                <p className="text-base text-charcoalGray font-poppins font-normal mt-6 mb-4">
                  {step.description}
                </p>
                <KeyPoints points={step?.skills} />
                <div className="flex flex-col gap-6">
                  {step?.skills2 &&
                    step?.skills2.map((skill, index) => {
                      return (
                        <div key={index}>
                          <h3 className="text-main-primary font-medium text-base font-poppins mb-4">
                            {skill.title}
                          </h3>
                          <KeyPoints points={skill?.skills} />
                        </div>
                      );
                    })}
                </div>
                <div
                  className={`hidden lg:block absolute top-[15%] ${
                    index % 2 === 0 ? "lg:right-[-32px]" : "lg:-left-[18px]"
                  } w-4 h-4 bg-main-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2"`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-main-secondary rounded-full px-8 py-3 pt-4 h-[52px]  font-poppins font-medium text-base hover:bg-main-secondary scale-100 hover:scale-90 transform transition hover:duration-500">Online Enroll Now</Button>
        </div>
      </div>
    </div>
  );
}
