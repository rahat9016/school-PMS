import React from "react";
import AdmissionsProcessCard from "./AdmissionsProcessCard";
import img1 from "../../../../../public/admission/icon1.png";
import img2 from "../../../../../public/admission/icon2.png";
import img3 from "../../../../../public/admission/icon3.png";
import icon1 from "../../../../../public/admission/1.png";
import icon2 from "../../../../../public/admission/2.png";
import icon3 from "../../../../../public/admission/3.png";

const AdmissionsData = [
  {
    bgColor: "#EDF8FC",
    bgIcon: icon1,
    icon: img1,
    title: "Request Info",
    description:
      "You will receive a confirmation email with instructions to complete your application.",
    href: "/",
    buttonLabel: "Request Info"
  },
  {
    bgColor: "#F1EEFF",
    bgIcon: icon2,
    icon: img2,
    title: "Schedule a Visit",
    description:
      "You are always welcome to visit us in person. This is the best way to learn about Pan-Asia.",
    href: "/",
    buttonLabel: "Schedule a visit "
  },
  {
    bgColor: "#EBF9EF",
    bgIcon: icon3,
    icon: img3,
    title: "Apply",
    description:
      "Applicants will be required to sit for aptitude tests as well as attend an interview.",
    href: "/",
    buttonLabel: "Apply Now"
  },
];

export default function AdmissionsProcessSection() {
  return (
    <div className="bg-white">
      <div className="container">
      <div className="grid grid-cols-3 gap-4">
      {
        AdmissionsData.map((adm, index) => <AdmissionsProcessCard key={index} {...adm}/>)
      }
      </div>
      </div>
    </div>
  );
}
