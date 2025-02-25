import TitleTag from "@/components/shared/TitleTag";
import React from "react";

export default function HistorySection() {
  return (
    <div className="py-[140px] bg-main-primary">
      <div className="container">
        <div className="flex flex-row gap-32">
          <div className="w-5/12"></div>
          <div className="w-7/12">
            <TitleTag title="Message" />
            <h1 className="font-poppins text-3xl lg:text-5xl font-semibold text-white mt-8 mb-14">
              History
            </h1>
            <p className="text-base font-light font-poppins text-white">
              Pan Asia International School (PAIS) is located in Prawet district
              , Bangkok, Thailand. It was established by Social Welfare Society
              (SWS) a Thai non-profit charitable organization in the year 2004.
              PAIS is accredited by Thai ministry of education and Western
              Association of Schools and Colleges (WASC), and is a member of the
              International Schools Association of Thailand (ISAT).
            </p>
            <p className="text-base font-light font-poppins text-white mt-12">
              (PAIS) is a well- established, successful school catering for 3-18
              year olds. It is an authorized international Baccalaureate (IB)
              Diploma and Middle Years Program (MYP) school that follows
              American curriculum. It contains outstanding facilities (swimming
              pools, basketball court, football pitches, auditorium with stage,
              international food canteen, science labs, IT Mac lab, and art
              room).
            </p>
          </div>
        </div>
        <div>
          <p className="text-base font-light font-poppins text-white mt-12">
            As Prawet district is a suburban location, it remains a green area
            and does not suffer from traffic congestion or air pollution as the
            case in the center of the city. PAIS is located on a side street
            approximately 200 meters from the main road Chalerm Prakiat R. 9
            which makes the school accessible by a number of nearby city
            arteries and the traffic is quite manageable.
          </p>
          <p className="text-base font-light font-poppins text-white mt-12">
            The motto of PAIS “Western curriculum Eastern Culture” was reflected
            in the school mission: to provide its students with the best
            elements of western education within an eastern cultural environment
            through the cooperation among students, parents, educators and the
            community. To this end, PAIS uses an American curriculum with
            International Baccalaureate Middle Years Program (IBMYP) and Diploma
            Program (IBDP). PAIS is considered as one of the best options to the
            believers of all religions who are opting for international
            education in a welcoming and conducive multi faith environment.
          </p>
        </div>
      </div>
    </div>
  );
}
