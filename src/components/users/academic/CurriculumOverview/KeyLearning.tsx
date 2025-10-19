import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import KeyPoints from "../../../shared/KeyPoints";
import { data } from "./data";


export default function KeyLearning() {
  return (
    <div className="bg-white  py-20">
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
                <AccordionContent className="bg-forestWhite mt-1 py-4 px-6 pb-14 rounded-lg border border-[#E6E6E6]">
                  <KeyPoints points={content?.content} />
                  {content?.groups && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-6">
                        {content?.groups.slice(0, 3).map((group, index) => {
                          return (
                            <div key={index}>
                              <h3 className="text-main-primary font-poppins font-medium text-base underline mb-2">
                                {group?.title}
                              </h3>
                              <div className="pl-3">
                                <KeyPoints points={group?.subjects} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-col gap-6">
                        {content?.groups.slice(3, 6).map((group, index) => {
                          return (
                            <div key={index}>
                              <h3 className="text-main-primary font-poppins font-medium text-base underline mb-2">
                                {group?.title}
                              </h3>
                              <div className="pl-3">
                                <KeyPoints points={group?.subjects} />
                              </div>
                            </div>
                          );
                        })}
                        {content.coreElements && (
                          <div>
                            <h3 className="text-main-primary font-poppins font-medium text-base underline mb-2">{content?.coreElements?.title}</h3>
                            <div className="pl-3">
                                <KeyPoints points={content?.coreElements?.subjects} />
                              </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
