"use client";

import Carousel from "@/components/shared/Carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface LunchMenuSectionProps {
  slides: string[];
  isLoading?: boolean;
}

export default function LunchMenuSection({
  slides,
  isLoading,
}: LunchMenuSectionProps) {
  return (
    <div className="bg-[#FFE8D1] py-10">
      <div className="container">
        <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-main-primary uppercase">
          PRESCHOOL AND KINDERGARTEN LUNCH MENU
        </h1>
        <span className="block bg-main-secondary h-[3px] w-[147px] mt-3"></span>
        <div className="h-auto xl:h-[700px] flex mt-10">
          {isLoading ? (
            <Skeleton className="w-full h-[400px] xl:h-[700px] rounded-xl" />
          ) : slides.length ? (
            <Carousel
              slides={slides}
              imageContainerClassName="h-[400px] xl:h-[700px] aspect-auto bg-white"
              imageClassName="object-contain"
            />
          ) : (
            <div className="w-full min-h-[240px] xl:min-h-[700px] rounded-xl border border-main-primary/10 bg-white/50 flex items-center justify-center px-6 text-center text-main-primary">
              Lunch menu will be updated soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
