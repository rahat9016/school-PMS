"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGet } from "@/hooks/useGet";
import Image from "next/image";

interface IPaisPerspective {
  _id: string;
  title: string;
  image?: string;
  imageUrl?: string;
}

export default function PAISPostSection() {
  const { data, isLoading } = useGet<IPaisPerspective[]>("/pais-perspective", [
    "pais-perspective",
    "user-section",
  ]);

  const paisData = data?.data ?? [];

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
      }}
      className="py-10"
    >
      <div className="container">
        <h1 className="text-main-primary font-semibold text-[30px] font-poppins text-center">
          PAIS<span className="text-main-secondary">Post</span>
        </h1>
        <p className="text-black-dark font-normal text-sm lg:text-lg font-poppins mt-4 mb-5 lg:mb-10 text-center">
          The Official Newsletter of Pan-Asia International School
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#FCFCFD] border border-[#CDCDCD] p-10 rounded-[16px]"
                >
                  <Skeleton className="h-[300px] w-full" />
                  <Skeleton className="h-5 w-3/4 mt-[10px] mx-auto" />
                </div>
              ))
            : paisData.map((item) => {
                const imageSrc = item.imageUrl || item.image;

                if (!imageSrc) return null;

                return (
                  <div
                    key={item._id}
                    className="bg-[#FCFCFD] border border-[#CDCDCD] p-10 rounded-[16px]"
                  >
                    <Image
                      src={imageSrc}
                      alt={item.title || "PAISPost"}
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover"
                    />
                    <h3 className="text-center mt-[10px] text-[#6B6B6B] text-[14px] font-normal line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
