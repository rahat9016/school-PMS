"use client";

import HeroSection from "@/components/shared/HeroSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useGet } from "@/hooks/useGet";
import Image from "next/image";
import herobg from "../../../../../public/about/aqiHero.jpg";

import { paragraphsData } from "./data";
import EqiAccordian from "./EqiAccordian";

interface IManageContentItem {
  _id: string;
  file?: string;
  fileUrl?: string;
}

export default function EqiPolicyGuideline() {
  const { data, isLoading } = useGet<IManageContentItem>(
    "/manage-content",
    ["manage-content", "AQI_GUIDELINE", "users"],
    { type: "AQI_GUIDELINE" },
  );

  const fallbackFile = "/AQIforPAISWebsite.pdf";
  const contentUrl = data?.data?.fileUrl || data?.data?.file || fallbackFile;
  const normalizedUrl = contentUrl.toLowerCase().split("?")[0].split("#")[0];
  const isPdf = normalizedUrl.endsWith(".pdf");

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
          {isLoading ? (
            <Skeleton className="w-full min-h-[600px] my-6 rounded-lg" />
          ) : isPdf ? (
            <iframe
              src={contentUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "600px", border: "none" }}
              className="my-6"
            />
          ) : (
            <Image
              src={contentUrl}
              alt="AQI Guidelines and Policy"
              width={1600}
              height={1200}
              className="my-6 w-full h-auto rounded-lg"
            />
          )}
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
