import React from "react";
import Image from "next/image";
import img from "../../../../../../public/students/MeetSchoolImg.png";
import shape from "../../../../../../public/students/bgShape.png";
export default function MeetTheSchoolSection() {
  return (
    <div
      className="bg-aliceBlue bg-no-repeat bg-[length:159px] lg:bg-[length:259px] bg-[top_0_left_0] py-10 lg:py-[140px]"
      style={{
        backgroundImage: `url(${shape.src})`,
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/2 lg:pr-10">
            <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-black uppercase">
              Meet the School Counselor- Weekly online assembly on Friday
              mornings
            </h1>
            <span className="block bg-main-secondary h-[3px] w-[47px] my-5 lg:my-10"></span>
            <p  className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
              The Covid-19 has forced our school to be physically closed, but
              cannot force our school counselors to stop providing support for
              the mental health of our students and teachers. Every Friday
              morning, Ms. Bea, our school counselor conducts a 15-minutes
              assembly to share short, simple but practical mental health
              knowledge and skills with the whole school. These scientific-based
              knowledge and skills are necessary to maintain good mental health
              of our students and teachers during this social-distancing
              period. 
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
              Topics were presented from the middle of March until now including
              “How to deal with uncertainty”, “Being safe only”, “Examination
              anxiety during Covid-19 pandemic”, “What is stress”, “Explanatory
              style”, “Practicing gratitude”. Coming topics may be “Sleep
              hygiene” which will help our students and teachers understand the
              importance of quality sleep to our brains as well as daily
              function; “Learning to relax” providing more skills to manage
              stress; and “Be fair to our brain” providing proper understanding
              about the nature of mental illnesses, so they will
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={img} alt="Meet School" />
          </div>
        </div>
        <div>
          <p className="text-sm lg:text-base font-poppins text-darkGray font-light leading-[28px]">
            not. hesitate to seek for professional help when they or people
            around them have mental illnesses which is much more popular than
            what the public think. 
          </p>
          <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
            To contact our school counselor, please visit her office inside the
            Primary library or send her an email to 
            <span className="text-[#238DFF]">beatriz.q@pais.ac.th</span> to set
            an appointment at your convenient time.
          </p>
        </div>
      </div>
    </div>
  );
}
