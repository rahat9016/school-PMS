import KeyPoints from "@/components/shared/KeyPoints";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { data } from "./data";

export default function NweaMapExamsKeyPoints() {
  return (
    <div className="bg-[#FFE8D1] py-10 lg:py-20">
      <div className="container">
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
                  className={`p-4 rounded-lg ${index %2==0?"text-[#002D37]":"text-white" } text-base font-medium hover:no-underline`}
                >
                  {content.title}
                </AccordionTrigger>
                <AccordionContent className="bg-forestWhite mt-1 py-2 lg:py-4 px-3 lg:px-6 pb-6 lg:pb-14 rounded-lg border border-[#E6E6E6]">
                  {content.desc1 && (
                    <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-3 lg:mb-6">
                      {content.desc1}{content.link && <Link target="_blank" className="underline" href={`https://www.nwea.org/`}>{content.link}</Link>}
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
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
