"use client";
import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../../public/newsEvents/latestNewsHeroBg.jpg";
import { useParams } from "next/navigation";
import filterData from "@/lib/data/data";
import PostDetails from "./components/PostDetails";

export default function LatestNewsUpdatesDetails() {
  const { id } = useParams();
  const post = filterData.posts.find((post) => post.id === Number(id));
  return (
    <div className="bg-white">
      <HeroSection
        img={herobg}
        title="Latest News & Updates"
        className="bg-cover h-[280px]"
      />
      <div className="flex items-start gap-4">
        <div className="w-8/12">
          <PostDetails post={post} />
        </div>
        <div className="w-4/12"></div>
      </div>
    </div>
  );
}
