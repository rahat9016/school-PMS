import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "./data";

export default function GeneralFAQ() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
        }}
        className=" py-10 lg:py-20"
      >
        <div className="container">
            <h1 className="text-main-primary  text-2xl font-poppins font-semibold">General FAQ </h1>
            <span className="block bg-main-secondary h-[3px] w-[140px]  mb-10 lg:mb-[64px]"></span>
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
                    className="p-4 rounded-lg text-[#002D37] text-sm lg:text-base font-medium hover:no-underline border border-main-primary"
                  >
                    {content.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-forestWhite mt-1 py-2 lg:py-4 px-3 lg:px-6 pb-6 lg:pb-14 rounded-lg border border-[#E6E6E6]">
                    {content.desc1 && (
                      <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                        {content.desc1}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
