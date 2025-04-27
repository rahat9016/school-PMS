import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getCategoryListRequest, getMediaLibraryGalleryRequest } from "@/app/api/api";



// Yup Schema
const schema = yup.object({
  selectedImageIds: yup.array().min(1, "At least one image must be selected"),
  selectedCategory: yup.string().required("Category is required"),
  imageTitles: yup.object(),
});

interface FormValues {
  selectedImageIds: string[];
  selectedCategory: string;
  imageTitles: { [id: string]: string };
}

export default function UploadGalleryImages({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: FormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      selectedImageIds: [],
      selectedCategory: "",
      imageTitles: {},
    },
  });

  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Media Images
//   const { data: mediaImageData, isLoading: loadingImages } = useQuery({
//     queryKey: ["mediaImageData", currentPage],
//     queryFn: () =>
//       getMediaLibraryGalleryRequest({
//         page: currentPage,
//         limit: 9,
//       }),
//     enabled: open, // Only fetch when modal open
//   });

  // Fetch Categories
  const { data: categoryData, isLoading: loadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryListRequest,
    enabled: open,
  });

//   const toggleSelectImage = (id: string) => {
//     const selectedIds = getValues("selectedImageIds");
//     if (selectedIds.includes(id)) {
//       setValue(
//         "selectedImageIds",
//         selectedIds.filter((item) => item !== id)
//       );
//     } else {
//       setValue("selectedImageIds", [...selectedIds, id]);
//     }
//   };

  const handleTitleChange = (id: string, value: string) => {
    const titles = getValues("imageTitles");
    setValue("imageTitles", {
      ...titles,
      [id]: value,
    });
  };

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          reset();
        }
        onOpenChange(open);
      }}
    >
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Select Images</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit((data) => {
            onSubmit?.(data);
          })}
          className="flex flex-col gap-6"
        >
          {/* Category Dropdown */}
          <div>
            <label className="text-sm font-medium">Select Category</label>
            <select
              {...register("selectedCategory")}
              className="w-full border rounded p-2 mt-1"
            >
              <option value="">Select a category</option>
              {categoryData?.data?.map((category: any) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.selectedCategory && (
              <p className="text-red-500 text-sm">{errors.selectedCategory.message}</p>
            )}
          </div>

          {/* Image Gallery */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {loadingImages ? (
              <p>Loading Images...</p>
            ) : (
              mediaImageData?.data?.map((img: any) => {
                console.log(img)
                return (
                    <div
                      key={img.id}
                      onClick={() => toggleSelectImage(img.id)}
                      className={`relative flex flex-col items-center p-2 border rounded cursor-pointer ${
                        getValues("selectedImageIds").includes(img.id)
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {getValues("selectedImageIds").includes(img.id) && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          ✓
                        </div>
                      )}
                      <Image
                        src={img.url}
                        alt={img.title}
                        width={120}
                        height={120}
                        className="object-cover rounded"
                      />
                      <input
                        type="text"
                        placeholder="Edit title"
                        defaultValue={img.title}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleTitleChange(img.id, e.target.value)}
                        className="text-sm border mt-2 px-2 py-1 rounded w-full"
                      />
                    </div>
                  )
              })
            )}
          </div> */}

          {/* Error if no image selected */}
          {errors.selectedImageIds && (
            <p className="text-red-500 text-sm">{errors.selectedImageIds.message}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" className="bg-[#42AD00] hover:bg-green-700 w-32 h-12">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
