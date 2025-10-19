import Image from "next/image";
import React from "react";
import OnlineGuidanceCounselingImg from "../../../../../../public/students/OnlineGuidanceCounselingImg.png";
import shape2 from "../../../../../../public/Facilities/shape.png";

export default function IndividualCounselingSection() {
  return (
    <div className="bg-[#FFF1E3] py-10 lg:py-[104px]">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-black uppercase">
              Individual counseling
            </h1>
            <span className="block bg-main-secondary h-[3px] w-[47px] my-5 lg:my-10"></span>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light leading-[28px]">
              According to feedback from our parents and students, most of our
              students are doing well at home during this social distancing
              period. However, there are some students who have faced more
              challenges due to their mental illnesses or complicated concerns.
              Therefore, our school counselor team provides online individual
              counseling sessions to needed students via Zoom and Google Meet in
              the afternoon. Meetings with parents to discuss how to support
              students’ well-being is also done online with satisfactory
              results. 
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10  leading-[28px]">
              Although online counseling cannot entirely replace face-to-face
              sessions, up to this point, both school counselors and students
              have enjoyed their online sessions. Covid-19 and distance cannot
              stop us from providing and receiving care as well as support. 
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10 leading-[28px]">
              Students, teachers, and parents of Pan-Asia International School,
              if you are looking for listening ears, our school counselors
              sincerely welcome you to contact them.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div
              className="p-4 object-contain bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${shape2.src})`,
              }}
            >
              <Image
                src={OnlineGuidanceCounselingImg}
                alt="School Counselling Img"
                width={590}
                height={410}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
