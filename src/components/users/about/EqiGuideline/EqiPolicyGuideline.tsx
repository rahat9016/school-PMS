import HeroSection from "@/components/shared/HeroSection";
import Image from "next/image";
import aqiGuideline from "../../../../../public/about/aqiGuideline.png";
import herobg from "../../../../../public/about/aqiHero.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import KeyPoints from "@/components/shared/KeyPoints";
import { data, paragraphsData } from "./data";

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

          {/* image section  */}
          <div className=" mt-6 ">
            <Image
              src={aqiGuideline}
              alt="AQI Guidelines and Policy"
              width={1280}
              height={1808}
            />
          </div>

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
            <Accordion
              defaultValue="item-1"
              type="single"
              collapsible
              className="w-full"
            >
              {data?.map((content, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className="mb-3 border-[0px]"
                  >
                    <AccordionTrigger
                      style={{
                        background: `#fff`,
                      }}
                      className="p-4 rounded-lg text-[#002D37] text-sm lg:text-base font-medium hover:no-underline border border-main-primary  "
                    >
                      {content.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-forestWhite mt-1 py-2 lg:py-4 px-3 lg:px-6 pb-6  rounded-lg border border-[#E6E6E6] ">
                      {content.desc1 && (
                        <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                          {content.desc1}
                        </p>
                      )}
                      {content.desc2 && (
                        <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                          {content.desc2}
                        </p>
                      )}
                      {content.desc3 && (
                        <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                          {content.desc3}
                        </p>
                      )}

                      <KeyPoints points={content?.content} />
                      {content?.desc4 && (
                        <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-7 lg:mt-14 mb-3 lg:mb-6">
                          {content?.desc4}
                        </p>
                      )}
                      {content?.desc5 && (
                        <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                          {content?.desc5}
                        </p>
                      )}

                      <div>
                        <ul>
                          {content?.keyPoints?.map((key, index) => (
                            <li
                              className="font-poppins text-sm lg:text-base text-black-dark mb-2"
                              key={index}
                            >
                              <span className="text-main-primary font-medium">
                                {index + 1}
                                {"."}
                              </span>{" "}
                              <span className="text-black-dark font-normal">
                                {key?.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* table  */}
                      {content?.table && (
                        <div className=" ">
                          <table className="min-w-full border border-gray-300 ">
                            <thead>
                              <tr className=" ">
                                {content.table.headers.map((header, index) => (
                                  <th
                                    key={index}
                                    className="border-b border-gray px-4 py-3 text-link font-bold text-xs xlg:text-sm lg:text-base text-center"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {content.table.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className={"bg-white"}>
                                  {row.map((cell, cellIndex) => (
                                    <td
                                      key={cellIndex}
                                      className=" px-4 py-3 text-sm lg:text-base text-black-dark font-normal"
                                    >
                                      {cell?.type === "list" && (
                                        <ol className="list-decimal list-inside space-y-1">
                                          {(cell.content as string[]).map(
                                            (item, itemIndex) => (
                                              <li
                                                key={itemIndex}
                                                className=" text-xs xlg:text-sm  lg:text-base mb-1.5 "
                                              >
                                                {item}
                                              </li>
                                            )
                                          )}
                                        </ol>
                                      )}

                                      {cell?.type === "paragraph" &&
                                        cell?.content}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
