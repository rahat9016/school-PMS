"use client";
import UploadImageModal from "@/components/shared/UploadMediaImage";
import { useState } from "react";
import GalleryLibraryHero from "./components/GalleryLibraryHero";
import MediaFiles from "./components/MediaFiles";

export default function GalleryLibrary() {
  const [open, setOpen] = useState(false);
  // const { mutateAsync } = usePost("/media-library/gallery");

  const onSubmit = (
    data: {
      file: File;
      name: string;
      preview: string;
    }[],
  ) => {
    const formData = new FormData();

    data.forEach((item) => {
      if (item.file instanceof File) {
        formData.append("gallery", item.file);
        formData.append("names", item.name);
      } else {
        console.error("Not a valid file:", item.file);
      }
    });

    // mutateAsync(formData).then((res) => {
    //   if (res.success) {
    //     setOpen(false);
    //     toast.success(res.message, {
    //       position: "bottom-left",
    //     });
    //   }
    // });
  };
  return (
    <div>
      <GalleryLibraryHero setOpen={setOpen} />
      <UploadImageModal
        open={open}
        onOpenChange={setOpen}
        onSubmit={onSubmit}
      />
      <MediaFiles />
    </div>
  );
}
