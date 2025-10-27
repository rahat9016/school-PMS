"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import IB from "../../../../../../public/newsEvents/Academic/IB.png";
import bg from "../../../../../../public/newsEvents/Academic/shape2.png";
import EventCard from "./EventCard";
import UpcomingEventCard from "./UpcomingEventCard";

export default function ActivityCalendarSection() {
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
            <div className="eventCard flex flex-col lg:flex-row justify-between gap-4 ">
              <div className=" mx-auto lg:mx-0 w-full lg:w-[25%] overflow-hidden  rounded-md bg-white ">
                {Array.from({ length: 3 })?.map((_, idx) => (
                  <EventCard key={idx} index={idx} className="border-b border-[#E6E6E6] last:border-b-0"   />
                ))}

                <div className="  flex items-center gap-1 my-2 p-3 text-link   ">
                  <span className=" cursor-pointer ">See more </span>
                  <MoveRight />
                </div>
              </div>
              <div className="w-full lg:w-[75%] ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                  {Array.from({ length: 6 })?.map((_, ind) => (
                    <UpcomingEventCard key={ind} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
