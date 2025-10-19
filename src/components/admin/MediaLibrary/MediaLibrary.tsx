"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React, { useState } from "react";
import UploadGalleryImages from "./components/UploadGalleryImages";
import { IData, Tab } from "./interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getMediaLibraryGalleryRequest,
  uploadImageFromGalleryRequest,
} from "@/app/api/api";
import MediaTable from "./components/MediaTable";
import { toast } from "react-toastify";

export default function MediaLibrary() {
  const [tab, setTab] = useState<Tab>("all");
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { mutateAsync } = useMutation({
    mutationFn: uploadImageFromGalleryRequest,
    onSuccess: () => {},
  });

  const { data: mediaImageData, isLoading: loading } = useQuery({
    queryKey: ["mediaImageData", currentPage],
    queryFn: () =>
      getMediaLibraryGalleryRequest({
        page: currentPage,
        limit: 5,
      }),
  });
  const handleSubmit = (data: IData) => {
    const images = Object.entries(data.imageTitles).map(([key, value]) => ({
      imgId: key,
      title: value,
    }));
    const uploadDataFormate = {
      images: images,
      categoryId: data.selectedCategory,
    };
    mutateAsync(uploadDataFormate)
      .then((res) => {
        if (res.success) {
          setOpen(false);
        }
      })
      .catch((error) => {
        toast.error(error?.message, {
          position: "bottom-left",
        });
      });
  };

  return (
    <div>
      <div className="bg-[#0C1132] text-white px-5 lg:px-32 py-7 flex flex-col lg:flex-row items-center justify-between">
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
                  Media Library
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <h1 className="text-3xl text-gray-200 mt-5 font-poppins font-semibold">
              Media Library
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-32 mt-12">
        <UploadGalleryImages
          open={open}
          onOpenChange={setOpen}
          onSubmit={handleSubmit}
        />
        <MediaTable
          setOpen={setOpen}
          tab={tab}
          setTab={setTab}
          data={mediaImageData?.data}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total_page={mediaImageData?.meta?.total_page}
        />
      </div>
    </div>
  );
}
