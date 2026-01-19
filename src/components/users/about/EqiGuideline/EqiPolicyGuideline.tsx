import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/about/aqiHero.jpg";

import { paragraphsData } from "./data";
import EqiAccordian from "./EqiAccordian";

export default function EqiPolicyGuideline() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="AQI Guidelines and Policy"
        className="bg-cover h-[280px]"
      />

      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
        }}
        className="py-10"
      >
        <div className="container">
          <h1 className="text-main-primary text-xl lg:text-3xl font-bold">
            AQI Guidelines and Policy
          </h1>
          <span className="w-[140px] h-[3px] bg-main-secondary block mt-2"></span>
          <iframe
            src="/AQIforPAISWebsite.pdf"
            width="100%"
            height="100%"
            style={{ minHeight: "600px", border: "none" }}
            className=" my-6"
          />
          {/* image section  */}
          {/* <div className=" ">
            <Image
              src={aqiGuideline}
              alt="AQI Guidelines and Policy"
              width={1280}
              height={1808}
            />
          </div> */}

          {/* paragraph section  */}
          <div className=" mt-10 ">
            {paragraphsData?.map((content, ind) => (
              <p
                key={ind}
                className={`
                  text-sm lg:text-base font-light font-poppins mt-5  `}
              >
                {content}
              </p>
            ))}
          </div>

          {/* faq section  */}
          <div className=" mt-16 ">
            <h1 className="text-main-primary  text-4xl text-center font-poppins font-semibold  mb-8">
              General FAQ
            </h1>

            {/* accordian  */}
            <EqiAccordian />
          </div>
        </div>
      </div>
    </div>
  );
}
