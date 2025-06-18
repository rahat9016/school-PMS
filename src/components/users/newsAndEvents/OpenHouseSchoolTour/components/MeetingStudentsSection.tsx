import Carousel from "@/components/shared/Carousel";
import React from "react";
import shape2 from "../../../../../../public/Facilities/shape2.png";
import img1 from "../../../../../../public/academic/OpenHouseSchool1Tour.jpg";
import img2 from "../../../../../../public/academic/OpenHouseSchool2Tour.jpg";
import img3 from "../../../../../../public/academic/OpenHouseSchool3Tour.jpg";
import KeyPoints from "@/components/shared/KeyPoints";
export default function MeetingStudentsSection() {
  return (
    <div className="bg-[#F2FBFD] py-7 lg:py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40%]">
            <p className="font-poppins text-sm lg:text-base font-normal  text-charcoalGray mt-4 mb-6">
              Meeting our students, touring the school campus, experiencing a
              lunch in our cafeteria, and meeting with members of Pan-Asia
              community is not comparable to anything. All it takes to call our
              Admission Office at 
              <span className="text-[#4A7FE9]">02-347-2280</span> or 
              <span className="text-[#4A7FE9]">083-096-2291</span>, or email 
              <span className="text-[#4A7FE9]">marketing@pais.ac.th</span> for
              an appointment.
            </p>
            <p className="font-poppins text-sm lg:text-base font-normal  text-charcoalGray mt-5 lg:mt-10">
              Your visit to Pan-Asia usually includes:
            </p>
            <div className="mt-7 lg:mt-14 mb-4">
              <KeyPoints
                points={[
                  "A guided campus tour",
                  "A classroom visit",
                  "An all-school gathering (Auditorium)",
                  "A possible meeting with the Head of Sections",
                  "Your interview with an Admission Officer",
                  "The opportunity to have lunch with Pan-Asia community"
                ]}
              />
            </div>
          </div>
          <div
            className="w-full lg:w-[60%] p-4 object-contain bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${shape2.src})`,
            }}
          >
            <Carousel slides={[img1, img2, img3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
