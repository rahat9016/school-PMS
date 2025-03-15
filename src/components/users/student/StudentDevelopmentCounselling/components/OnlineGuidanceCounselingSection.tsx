import Image from "next/image";
import React from "react";
import OnlineGuidanceCounselingImg from "../../../../../../public/students/OnlineGuidanceCounselingImg.png";
import shape2 from "../../../../../../public/Facilities/shape.png";

export default function OnlineGuidanceCounselingSection() {
  return (
    <div className="bg-white py-10 xl:pt-32 xl:pb-[140px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
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
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-black uppercase w-full lg:w-3/4">
            Online guidance counseling
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[47px] my-5 lg:my-10"></span>
          <p className="text-sm lg:text-base font-poppins text-darkGray font-light leading-[28px]">
            Albert Einstein said “In the middle of difficulty lies opportunity”.
            This quote is so true to Pan-Asia International School, school
            counseling team. Before the Covid-19 pandemic, it was very difficult
            to find time for guidance counseling because of the tight schedule
            of study and extra activities of our students. When the school was
            closed, the learning time of our students was shortened to prevent
            “Zoom fatigue” as well as physical health problems due to staring at
            screens for a very long time. Our school counselor team has grasped
            this opportunity to provide guidance counseling for students from
            grade 6 to 11 in the afternoon. The topics were decided by the
            school counselors and students’ requests. 
          </p>
        </div>
        </div>
        <div>
        <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
        Each guidance counseling session is about 30 to 50 minutes. This reasonable amount of time allows students to share and discuss their experience and opinions. Additionally, the knowledge and skills are also discussed in more details compared to short whole school assemblies. From the middle of March until now, the topics were taught including “How to deal with uncertainty”, “How to deal with stress”, and “Time management skills”. Coming topics may be “Demystifying emotions & emotional regulation skills”, “How to deal with conflicts”.
          </p>
        </div>
      </div>
    </div>
  );
}
