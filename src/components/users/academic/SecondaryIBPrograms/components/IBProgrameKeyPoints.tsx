import KeyPoints from "@/components/shared/KeyPoints";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { data } from "./data";

export default function IBProgramKeyPoints() {
  return (
    <div>
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
                  background: `${content.bg}`,
                  border: `1px solid ${content.border}`,
                }}
                className={`p-4 rounded-lg ${index % 2 == 0 ? "text-[#371E00]" : "text-[#fff]"} text-sm lg:text-base font-medium hover:no-underline`}
              >
                {content.title}
              </AccordionTrigger>
              <AccordionContent className="bg-forestWhite mt-1 py-2 lg:py-4 px-3 lg:px-6 pb-6 lg:pb-14 rounded-lg border border-[#E6E6E6]">
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
                {content.img && (
                  <Image
                    src={content?.img}
                    alt="Approaches"
                    className="w-full lg:w-7/12"
                  />
                )}
                <KeyPoints points={content?.content} />
                {content.desc4 && (
                  <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mt-7 lg:mt-14 mb-3 lg:mb-6">
                    {content.desc4}
                  </p>
                )}
                {content.desc5 && (
                  <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                    {content.desc5}
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
                          {key?.key}
                        </span>{" "}
                        <span className="text-black-dark font-normal">
                          {key?.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
