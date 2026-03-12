import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { INewsItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../../../../public/facebook.png";
import google from "../../../../../../public/google-plus.png";
import share from "../../../../../../public/share.png";
import twitter from "../../../../../../public/twitter.png";
import whatsapp from "../../../../../../public/whatsapp.png";
import { scholarsData } from "./data";

export default function PostDetails({ post }: { post: INewsItem | undefined }) {
  return (
    <div>
      <div>
        <div className="mt-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/latest-news-updates"
                    className="font-poppins text-darkGray text-sm"
                  >
                    Latest News & Updates
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={`/latest-news-updates/${post?._id}`}
                    className="font-poppins text-darkGray text-sm"
                  >
                    {post?.title}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-main-primary text-xl lg:text-3xl font-bold mt-8 text-center lg:text-left">
          {post?.title}
        </h1>
        <span className="w-[140px] h-[3px] bg-main-secondary block mt-2 mb-[18px] mx-auto lg:ml-0"></span>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block py-2 px-4 bg-main-primary rounded-full text-white text-sm font-poppins">
              {post?.generalCategory?.name || "General"}
            </span>{" "}
            <span className="w-[2px] h-[24px] bg-darkGray block"></span>{" "}
            <p className="text-darkGray text-sm font-poppins font-normal">
              {post?.eventDate
                ? new Date(post.eventDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4">
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
          {post?.imageUrls?.[0] && (
            <Image
              className="w-full rounded-xl mb-6"
              src={post.imageUrls[0]}
              alt={post?.title || "News image"}
              width={800}
              height={450}
            />
          )}
          {post?.description && (
            <div
              className="font-poppins font-normal text-sm lg:text-base text-black-dark mt-3 lg:mt-6 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          )}
        </div>
        <div>
          <p className="font-poppins font-medium text-lg text-black-dark mt-3 lg:mb-6">
            Here’s what our scholars have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
