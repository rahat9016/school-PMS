"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGet } from "@/hooks/useGet";
import Image from "next/image";

interface IManageContentItem {
  _id: string;
  file?: string;
  fileUrl?: string;
}

export default function DevelopmentPolicy() {
  const { data, isLoading } = useGet<IManageContentItem>(
    "/manage-content",
    ["manage-content", "CHILD_PROTECTION", "users"],
    { type: "CHILD_PROTECTION" },
  );

  const fallbackFile =
    "/Child_Protection_and_Student_Development_Policy_2025.pdf";
  const contentUrl = data?.data?.fileUrl || data?.data?.file || fallbackFile;
  const normalizedUrl = contentUrl.toLowerCase().split("?")[0].split("#")[0];
  const isPdf = normalizedUrl.endsWith(".pdf");

  return (
    <div className="bg-white py-20 lg:py-[104px]">
      <div className="container">
        <h1
          className={`text-black font-poppins mx-auto font-semibold text-2xl mt-4 lg:text-5xl text-center lg:w-[60%] `}
        >
          Child Protection and Student Development Policy
        </h1>
        <span className="block bg-main-secondary h-[3px] w-[47.5px] my-5 lg:my-8 mx-auto"></span>
        {isLoading ? (
          <Skeleton className="w-full h-[80vh] min-h-[500px] rounded-lg" />
        ) : isPdf ? (
          <div className="w-full max-w-full overflow-x-auto">
            <iframe
              src={contentUrl}
              className="w-full h-[80vh] min-h-[500px] rounded-lg shadow-md"
              style={{ border: "none" }}
            ></iframe>
          </div>
        ) : (
          <Image
            src={contentUrl}
            alt="Child Protection and Student Development Policy"
            width={1600}
            height={1200}
            className="mx-auto w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
