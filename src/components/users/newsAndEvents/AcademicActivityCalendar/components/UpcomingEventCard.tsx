import { Separator } from "@/components/ui/separator";
import { Clock2 } from "lucide-react";
import Link from "next/link";

export default function UpcomingEventCard() {
  return (
    <div className="relative bg-white px-6 py-7 rounded-md overflow-hidden group">
      <div className="absolute inset-0 bg-main-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Link href={"/upcoming-events-details/1"} className=" text-white font-medium transition underline font-poppins">
          View
        </Link>
      </div>
      <div>
        <div className=" text-lg text-main-secondary ">November 04</div>
        <div className="  flex items-center gap-2 ">
          <Clock2 size={20} className="text-mediumGray" />
          <span className="text-xs font-poppins text-mediumGray">
            10:00 AM - 12:00PM
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl text-main-primary font-medium mb-4 font-poppins leading-[32px] mt-3">
          Student Achievement Awards Night
        </h1>

        <p className="text-xs text-link ">School open day</p>
      </div>

      <Separator className="w-full mx-auto my-3" />

      <div>
        <div className="line-clamp-2 text-sm font-poppins font-normal text-[#9B9B9C]">
          Pan Asia International School (PAIS) is asdfasdfasdf
        </div>
      </div>
    </div>
  );
}
