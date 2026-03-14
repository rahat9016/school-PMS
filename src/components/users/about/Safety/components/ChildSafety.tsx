"use client"
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { useGet } from "@/hooks/useGet";
import SaftyImg from "../../../../../../public/Facilities/sdcChart.jpg";

interface IManageContentItem {
  _id: string;
  file?: string;
  fileUrl?: string;
}

export default function ChildSafety() {
  const { data, isLoading } = useGet<IManageContentItem>(
    "/manage-content",
    ["manage-content", "CHILD_SAFETY", "users"],
    { type: "CHILD_SAFETY" },
  );

  return (
    <div className="py-20 lg:py-[140px] bg-white">
      <div className="container">
        <p className="font-medium text-sm font-poppins text-main-secondary text-center">
          Safety
        </p>
        <h1
          className={`text-black font-poppins font-semibold text-2xl mt-4 lg:text-5xl text-center`}
        >
          Child Safety
        </h1>
        {isLoading ? (
          <Skeleton className="mx-auto mt-14 h-[320px] w-full max-w-5xl" />
        ) : (
          <Image
            src={data?.data?.fileUrl || SaftyImg}
            alt="Child Safety"
            width={1200}
            height={800}
            className="mx-auto mt-14 h-auto w-full max-w-5xl"
          />
        )}
      </div>
    </div>
  );
}
