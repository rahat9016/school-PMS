import Image from "next/image";
import Link from "next/link";
import facebookIcon from "../../../../../../public/students/facebookIcon.png";
import getInvoled from "../../../../../../public/students/PPF.jpg";

export default function MembersObjective() {
  return (
    <div className="bg-white py-10 lg:pt-[88px] lg:pb-[104px]">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl lg:text-3xl text-black font-poppins font-semibold mb-4 lg:mb-8 uppercase">
              MEMBERS
            </h1>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light leading-[28px]">
              All school parents, teachers and alumni.
            </p>
            <h1 className="text-xl lg:text-3xl text-black font-poppins font-semibold mb-4 lg:mb-8 uppercase mt-6 lg:mt-14">
              OBJECTIVES
            </h1>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light leading-[28px]">
              The objective of PFC is to contribute to higher quality of the
              education in PAN- ASIA by supporting and diversifying the forms of
              educational and extracurricular activities, encouraging parental
              involvement in PAN -ASIA’s life, and sustaining closer contacts
              between parents and teachers. PPFC; 1. Encourages constructive
              involvement of Parents in School activities. 2. Provides an
              additional channel of communication between parents and the
              School. 3. Includes fundraising events for projects or needs not
              in the School budget. 4. Communicates and cooperates to support
              the plans of the school community in order to increase the quality
              of education and success of the students 5. Supports the plans of
              the school to increase the quality of education and success of the
              students
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:-mt-96">
              <Link href="#" className="flex items-center gap-2 pl-10 mb-4">
                <Image
                  src={facebookIcon}
                  alt="facebook"
                  width={42}
                  height={42}
                />
                <div className="h-[42px] p-4 border border-blue flex items-center justify-center rounded-lg hover:bg-blue hover:text-white text-blue duration-300">
                  <p className="leading-none font-poppins font-medium text-sm  ">
                    Follow This Page
                  </p>
                </div>
              </Link>
              <Image
                src={getInvoled}
                alt="getInvoled"
                width={630}
                height={633}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
