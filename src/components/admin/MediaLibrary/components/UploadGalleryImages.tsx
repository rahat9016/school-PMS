import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  getCategoryListRequest,
  getMediaLibraryGalleryRequest,
} from "@/app/api/api";
import galleryImg from "../../../../../public/dashboard/galleryImg.png";
import { Input } from "@/components/ui/input";
import { IData } from "../interface";

const schema = yup.object().shape({
  selectedImageIds: yup.array().of(
    yup.string().required("Image ID is required")
  ).required("At least one image must be selected"),
  selectedCategory: yup.string().required('Category is required.'),
  imageTitles: yup.object().required(), 
});

export default function UploadGalleryImages({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: IData) => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
    reset,
  } = useForm<IData>({
    resolver: yupResolver(schema),
    defaultValues: {
      selectedImageIds: [],
      selectedCategory: "",
      imageTitles: {},
    },
  });

  const { data: mediaImageData, isLoading: loadingImages } = useQuery({
    queryKey: ["mediaImageData"],
    queryFn: () =>
      getMediaLibraryGalleryRequest({
        // page: currentPage,
        limit: 100,
      }),
    enabled: open,
  });

  // Fetch Categories
  const { data: categoryData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryListRequest,
    enabled: open,
  });

  const selectedImageIds = watch("selectedImageIds");
  const imageTitles = watch("imageTitles");

  const toggleSelectImage = (id: string, filename: string) => {
    const selectedIds = getValues("selectedImageIds") || [];
    const titles = getValues("imageTitles") || {};
    let updatedSelectedIds: string[] = [];

    if (selectedIds.includes(id)) {
      updatedSelectedIds = selectedIds.filter((item) => item !== id);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: removed, ...rest } = titles;
      setValue("imageTitles", rest, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } else {
      updatedSelectedIds = [...selectedIds, id];
      setValue(
        "imageTitles",
        {
          ...titles,
          [id]: filename,
        },
        { shouldValidate: true, shouldDirty: true }
      );
    }

    setValue("selectedImageIds", updatedSelectedIds, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleTitleChange = (id: string, value: string) => {
    const titles = getValues("imageTitles") || {};
    setValue(
      "imageTitles",
      {
        ...titles,
        [id]: value,
      },
      { shouldValidate: true, shouldDirty: true }
    );
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
          <DialogTitle className="flex items-center gap-2 text-2xl text-[#363739]">
            <Image src={galleryImg} alt="galleryImg" />
            Gallery
          </DialogTitle>
          <span className="w-full h-[1px] block bg-[#CDCDCD]"></span>
        </DialogHeader>

        <form
          onSubmit={handleSubmit((data) => {
            onSubmit?.(data);
          })}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <Input placeholder="Search..." className="h-8" />
            </div>
            <div>
              <select
                {...register("selectedCategory")}
                className="w-full border border-[#CDCDCD] rounded p-2 px-3 "
              >
                <option value="">-- Select section --</option>
                {categoryData?.data?.map(
                  (category: { _id: string; name: string }) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  )
                )}
              </select>
              {errors.selectedCategory && (
                <p className="text-red-500 text-sm">
                  {errors.selectedCategory.message}
                </p>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loadingImages ? (
              <p>Loading Images...</p>
            ) : (
              mediaImageData?.data?.map(
                (img: { _id: string; filename: string; image: string }) => {
                  return (
                    <div
                      key={img._id}
                      onClick={() => toggleSelectImage(img._id, img.filename)}
                      className={`relative  border-2 rounded cursor-pointer h-[101px] ${
                        getValues("selectedImageIds").includes(img._id)
                          ? "border-main-primary"
                          : ""
                      }`}
                    >
                      <Image
                        src={img?.image}
                        alt={img?.filename}
                        width={171}
                        height={101}
                        className="object-cover rounded h-full w-full"
                      />

                      {selectedImageIds.includes(img._id) && (
                        <input
                          type="text"
                          placeholder="Edit title"
                          required
                          value={imageTitles[img._id] ?? img.filename}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) =>
                            handleTitleChange(img._id, e.target.value)
                          }
                          className="text-sm border mt-2 px-2 py-1 rounded w-11/12  absolute bottom-2 left-2"
                        />
                      )}
                    </div>
                  );
                }
              )
            )}
          </div>

          {/* Error if no image selected */}
          {errors.selectedImageIds && (
            <p className="text-red-500 text-sm">
              {errors.selectedImageIds.message}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#42AD00] hover:bg-green-700 w-32 h-12"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
