import KeyPoints from "@/components/shared/KeyPoints";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "./data";

export default function EqiAccordian() {
  return (
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

                              {cell?.type === "paragraph" && cell?.content}
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
  );
}
