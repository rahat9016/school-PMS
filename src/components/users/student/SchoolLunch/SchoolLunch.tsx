"use client";

import HeroSection from "@/components/shared/HeroSection";
import { useGet } from "@/hooks/useGet";
import { useMemo } from "react";
import herobg from "../../../../../public/academic/SchoolLunchHeroBg.jpg";
import LunchMenuSection from "./components/LunchMenuSection";
import LunchPrimaryMenuSection from "./components/LunchPrimaryMenuSection";
import LunchSection from "./components/LunchSection";

type LunchMenuType =
  | "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU"
  | "PRIMARY_AND_SECONDARY_LUNCH_MENU";

interface IManageContentItem {
  _id: string;
  type: LunchMenuType;
  file?: string;
  fileUrl?: string;
  images?: string[];
  imageUrls?: string[];
}

const getLunchSlides = (
  items?: IManageContentItem[] | IManageContentItem,
): string[] => {
  const normalizedItems = Array.isArray(items) ? items : items ? [items] : [];

  return normalizedItems.flatMap((item) => {
    if (item.imageUrls?.length) {
      return item.imageUrls.filter((url): url is string => Boolean(url));
    }

    const legacyUrl = item.fileUrl || item.file;
    return legacyUrl ? [legacyUrl] : [];
  });
};

export default function SchoolLunch() {
  const { data: preschoolData, isLoading: isPreschoolLoading } = useGet<
    IManageContentItem[] | IManageContentItem
  >("/lunch-menu", ["lunch-menu", "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU"], {
    type: "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU",
  });

  const { data: primaryData, isLoading: isPrimaryLoading } = useGet<
    IManageContentItem[] | IManageContentItem
  >("/lunch-menu", ["lunch-menu", "PRIMARY_AND_SECONDARY_LUNCH_MENU"], {
    type: "PRIMARY_AND_SECONDARY_LUNCH_MENU",
  });

  const preschoolSlides = useMemo(
    () => getLunchSlides(preschoolData?.data),
    [preschoolData?.data],
  );

  const primarySlides = useMemo(
    () => getLunchSlides(primaryData?.data),
    [primaryData?.data],
  );

  return (
    <div>
      <HeroSection
        img={herobg}
        title="School Lunch"
        className="bg-cover h-[280px]"
      />
      <LunchSection />
      <LunchMenuSection
        slides={preschoolSlides}
        isLoading={isPreschoolLoading}
      />
      <LunchPrimaryMenuSection
        slides={primarySlides}
        isLoading={isPrimaryLoading}
      />
    </div>
  );
}
