"use client";

import HeroSection from "@/components/shared/HeroSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useGet } from "@/hooks/useGet";
import Image from "next/image";
import herobg from "../../../../../public/about/SchoolBoardHeroBg.jpg";
import bgShape from "../../../../../public/about/bgShape.png";

interface IManageContentItem {
  _id: string;
  file?: string;
  fileUrl?: string;
}

export default function SchoolBoard() {
  const { data, isLoading } = useGet<IManageContentItem>(
    "/manage-content",
    ["manage-content", "SCHOOL_BOARD", "users"],
    { type: "SCHOOL_BOARD" },
  );

  return (
    <div>
      <HeroSection
        img={herobg}
        title="School Board & Leadership"
        className="bg-cover h-[280px]"
      />
      <div className="bg-white">
        <div className="container py-10 lg:py-[72px]">
          <p className="text-darkGray font-poppins font-light text-base">
            The Pan-Asia International School Board and Leadership Team provide
            strategic guidance and oversight for the school. Together, they
            ensure high-quality education, uphold the school’s vision and
            values, and maintain a safe and nurturing environment for all
            students.
          </p>
        </div>
      </div>
      <div
        className="bg-main-primary  h-[348px] lg:h-[448px]"
        style={{
          backgroundImage: `url(${bgShape.src})`,
        }}
      ></div>
      <div>
        {isLoading ? (
          <div className="w-10/12 lg:w-7/12 mx-auto -mt-56 mb-20 lg:mb-52">
            <Skeleton className="w-full h-[320px] lg:h-[520px] rounded-none" />
          </div>
        ) : (
          data?.data && (
            <div className="w-10/12 lg:w-7/12 mx-auto -mt-56 mb-20 lg:mb-52">
              <Image
                src={data?.data?.fileUrl || "/placeholder.jpg"}
                alt="board"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
