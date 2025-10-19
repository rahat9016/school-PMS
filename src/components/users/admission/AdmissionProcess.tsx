"use client";
import KeyPoints from "@/components/shared/KeyPoints";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import bg from "../../../../public/admission/shape.png";
const steps = [
  {
    title: "STEP 1:Apply to Join PAIS",
    description:
      "Submit a completed Student Application Form on campus or online.",
    skills: [
      "Reading Fluency (English)",
      "Reading Comprehension (English)",
      "Vocabulary Development (English)",
      "Speaking and Listening Skills (English)",
      "Writing (English)",
    ],
  },
  {
    title: "STEP 2: Assessment & Interview",
    description:
      "As part of the admission process, your child will be scheduled for an interview with the Section Coordinator and the Student Development Center. This helps us assess their English proficiency and get to know them better",
    cases: {
      title: "In some cases, students may also be asked to",
      case: [
        "Attend a 3-day trial class for observation by the coordinator.",
        "Complete a MAP Test if requested by the coordinator.",
      ],
    },
    skills: [
      "Reading Fluency (English)",
      "Reading Comprehension (English)",
      "Vocabulary Development (English)",
      "Speaking and Listening Skills (English)",
      "Writing (English)",
    ],
  },
  {
    title: "STEP 3: Submit Documents",
    description:
      "The following documents must be prepared and submitted to the school.",
    skills2: [
      {
        title: "Student Documents:",
        skills: [
          "Previous Report Card or Transcript",
          "Good Moral Certificate or Behavior Report",
          "Medical Certificate",
          "1 Passport ID Photo of Student",
          "1 Passport ID Photo of Parents",
        ],
      },
      {
        title: "For Thai Nationals:",
        skills: [
          "Copy of Student’s Birth Certificate",
          "Copy of Student’s House Registration",
          "Copy of Parent’s ID Card",
          "Copy of Parent’s House Registration",
        ],
      },
      {
        title: "For Foreign Nationals:",
        skills: [
          "Copy of Student’s Passport & Visa",
          "Copy of Parent’s Passport & Visa ",
        ],
      },
    ],
  },
  {
    title: "STEP 4: Visa Assistance (if needed)",
    description:
      "Meet with the Visa Officer if you require help with visa processing.",
    skills: [],
  },
  {
    title: "STEP 5: Health Check (if needed)",
    description:
      "Meet with the School Nurse if your child has special medical needs.",
    skills: [],
  },
  {
    title: "STEP 6: Request School Transportation (if needed)",
    description:
      "Submit a transportation form. If a route is available, fees are added to the semester, and bus details are confirmed with parents.",
    skills: [],
  },
  {
    title: "STEP 7: Pay the School Fees",
    description:
      "Complete payment of all required fees at the Finance Office to register your child",
    skills: [],
  },
  {
    title: "STEP 8: Purchase School Uniform",
    description:
      "Buy the official school uniform and sports jersey with guidance from the Admissions Officer.",
    skills: [],
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
                {step.cases && (
                  <div>
                    <p className="text-base text-charcoalGray font-poppins font-normal mt-6 mb-2">
                      {step.cases.title}
                    </p>
                    <div className="pl-5 mb-5">
                      <KeyPoints points={step?.cases.case} />
                    </div>
                  </div>
                )}
                {/* <KeyPoints points={step?.skills} /> */}
                <div className="flex flex-col gap-6">
                  {step?.skills2 &&
                    step?.skills2.map((skill, index) => {
                      return (
                        <div key={index}>
                          <h3 className="text-main-primary font-medium text-base font-poppins mb-4">
                            {skill.title}
                          </h3>
                          {/* <KeyPoints points={skill?.skills} /> */}
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
          <Button className="bg-main-secondary rounded-full px-8 py-3 pt-4 h-[52px]  font-poppins font-medium text-base hover:bg-main-secondary scale-100 hover:scale-90 transform transition hover:duration-500">
            Online Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}
