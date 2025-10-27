import { cn } from "@/lib/utils";
import { Clock2, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventCard({ index, className }: { index: number; className?: string }) {
  return (
    <div
      className={cn(`${index === 0 ? " rounded-none rounded-t-md" : " rounded-none"}  shadow-none  `, className)}
    >
      <div className="py-7 px-5 flex items-start gap-3  ">
        <div className="w-[90px] h-[90px] bg-main-primary text-white flex flex-col  items-center  p-3 rounded-full">
          <span className="font-semibold font-poppins text-2xl">28</span>
          <span className="uppercase font-light text-sm font-poppins">Aug <br/>2025</span>
        </div>

        <div className="w-[80%] lg:max-w-[158px]">
          <h1 className="text-xl lg:text-2xl text-main-primary font-medium mb-4 font-poppins leading-[32px]">
            Student Achievement Awards Night
          </h1>

          <div className="flex items-center gap-2 my-2">
            <Clock2 size={20}  className="text-mediumGray"/>
            <span className="text-xs font-poppins text-mediumGray">10:00 AM - 12:00PM</span>
          </div>

          <div className="flex items-center gap-2 my-2">
            <MapPin  size={20} className="text-mediumGray" />
            <span className="text-xs font-poppins text-mediumGray">Event Hall 02</span>
          </div>
          <Link href="#" className="font-poppins text-xs font-light text-[#2C77BD]">Read More...</Link>
        </div>
      </div>
    </div>
  );
}
