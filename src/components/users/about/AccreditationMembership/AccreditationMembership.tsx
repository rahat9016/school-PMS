import HeroSection from "@/components/shared/HeroSection";
import React from "react";
import herobg from "../../../../../public/about/AccreditationMembershipHeroImg.jpg";
import AccreditationMembershipSection from "./components/AccreditationMembershipSection";
export default function AccreditationMembership() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Accreditation & Membership"
        className="bg-cover h-[280px]"
      />
      <AccreditationMembershipSection/>
    </div>
  );
}
