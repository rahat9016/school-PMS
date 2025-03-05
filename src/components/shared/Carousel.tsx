"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";

export const PrevButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-black-dark bg-white p-1 lg:p-2 rounded-full shadow-lg hover:bg-gray-700"
    onClick={onClick}
  >
    <ChevronLeft className="text-base lg:text-2xl" />
  </button>
);

export const NextButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-black-dark bg-white p-1 lg:p-2 rounded-full shadow-lg hover:bg-gray-700"
    onClick={onClick}
  >
    <ChevronRight className="text-base lg:text-2xl" />
  </button>
);

export const DotButton = ({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) => (
  <button
    className={`w-3 h-3 mx-1 rounded-full ${
      isSelected ? "bg-main-primary" : "bg-white"
    } hover:bg-blue-400`}
    onClick={onClick}
  />
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = ({ slides, className }: { slides: StaticImageData[]; className?: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    // align: "start", 
    // slidesToScroll: 1,
    // containScroll: "trim",
  });

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", () =>
        setSelectedIndex(emblaApi.selectedScrollSnap())
      );
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map(
            (
              src: string | StaticImport,
              index: React.Key | null | undefined
            ) => (
              <div className={cn(`flex-shrink-0 w-full px-2`, className)} key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            )
          )}
        </div>
      </div>
      <PrevButton onClick={() => emblaApi && emblaApi.scrollPrev()} />
      <NextButton onClick={() => emblaApi && emblaApi.scrollNext()} />
      <div className="flex justify-center absolute bottom-10 left-1/2 -translate-x-1/2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            isSelected={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
