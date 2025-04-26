"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React, { useState } from "react";
import UploadImageModal from "../../shared/UploadMediaImage";

export default function MediaLibrary() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-[#0C1132] text-white px-5 lg:px-32 py-7 flex flex-col lg:flex-row items-center justify-between ">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard" className="text-white hover:text-white">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#"  className="text-[#F68C25] hover:text-[#F68C25]">Media Library</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <h1 className="text-3xl text-gray-200 mt-5 font-poppins font-semibold">Media Library</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={() => setOpen(true)} className="bg-[#147ECB] text-white px-6 py-2 font-poppins font-normal rounded-md text-sm flex items-center gap-2 ">
            <span className="text-3xl">+</span>
              Upload Media
          </button>
        </div>
        <UploadImageModal open={open} onOpenChange={setOpen} />
      </div>
    </div>
  );
}
