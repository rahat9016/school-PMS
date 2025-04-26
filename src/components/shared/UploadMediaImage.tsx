import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import uploadImgVdoIcon from "../../../public/dashboard/upload-img-video.png";
import UploadSVG from "../../../public/dashboard/UploadSVG.png";
const schema = yup.object({
  files: yup
    .mixed<FileList>()
    .required("At least one file is required")
    .test(
      "fileSize",
      "Each file must be ≤ 10MB",
      (value) =>
        value && [...value].every((file) => file.size <= 10 * 1024 * 1024)
    )
    .test(
      "fileType",
      "Only JPG, JPEG, PNG allowed",
      (value) =>
        value &&
        [...value].every((file) =>
          ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
        )
    ),
});

type FormData = {
  files: FileList;
};

export default function UploadImageModal({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?:
    | ((
        previews: {
          file: File;
          name: string;
          preview: string;
        }[]
      ) => void | undefined)
    | undefined;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [previews, setPreviews] = useState<
    { file: File; name: string; preview: string }[]
  >([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).map((file) => ({
      file,
      name: file.name,
      preview: URL.createObjectURL(file),
    }));

    // Append new files to previous ones
    setPreviews((prev) => [...prev, ...newFiles]);
  };

  const handleNameChange = (index: number, newName: string) => {
    setPreviews((prev) =>
      prev.map((item, i) => (i === index ? { ...item, name: newName } : item))
    );
  };

  const handleDeleteImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };
  useEffect(()=> {
    if (!open) {
      reset();
      setPreviews([]);
    }
  }, [open, reset])

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          reset();
          setPreviews([]);
        }
        onOpenChange(open);
      }}
    >
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-[#363739]">
            <Image src={uploadImgVdoIcon} alt="uploadImgVdoIcon" />
            Upload Media
          </DialogTitle>
          <span className="w-full h-[1px] block bg-[#CDCDCD]"></span>
          {previews.length <= 0 && (
            <p className="text-sm text-[#363739] mt-10">
              JPG, JPEG, PNG — Max 10MB per image
            </p>
          )}
        </DialogHeader>
        <form
          onSubmit={handleSubmit(() => {
            onSubmit?.(previews);
          })}
          className="flex flex-col items-center justify-center gap-4"
        >
          {previews.length <= 0 && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full text-center h-[255px] flex flex-col items-center justify-center">
              <input
                type="file"
                {...register("files")}
                multiple
                className="hidden"
                id="fileInput"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
              />
              <Image src={UploadSVG} alt="UploadSVG" />
              <p className="text-sm text-[#363739] mb-2">
                Drop file here or browse from your computer
              </p>
              <label
                htmlFor="fileInput"
                className="cursor-pointer bg-[#147ECB] text-white py-2 px-4 rounded-md font-medium font-poppins text-sm"
              >
                Upload Image
              </label>
              {errors.files && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.files.message}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {previews.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-2 bg-gray-100 p-2 rounded"
              >
                <button
                  type="button"
                  className="absolute top-1 right-1 text-red-500"
                  onClick={() => handleDeleteImage(index)}
                >
                  <X size={16} />
                </button>
                <Image
                  src={item.preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-md shadow"
                  width={96}
                  height={96}
                />
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  className="text-sm border px-2 py-1 rounded w-full"
                />
              </div>
            ))}
          </div>

          {previews.length > 0 && (
            <Button
              type="submit"
              className="bg-[#42AD00] hover:bg-[#42AD00]w-[126px] h-[48px]"
            >
              Post Now
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
