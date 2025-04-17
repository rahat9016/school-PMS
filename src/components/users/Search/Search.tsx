import React, { Suspense } from "react";
import HeroSection from "@/components/shared/HeroSection";
import herobg from "../../../../public/searchHero.png";
import SearchResult from "./components/SearchResult";
export default function Search() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Search Result"
        className="bg-cover h-[280px]"
      />
      <Suspense fallback={<p>Loading search...</p>}>
      <SearchResult />
      </Suspense>
    </div>
  );
}
