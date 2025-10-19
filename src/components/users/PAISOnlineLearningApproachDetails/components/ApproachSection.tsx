import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../../../../../public/facebook.png";
import google from "../../../../../public/google-plus.png";
import whatsapp from "../../../../../public/whatsapp.png";
import twitter from "../../../../../public/twitter.png";
import share from "../../../../../public/share.png";
import { ILevel } from "../../PAISOnlineLearningApproach/components/OLASection";
import InputLabel from "@/components/shared/InputLabel";
import PasswordInput from "@/components/shared/PasswordInput";
import { Button } from "@/components/ui/button";

export default function ApproachSection({
  post,
}: {
  post: ILevel | undefined;
}) {
  return (
    <div>
      <div>
        <div className="mt-10 overflow-x-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/pais-online-learning-approach"
                    className="font-poppins text-darkGray text-sm"
                  >
                    PAIS Online Learning Approach (OLA)
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={`/pais-online-learning-approach/${post?.id}`}
                    className="font-poppins text-main-primary text-sm"
                  >
                    {post?.title} - {post?.tag}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-main-primary text-xl lg:text-3xl font-bold mt-8 text-center lg:text-left">
          {post?.title}
        </h1>
        <span className="w-[140px] h-[3px] bg-main-secondary block mt-2 mb-[18px] mx-auto lg:ml-[0px]"></span>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block py-2 px-4 bg-main-primary rounded-full text-white text-sm font-poppins">
              PAIS OLA
            </span>{" "}
            <span className="w-[2px] h-[24px] bg-darkGray block"></span>{" "}
            <p className="text-darkGray text-sm font-poppins font-normal">
              {post?.date}
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
        <div>
          <p className="font-poppins font-medium text-lg text-black-dark mb-6">
            Here’s what our scholars have to say about their experience.
          </p>
        </div>
        <div className="bg-pureWhite px-4 py-6 rounded-2xl shadow-xl lg:mb-10">
          <div className="w-full lg:w-1/2">
            <InputLabel label="Password" required />
            <PasswordInput />
            <Button className="h-[52px] w-[121px] bg-main-primary hover:bg-main-primary mt-4">
              Enter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
