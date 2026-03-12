"use client";

import { useGet } from "@/hooks/useGet";
import { INewsItem } from "@/types";
import Image from "next/image";
import IB from "../../../../../../public/newsEvents/Academic/IB.png";
import bg from "../../../../../../public/newsEvents/Academic/shape2.png";
import UpcomingEventCard from "./UpcomingEventCard";

export default function ActivityCalendarSection() {
  const { data, isLoading } = useGet<INewsItem[]>(
    "/news-events",
    ["news-events", "EVENTS"],
    { type: "EVENTS" },
  );

  const events = data?.data ?? [];

  return (
    <div>
      <div
        className="bg-[#FFF1E3] bg-no-repeat bg-cover bg-center pt-10 pb-20"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="container">
          <div>
            <Image
              src={IB}
              alt="sep-24"
              width={141}
              height={182}
              className="mx-auto -mt-20 mb-5 lg:mb-10"
            />
            <h1 className="text-center text-main-primary text-xl lg:text-3xl font-bold">
              Upcoming Events
            </h1>
            <span className="w-[140px] h-[3px] bg-main-secondary mx-auto mt-2 mb-10 block"></span>

            <div className="w-full">
              {isLoading ? (
                <p className="text-center text-main-primary">
                  Loading events...
                </p>
              ) : events.length === 0 ? (
                <p className="text-center text-main-primary">
                  No upcoming events found.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
                  {events.map((event) => (
                    <UpcomingEventCard key={event._id} event={event} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
