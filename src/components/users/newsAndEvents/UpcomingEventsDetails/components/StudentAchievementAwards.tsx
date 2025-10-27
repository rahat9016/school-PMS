"use client";

import Image, { StaticImageData } from "next/image";

interface IEventData {
  title: string;
  host: string;
  date: string;
  time: string;
  venue: string;
  overview: string[];
  awardCategories: string[];
  eveningHighlights: string[];
  designConcept: string[];
  closingMessage: string;
  images: StaticImageData[];
}

export default function StudentAchievementAwards({
  data,
}: {
  data: IEventData;
}) {
  return (
    <section
      style={{
        background:
          "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
      }}
      className="py-10"
    >
      <div className="container">
        <div>
          <div className="mb-5 lg:mb-10">
            <h1 className="text-xl lg:text-3xl font-semibold text-main-primary font-poppins">
              {data.title}
            </h1>
            <span className="bg-main-secondary w-[70px] h-[3px] inline-block"></span>
            <p className="text-sm lg:text-lg text-charcoalGray mt-4 lg:mt-7">
              <span className="font-medium font-poppins">Hosted by:</span>{" "}
              {data.host}
            </p>
            <p className="text-sm lg:text-lg text-charcoalGray">
              <span className="font-medium font-poppins">Date:</span>{" "}
              {data.date}
            </p>
            <p className="text-sm lg:text-lg text-charcoalGray">
              <span className="font-medium font-poppins">Time:</span>{" "}
              {data.time}
            </p>
            <p className="text-sm lg:text-lg text-charcoalGray">
              <span className="font-medium font-poppins">Venue:</span>{" "}
              {data.venue}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[70%]">
              <div>
                <span className="text-lg font-medium text-charcoalGray">
                  Event Overview :
                </span>
                {data.overview.map((p, i) => (
                  <p
                    key={i}
                    className="text-base text-charcoalGray mb-3 font-normal"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6 lg:mt-10">
                <h2 className="text-lg font-medium text-charcoalGray">
                  Award Categories :
                </h2>
                <p className="text-base font-medium text-charcoalGray my-1">
                  Students will be recognized for excellence in a variety of
                  areas, including:
                </p>
                <ul className="list-disc list-inside text-base space-y-1 text-charcoalGray">
                  {data.awardCategories.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 lg:mt-10">
                <h2 className="text-lg font-medium text-charcoalGray">
                  Evening Highlights :
                </h2>
                <ul className="list-disc list-inside text-base space-y-1 text-charcoalGray">
                  {data.eveningHighlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[30%] flex flex-col gap-4 mt-5 lg:mt-0">
              {data.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Event Image ${i + 1}`}
                  width={400}
                  height={250}
                  className="rounded-md object-cover w-full h-52"
                />
              ))}
            </div>
          </div>

          <div className="mt-6 lg:mt-10">
            <h2 className="text-lg font-medium text-charcoalGray">
              Atmosphere & Design Concept :
            </h2>
            {data.designConcept.map((p, i) => (
              <p key={i} className="text-base text-charcoalGray mb-3">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-6 lg:mt-10">
            <h2 className="text-lg font-medium text-charcoalGray">
              Closing Message :
            </h2>
            <p className="text-base text-charcoalGray mb-3">
              {data.closingMessage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
