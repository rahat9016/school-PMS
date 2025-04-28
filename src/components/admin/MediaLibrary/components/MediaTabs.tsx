import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import allVideo from "../../../../../public/dashboard/allVideo.png";
import heroImg from "../../../../../public/dashboard/heroImg.png";

export default function MediaTabs() {
  return (
    <div>
      <TabsList className="w-full justify-start gap-2 bg-transparent">
        <TabsTrigger
          value="all"
          className="rounded-none border-b-[3px] border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-main-secondary data-[state=active]:text-charcoalGray data-[state=active]:bg-transparent data-[state=active]:shadow-none flex items-center text-base gap-2"
        >
          <Image src={allVideo} alt="allVideo" width={28} height={28} />
          All Media
        </TabsTrigger>
        <TabsTrigger
          value="hero"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-main-secondary data-[state=active]:text-charcoalGray data-[state=active]:bg-transparent data-[state=active]:shadow-none flex items-center text-base gap-2"
        >
          <Image src={heroImg} alt="allVideo" width={28} height={28} />
          Categorized Images
        </TabsTrigger>
      </TabsList>
    </div>
  );
}
