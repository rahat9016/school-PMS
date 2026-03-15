"use client";

import Carousel from "@/components/shared/Carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface LunchPrimaryMenuSectionProps {
  slides: string[];
  isLoading?: boolean;
}

export default function LunchPrimaryMenuSection({
  slides,
  isLoading,
}: LunchPrimaryMenuSectionProps) {
  return (
    <div className="bg-main-primary py-10">
      <div className="container">
        <h1 className="font-poppins text-xl  lg:text-3xl font-semibold text-white uppercase">
          PRIMARY AND SECONDARY LUNCH MENU
        </h1>
        <span className="block bg-main-secondary h-[3px] w-[147px] mt-3"></span>
        <div className="h-auto xl:h-[762px] flex mt-10">
          {isLoading ? (
            <Skeleton className="w-full h-[400px] xl:h-[700px] rounded-xl bg-white/20" />
          ) : slides.length ? (
            <Carousel
              slides={slides}
              isPrimary
              imageContainerClassName="h-[400px] xl:h-[700px] aspect-auto bg-white"
              imageClassName="object-contain"
            />
          ) : (
            <div className="w-full min-h-[240px] xl:min-h-[700px] rounded-xl border border-white/20 bg-white/10 flex items-center justify-center px-6 text-center text-white">
              Lunch menu will be updated soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
