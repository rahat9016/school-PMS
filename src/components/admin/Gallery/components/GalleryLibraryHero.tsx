import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React, { SetStateAction } from "react";

export default function GalleryLibraryHero({
  setOpen,
}: {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-[#0C1132] text-white px-5 lg:px-32 py-7 flex flex-col lg:flex-row items-center justify-between ">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/dashboard"
                className="text-white hover:text-white"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                className="text-[#F68C25] hover:text-[#F68C25]"
              >
                Gallery
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <h1 className="text-3xl text-gray-200 mt-5 font-poppins font-semibold">
            Gallery
          </h1>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setOpen((prev: boolean) => !prev)}
          type="button"
          className="bg-[#147ECB] text-white px-6 py-2 font-poppins font-normal rounded-md text-sm flex items-center gap-2 "
        >
          <span className="text-3xl">+</span>
          Upload Media
        </button>
      </div>
    </div>
  );
}
