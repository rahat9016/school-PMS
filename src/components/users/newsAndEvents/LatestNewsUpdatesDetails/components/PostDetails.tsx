import React from "react";
import { IPost } from "../../LatestNewsUpdates/components/LatestNews";
import Image from "next/image";

export default function PostDetails({ post }: { post: IPost | undefined }) {
  return (
    <div>
      <div className="container">
        <h1 className="text-main-primary text-xl lg:text-3xl font-bold mt-8">
          {post?.title}
        </h1>
        <span className="w-[140px] h-[3px] bg-main-secondary block mt-2 mb-[18px]"></span>
        <div>
          <div className="flex items-center gap-2">
            <span className="block py-2 px-4 bg-main-primary rounded-full text-white text-sm font-poppins">
              School Life
            </span>{" "}
            <span className="w-[2px] h-[24px] bg-darkGray block"></span>{" "}
            <p className="text-darkGray text-sm font-poppins font-normal">
              {post?.date}
            </p>
          </div>
        </div>
        <span className="w-full h-[2px] bg-pureWhite block mt-4 mb-8"></span>
        <div>
            <Image className="w-full" src={post?.image|| ""} alt={"PAIS Victorious in World Scholar’s Cup"} />
        </div>
      </div>
    </div>
  );
}
