"use client";
import Image from "next/image";
import React from "react";
import profile from "../../../../public/profile.png";
import gallery from "../../../../public/gallery.png";
import Edit_light from "../../../../public/Edit_light.png";
import document from "../../../../public/dashboard/document.png";
import announch from "../../../../public/dashboard/announch.png";
import callender from "../../../../public/dashboard/callender.png";
import dgallery from "../../../../public/dashboard/gallery.png";
import cap from "../../../../public/dashboard/cap.png";
import lunch from "../../../../public/dashboard/lunch.png";
import media from "../../../../public/dashboard/media.png";
import school from "../../../../public/dashboard/school.png";
import schoolb from "../../../../public/dashboard/schoolb.png";
import summer from "../../../../public/dashboard/summer.png";
import { Ellipsis } from "lucide-react";
import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
const features = [
  {
    title: "Manage Articles",
    desc: "Write, edit, and publish news updates.",
    icon: document,
    location: "/dashboard/"
  },
  {
    title: "Media Library",
    desc: "Upload and organize images & videos.",
    icon: media,
    location: "/dashboard/media-library"
  },
  {
    title: "School Board",
    desc: "Update and manage school board images.",
    icon: school,
    location: "/dashboard/"
  },
  {
    title: "Lunch Menu",
    desc: "Write, edit, and publish news updates.",
    icon: lunch,
    location: "/dashboard/"
  },
  {
    title: "School Profile",
    desc: "Update and maintain school profile images.",
    icon: schoolb,
    location: "/dashboard/"
  },
  {
    title: "Student Council",
    desc: "Add members, update photos & details.",
    icon: cap,
    location: "/dashboard/"
  },
  {
    title: "Summer Camp",
    desc: "Upload images and desc. for summer camps.",
    icon: summer,
    location: "/dashboard/"
  },
  {
    title: "PAIS Post",
    desc: "Publish announcements and updates.",
    icon: announch,
    location: "/dashboard/"
  },
  {
    title: "Calendars",
    desc: "Upload and manage the academic & activity schedule.",
    icon: callender,
    location: "/dashboard/"
  },
  {
    title: "Gallery",
    desc: "Browse, upload, and relive student moments & memories",
    icon: dgallery,
    location: "/dashboard/gallery"
  },
];

export default function Dashboard() {
  const router = useRouter();
  const { userInformation } = useAppSelector((state) => state.auth);
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        {/* Top Header */}
        <div className="bg-[#0C1132] text-white px-5 lg:px-32 py-14 flex flex-col lg:flex-row items-start justify-between h-[260px]">
          <div className="flex items-center gap-4">
            <div className="w-[64px] h-[64px] object-cover rounded-full border-2 border-[#F68C25]">
              <Image
                src={profile}
                alt="avatar"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">
                Hello {userInformation?.fullName}! 👋
              </p>
              <p className="text-sm text-gray-200">
                Welcome to PAIS Admin Dashboard
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() =>  router.push('/dashboard/media-library')} className="bg-main-primary text-white px-4 py-2 font-poppins font-normal rounded-md text-sm flex items-center gap-2">
              <Image src={gallery} alt={"gallery"} width={16} height={16} />
              Manage Media
            </button>
            <button className="bg-[#147ECB] text-white px-4 py-2 font-poppins font-normal rounded-md text-sm flex items-center gap-2">
              <Image src={Edit_light} alt={"gallery"} width={16} height={16} />
              Write Article
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 pb-5 lg:px-32 mt-5 lg:-mt-20">
          {features?.map((item, index) => (
            <div
              key={index}
              className=" group bg-white hover:bg-main-primary duration-300 rounded-xl py-12 pr-12 pl-5 border border-[#CDCDCD] group-hover:border-none transition relative"
            >
              <Ellipsis onClick={() => router.push(item.location)} className="absolute right-4 top-4 text-[#9B9B9C] group-hover:text-white" />
              <div className="flex items-center gap-4 relative">
                <div className="bg-[#EFF0EF] group-hover:bg-[#F68C25] duration-300 w-[72px] h-[64px] flex items-center justify-center rounded-lg">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium font-poppins text-[#363739] group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#363739] mt-2 font-poppins group-hover:text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
