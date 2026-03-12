"use client";
import HeroSection from "@/components/shared/HeroSection";
import { useGet } from "@/hooks/useGet";
import { INewsItem } from "@/types";
import { useParams } from "next/navigation";
import herobg from "../../../../../public/newsEvents/latestNewsHeroBg.jpg";
import PostDetails from "./components/PostDetails";
import Recent from "./components/Recent";

export default function LatestNewsUpdatesDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGet<INewsItem>(
    `/news-events/${id}`,
    ["news-event", id as string],
    {},
    { enabled: !!id },
  );

  const post = data?.data;

  if (isLoading) {
    return (
      <div className="container h-[600px] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!post)
    return (
      <div className="container h-[600px] flex items-center justify-center">
        <p>Content not found!</p>
      </div>
    );
  return (
    <div className="bg-white">
      <HeroSection
        img={herobg}
        title="Latest News & Updates"
        className="bg-cover h-[280px]"
      />
      <div className="container flex flex-col lg:flex-row items-start gap-4">
        <div className="w-full lg:w-[70%]">
          <PostDetails post={post} />
        </div>
        <div className="w-full lg:w-[30%]">
          <Recent />
        </div>
      </div>
      <div>
        <p className="text-center text-main-secondary font-medium font-poppins text-base mt-6 pb-10 px-3 lg:px-0">
          Facilitators Ryan and Marno acted as judges during the debate
          competitions.
        </p>
      </div>
    </div>
  );
}
