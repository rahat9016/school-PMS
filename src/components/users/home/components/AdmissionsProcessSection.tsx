import React from "react";
import AdmissionsProcessCard from "./AdmissionsProcessCard";
import img1 from "../../../../../public/admission/icon1.png";
import img2 from "../../../../../public/admission/icon2.png";
import img3 from "../../../../../public/admission/icon3.png";
import icon1 from "../../../../../public/admission/1.png";
import icon2 from "../../../../../public/admission/2.png";
import icon3 from "../../../../../public/admission/3.png";
import bg from "../../../../../public/admission/bg.png"
const AdmissionsData = [
  {
    bgColor: "#EDF8FC",
    bgIcon: icon1,
    icon: img1,
    title: "Request Info",
    description:
      "You will receive a confirmation email with instructions to complete your application.",
    href: "/enrollment-scholarship",
    buttonLabel: "Request Info",
  },
  {
    bgColor: "#F1EEFF",
    bgIcon: icon2,
    icon: img2,
    title: "Schedule a Visit",
    description:
      "You are always welcome to visit us in person. This is the best way to learn about Pan-Asia.",
    href: "/open-house-school-tour",
    buttonLabel: "Schedule a visit",
  },
  {
    bgColor: "#EBF9EF",
    bgIcon: icon3,
    icon: img3,
    title: "Apply",
    description:
      "Applicants will be required to sit for aptitude tests as well as attend an interview.",
    href: "/admission-overview",
    buttonLabel: "Apply Now",
  },
];

export default function AdmissionsProcessSection() {
  return (
    <div className="bg-white pt-[104px] pb-[276px] bg-no-repeat bg-contain bg-bottom" style={{
      backgroundImage: `url(${bg.src})`,
    }}>
      <div className="container">
        <div className="text-center w-7/12 mx-auto">
          <p className="text-sm font-poppins font-medium text-main-secondary mb-4">
            Facilities
          </p>
          <h1 className="text-black font-poppins font-semibold text-2xl lg:text-5xl mb-6">
            Admissions Process
          </h1>
          <p className="text-sm font-poppins font-light text-darkGray mt-[18px] mb-[88px]">
            Admission is open to all students of any nationality who fulfill our
            admissions criteria.Students may be admitted at any time during the
            school year.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {AdmissionsData.map((adm, index) => (
            <AdmissionsProcessCard key={index} {...adm} />
          ))}
        </div>
      </div>
    </div>
  );
}
