import React from "react";
import { IPost } from "../../LatestNewsUpdates/components/LatestNews";
import Image from "next/image";
import facebook from "../../../../../../public/facebook.png";
import google from "../../../../../../public/google-plus.png";
import whatsapp from "../../../../../../public/whatsapp.png";
import twitter from "../../../../../../public/twitter.png";
import share from "../../../../../../public/share.png";
import { scholarsData } from "./data";

export default function PostDetails({ post }: { post: IPost | undefined }) {
  return (
    <div>
      <div>
        <h1 className="text-main-primary text-xl lg:text-3xl font-bold mt-8">
          {post?.title}
        </h1>
        <span className="w-[140px] h-[3px] bg-main-secondary block mt-2 mb-[18px]"></span>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block py-2 px-4 bg-main-primary rounded-full text-white text-sm font-poppins">
              School Life
            </span>{" "}
            <span className="w-[2px] h-[24px] bg-darkGray block"></span>{" "}
            <p className="text-darkGray text-sm font-poppins font-normal">
              {post?.date}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-poppins font-medium text-sm text-[#4A7FE9]">
                Leave a comment
              </p>
              <span className="w-[112px] h-[1px] bg-[#4A7FE9] block"></span>
            </div>
            <div className="flex gap-3 items-center">
              <Image className="w-6 h-6" src={share} alt={"share"} />
              <p className="font-poppins font-medium text-sm text-black-dark">
                Share
              </p>
              <Image className="w-6 h-6" src={facebook} alt={"facebook"} />
              <Image className="w-6 h-6" src={google} alt={"google"} />
              <Image className="w-6 h-6" src={whatsapp} alt={"whatsapp"} />
              <Image className="w-6 h-6" src={twitter} alt={"twitter"} />
            </div>
          </div>
        </div>
        <span className="w-full h-[2px] bg-pureWhite block mt-4 mb-8"></span>
        <div className="mb-[64px]">
          <Image
            className="w-full rounded-xl mb-6"
            src={post?.image || ""}
            alt={"PAIS Victorious in World Scholar’s Cup"}
          />
          {post?.content && (
            <p className="font-poppins font-medium text-base text-main-primary">
              {post?.content}
            </p>
          )}
          {post?.content2 && (
            <p className="font-poppins font-normal text-base text-black-dark mt-6">
              {post?.content2}
            </p>
          )}
          {post?.content3 && (
            <p className="font-poppins font-normal text-base text-black-dark mt-6">
              {post?.content3}
            </p>
          )}
        </div>
        <div>
          <p className="font-poppins font-medium text-lg text-black-dark mb-6">
            Here’s what our scholars have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {scholarsData.map((data, index) => (
            <div key={index} className="shadow-md rounded-xl">
              <Image
                className="w-full rounded-xl"
                src={data?.img}
                alt={`${data.name}`}
              />
              <div className="p-4 text-center">
                <h3 className="text-black text-sm lg:text-base font-medium text-center leading-[28px] w-full lg:w-8/12 mx-auto">
                  {data.name}
                </h3>
                <p className="font-poppins font-medium text-sm text-mediumGray ">
                  {`${data?.grade}`}
                </p>
                <span className="w-[36px] h-[3px] bg-main-secondary block my-4 mx-auto"></span>
                <p className="font-poppins font-normal text-sm text-mediumGray pb-5">
                  {`${data?.desc}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
