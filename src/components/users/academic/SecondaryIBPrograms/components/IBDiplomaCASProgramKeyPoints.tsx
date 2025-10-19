import KeyPoints from "@/components/shared/KeyPoints";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data3 } from "../../CurriculumOverview/data";

export default function IBDiplomaCASProgramKeyPoints() {
  return (
    <div>
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-full"
      >
        {data3?.map((content, index) => {
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
                className={`p-4 rounded-lg ${index % 2 ==0 ?"text-[#002D37]":"text-white"} text-sm lg:text-base font-medium hover:no-underline`}
              >
                {content.title}
              </AccordionTrigger>
              <AccordionContent className="bg-forestWhite mt-1 py-4 px-6 pb-14 rounded-lg border border-[#E6E6E6]">
                {content.desc1 && (
                  <p className="text-sm lg:text-base font-poppins text-black-dark font-normal mb-6">
                    {content.desc1}
                  </p>
                )}
                {content.important && (
                  <p className="text-sm lg:text-base font-poppins text-main-secondary font-normal mb-7 mt-9">
                    {content.important}
                  </p>
                )}
                <KeyPoints points={content?.content} />
                {content?.programsPoints &&
                  content.programsPoints.map((curriculum, index) => {
                    return (
                        <div key={index}>
                          <h3 className="text-main-primary font-medium text-sm lg:text-base font-poppins mb-3">
                            {curriculum.key}
                          </h3>
                          {curriculum?.desc && (
                            <p className={`text-sm lg:text-base font-poppins text-black-dark font-light mb-6 lg:mb-12`}>
                              {curriculum?.desc}
                            </p>
                          )}
                        </div>
                      )
                  })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
