"use client";

import { INewsItem } from "@/types";
import Image from "next/image";

export default function StudentAchievementAwards({
  event,
}: {
  event: INewsItem;
}) {
  const eventDate = event.eventDate
    ? new Date(event.eventDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const timeRange =
    event.startTime && event.endTime
      ? `${event.startTime} – ${event.endTime}`
      : "";

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
              {event.title}
            </h1>
            <span className="bg-main-secondary w-[70px] h-[3px] inline-block"></span>
            {event.generalCategory?.name && (
              <p className="text-sm lg:text-lg text-charcoalGray mt-4 lg:mt-7">
                <span className="font-medium font-poppins">Category:</span>{" "}
                {event.generalCategory.name}
              </p>
            )}
            {eventDate && (
              <p className="text-sm lg:text-lg text-charcoalGray">
                <span className="font-medium font-poppins">Date:</span>{" "}
                {eventDate}
              </p>
            )}
            {timeRange && (
              <p className="text-sm lg:text-lg text-charcoalGray">
                <span className="font-medium font-poppins">Time:</span>{" "}
                {timeRange}
              </p>
            )}
            {event.location && (
              <p className="text-sm lg:text-lg text-charcoalGray">
                <span className="font-medium font-poppins">Venue:</span>{" "}
                {event.location}
              </p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[70%]">
              {event.description && (
                <div
                  className="prose max-w-none text-base text-charcoalGray"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              )}
            </div>
            {event.imageUrls && event.imageUrls.length > 0 && (
              <div className="w-full lg:w-[30%] flex flex-col gap-4 mt-5 lg:mt-0">
                {event.imageUrls.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`${event.title} - Image ${i + 1}`}
                    width={400}
                    height={250}
                    className="rounded-md object-cover w-full h-52"
                  />
                ))}
              </div>
            )}
          </div>

          {/* {event.tags && event.tags.length > 0 && (
            <div className="mt-6 lg:mt-10">
              <h2 className="text-lg font-medium text-charcoalGray mb-2">
                Tags:
              </h2>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag._id}
                    className="px-3 py-1 rounded-full text-sm border border-main-primary text-main-primary"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
