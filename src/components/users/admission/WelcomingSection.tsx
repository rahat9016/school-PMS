import React from "react";
import Image from "next/image";
import bg from "../../../../public/admission/shape.png";
import img from "../../../../public/admission/welcommingimg.jpg";
import KeyPoints from "@/components/shared/KeyPoints";
export default function WelcomingSection() {
  return (
    <div
      className="bg-[#F2FBFD] bg-no-repeat bg-contain bg-center pt-10 pb-[140px]"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex flex-col">
            <p className="text-charcoalGray text-base font-poppins font-normal mb-6">We always look forward to welcoming all students of any nationality who fulfill our admission criteria to PAIS community at any time during the year.</p>
            <p className="text-charcoalGray text-base font-poppins font-normal mb-6">At the Early Childhood level (Pre-School to Kindergarten) children are screened to determine developmental stages in respect to overall knowledge, language development, motor skills, and social and emotional development. A child’s performance in these areas should be those expected for the age of the child. Special emphasis is placed on language development.</p>
            <p className="text-charcoalGray text-base font-poppins font-normal mb-6">At the Pre-School and Kindergarten level, pre-academic concepts and skills in the areas of reading and mathematics are screened as well.</p>
            <p className="text-charcoalGray text-base font-poppins font-normal mb-6">At the Primary, Middle, and High school levels (Grades 1-10) students are assessed in the following areas and are expected to meet the norm in line with the child’s age and grade level:</p>
            <KeyPoints points={["Reading Fluency (English)", "Reading Comprehension (English)", "Vocabulary Development (English)", "Speaking and Listening Skills (English)", "Writing (English)"]}/>
            </div>
            <div className="w-full lg:w-1/2">
                <Image src={img} alt="welcoming" />
            </div>
        </div>
      </div>
    </div>
  );
}
