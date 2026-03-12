"use client";

import HeroSection from "@/components/shared/HeroSection";
import { useGet } from "@/hooks/useGet";
import { INewsItem } from "@/types";
import { useParams } from "next/navigation";
import herobg from "../../../../../public/newsEvents/UED.jpg";
import StudentAchievementAwards from "./components/StudentAchievementAwards";

export default function UpcomingEventsDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGet<INewsItem>(
    `/news-events/${id}`,
    ["news-event", id as string],
    {},
    { enabled: !!id },
  );

  const event = data?.data;

  if (isLoading) {
    return (
      <div className="container h-[600px] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container h-[600px] flex items-center justify-center">
        <p>Event not found!</p>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        img={herobg}
        title="Upcoming Events Details"
        className="bg-cover h-[280px]"
      />
      <StudentAchievementAwards event={event} />
    </div>
  );
}
