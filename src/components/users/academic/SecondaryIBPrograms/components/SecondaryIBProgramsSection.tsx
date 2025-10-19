import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Shape from "../../../../../../public/academic/shape.png";
import shapeBg from "../../../../../../public/academic/shapeBg.png";
import img from "../../../../../../public/academic/secondaryMYPDP1.png";
import poster from "../../../../../../public/academic/myp-10-reasons-poster.jpg";
import diplomaLogo from "../../../../../../public/academic/diplomaLogo.png";
import diploma10 from "../../../../../../public/academic/diploma10.png";
import Image from "next/image";
import IBProgramKeyPoints from "./IBProgrameKeyPoints";
import IBDiplomaProgramKeyPoints from "./IBDiplomaProgramKeyPoints";
import IBDiplomaCASProgramKeyPoints from "./IBDiplomaCASProgramKeyPoints";
export default function SecondaryIBProgramsSection() {
  return (
    <div className="bg-white pt-9 ">
      <Tabs defaultValue="IBMiddle">
        <div>
          <div className="container">
            <TabsList className="flex flex-col md:flex-row bg-transparent">
              <TabsTrigger
                className="shadow-none data-[state=active]:bg-main-primary data-[state=active]:text-white px-2 lg:px-6 py-3 font-poppins text-sm lg:text-base font-light"
                value="IBMiddle"
              >
                IB Middle Years Program (MYP)
              </TabsTrigger>
              <TabsTrigger
                className="shadow-none data-[state=active]:bg-main-primary data-[state=active]:text-white px-2 lg:px-6 py-3 font-poppins text-sm lg:text-base font-light"
                value="IBDiploma"
              >
                IB Diploma Program (DP)
              </TabsTrigger>
            </TabsList>
          </div>
          <span className="bg-softGray w-full h-[2px] block mt-8 md:mt-2"></span>
        </div>
        <TabsContent value="IBMiddle">
          <div
            style={{
              backgroundImage: `url(${Shape.src})`,
            }}
            className="bg-[#f2fbfd] py-10 lg:py-20 mt-4 bg-no-repeat bg-left-top"
          >
            <div className="container">
              <Image
                src={img}
                alt=""
                width={1015}
                height={601}
                className="w-9/12 mx-auto"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${shapeBg.src})`,
            }}
            className="bg-main-primary py-10 lg:py-20 mt-4 bg-no-repeat bg-contain bg-center"
          >
            <div className="container">
              <Image
                src={poster}
                alt=""
                width={740}
                height={1045}
                className="w-9/12 mx-auto"
              />
            </div>
          </div>
          <div className="container py-10 lg:py-20">
            <div>
              <h1 className="text-main-primary font-poppins font-semibold text-xl lg:text-[30px]">
                IB Middle Years Program (MYP)
              </h1>
              <span className="block w-[140px] h-[3px] bg-main-secondary"></span>
              <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-4 lg:mt-8">
                Pan-Asia International School is extremely proud to be a member
                of the IB MYP & DP world-wide community. PAIS completed its MYP
                verification in May 2020. PAIS now offers a complete MYP & DP
                program for our students from grades 6 to 12.
              </p>
              <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
                IB World Schools share a common philosophy- a commitment to
                high-quality, challenging, international education- that we
                believe is important for our students.
              </p>
              <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-3 mb-6 lg:my-6">
                <span className="text-main-secondary">*</span> Only schools
                authorized by the IB Organization can offer any of its four
                academic programmes: the Primary Years Programme (PYP), the
                Middle Years Programme (MYP), the Diploma Programme (DP), or the
                Career-related Programme (CP). Candidate status gives no
                guarantee that authorization will be granted.
              </p>
            </div>
            <IBProgramKeyPoints />
          </div>
        </TabsContent>
        <TabsContent value="IBDiploma">
          <Image
            src={diplomaLogo}
            alt=""
            width={300}
            height={91}
            className="w-1/2 lg:w-2/12 mx-auto pt-3 lg:pt-6 pb-4 lg:pb-8"
          />
          <div
            style={{
              backgroundImage: `url(${shapeBg.src})`,
            }}
            className="bg-main-primary py-10 lg:py-20 mt-4 bg-no-repeat bg-contain bg-center"
          >
            <div className="container">
              <Image
                src={diploma10}
                alt=""
                width={1279}
                height={1346}
                className="w-full mx-auto"
              />
            </div>
          </div>
          <div className="container py-10 lg:py-20">
            <div>
              <h1 className="text-main-primary font-poppins font-semibold text-xl lg:text-[30px]">
                IB Diploma Program (DP)
              </h1>
              <span className="block w-[140px] h-[3px] bg-main-secondary"></span>
              <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-4 lg:mt-8">
                Pan-Asia International School is extremely proud to be a member
                of the IB MYP & DP world-wide community. PAIS completed its MYP
                verification in May 2020. PAIS now offers a complete MYP & DP
                program for our students from grades 6 to 12.
              </p>
              <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
                IB World Schools share a common philosophy- a commitment to
                high-quality, challenging, international education- that we
                believe is important for our students.
              </p>
              <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-3 mb-6 lg:my-6">
                <span className="text-main-secondary">*</span> Only schools
                authorized by the IB Organization can offer any of its four
                academic programmes: the Primary Years Programme (PYP), the
                Middle Years Programme (MYP), the Diploma Programme (DP), or the
                Career-related Programme (CP). Candidate status gives no
                guarantee that authorization will be granted.
              </p>
            </div>
            <IBDiplomaProgramKeyPoints />
            <div className="mt-20">
              <h1 className="text-main-primary font-poppins font-semibold text-xl lg:text-[30px]">
                The CAS Programme
              </h1>
              <span className="block w-[140px] h-[3px] bg-main-secondary mb-8"></span>
              <IBDiplomaCASProgramKeyPoints />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
