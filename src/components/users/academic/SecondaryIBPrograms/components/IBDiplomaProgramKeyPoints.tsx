import KeyPoints from "@/components/shared/KeyPoints";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data2 } from "../../CurriculumOverview/data";

export default function IBDiplomaProgramKeyPoints() {
  return (
    <div>
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-full"
      >
        {data2?.map((content, index) => {
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
                <KeyPoints points={content?.content} />
                {content?.curriculumPoints &&
                  content.curriculumPoints.map((curriculum, index) => {
                    return (
                        <div key={index}>
                          <h3 className="text-main-primary font-medium text-sm lg:text-base font-poppins mb-3">
                            {curriculum.key}
                          </h3>
                          {curriculum?.desc && (
                            <p className={`text-sm lg:text-base font-poppins text-black-dark font-light mb-12`}>
                              {curriculum?.desc}
                            </p>
                          )}
                          {curriculum?.curriculumPoints && (
                            <ul>
                              {curriculum?.curriculumPoints?.map((value, index) => (
                                <li
                                  className="font-poppins text-sm lg:text-base text-black-dark mb-2"
                                  key={index}
                                >
                                  <span className="text-black-dark font-normal">
                                    {value}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                  })}
                {content.diplomaPoints && (
                  <div className="mt-12">
                    <ul>
                      {content?.diplomaPoints?.map((value, index) => (
                        <li
                          className="font-poppins text-sm lg:text-base text-black-dark mb-2"
                          key={index}
                        >
                          <span className="text-black-dark font-normal">
                            {value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
