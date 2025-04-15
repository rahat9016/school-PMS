'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    file: yup
      .mixed<FileList>()
      .required("A file is required")
      .test("fileSize", "The file is too large (max 10MB)", (value) => {
        return value && value.length > 0 && value[0].size <= 10 * 1024 * 1024;
      })
      .test("fileType", "Unsupported file format", (value) => {
        return value && value.length > 0 && ["image/jpeg", "image/jpg", "image/png"].includes(value[0].type);
      }),
  });
  

type FormData = yup.InferType<typeof schema>;

export default function UploadImageModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { file: FileList }) => {
    const file = data.file[0];
    console.log("Uploaded File:", file);
    onOpenChange(false);
    reset();
  };
  

  return (
    <Dialog open={open} onOpenChange={(open) => {
      if (!open) reset();
      onOpenChange(open);
    }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Media</DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">File format: JPG, PNG, JPEG — Max 10MB per file</p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full text-center">
            <input
              type="file"
              {...register("file")}
              className="hidden"
              id="fileInput"
              accept=".jpg, .jpeg, .png"
            />
            <label htmlFor="fileInput" className="cursor-pointer text-blue-600 underline">
              Click to choose or drag & drop
            </label>
            {errors.file && <p className="text-red-500 text-sm mt-2">{errors.file.message}</p>}
          </div>

          <Button type="submit">Upload Image</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
