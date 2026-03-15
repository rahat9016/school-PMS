"use client";

import InputLabel from "@/components/shared/InputLabel";
import { MultipleImageUploadController } from "@/components/shared/MultipleImageFileInput";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGet } from "@/hooks/useGet";
import { usePatch } from "@/hooks/usePatch";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type LunchMenuType =
  | "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU"
  | "PRIMARY_AND_SECONDARY_LUNCH_MENU";

interface IManageContentItem {
  _id: string;
  type: LunchMenuType;
  file?: string;
  fileUrl?: string;
  images?: string[];
  imageUrls?: string[];
}

interface IImageEntry {
  url: string;
  imageName: string;
  item: IManageContentItem;
}

interface LunchMenuFormValues {
  preschoolAndKindergartenImages: File[];
  primaryAndSecondaryImages: File[];
}

const sectionConfig: {
  type: LunchMenuType;
  title: string;
  fieldName: keyof LunchMenuFormValues;
}[] = [
  {
    type: "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU",
    title: "Preschool & Kindergarten Lunch Menu",
    fieldName: "preschoolAndKindergartenImages",
  },
  {
    type: "PRIMARY_AND_SECONDARY_LUNCH_MENU",
    title: "Primary & Secondary Lunch Menu",
    fieldName: "primaryAndSecondaryImages",
  },
];

const sectionPayloadType: Record<LunchMenuType, LunchMenuType> = {
  PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU:
    "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU",
  PRIMARY_AND_SECONDARY_LUNCH_MENU: "PRIMARY_AND_SECONDARY_LUNCH_MENU",
};

export default function LunchMenuPreview() {
  const methods = useForm<LunchMenuFormValues>({
    defaultValues: {
      preschoolAndKindergartenImages: [],
      primaryAndSecondaryImages: [],
    },
  });

  const {
    data: preschoolData,
    isLoading: isPreschoolLoading,
    refetch: refetchPreschool,
  } = useGet<IManageContentItem[] | IManageContentItem>(
    "/lunch-menu",
    ["lunch-menu", "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU"],
    { type: "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU" },
  );

  const {
    data: primaryData,
    isLoading: isPrimaryLoading,
    refetch: refetchPrimary,
  } = useGet<IManageContentItem[] | IManageContentItem>(
    "/lunch-menu",
    ["lunch-menu", "PRIMARY_AND_SECONDARY_LUNCH_MENU"],
    { type: "PRIMARY_AND_SECONDARY_LUNCH_MENU" },
  );

  const { mutateAsync: updateLunchMenu, isPending: isUpdating } =
    usePatch<IManageContentItem>(() => {
      refetchPreschool();
      refetchPrimary();
    }, [["lunch-menu"]]);

  const preschoolItems = Array.isArray(preschoolData?.data)
    ? preschoolData?.data
    : preschoolData?.data
      ? [preschoolData.data]
      : [];

  const primaryItems = Array.isArray(primaryData?.data)
    ? primaryData?.data
    : primaryData?.data
      ? [primaryData.data]
      : [];

  const getSectionItems = (type: LunchMenuType) => {
    return type === "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU"
      ? preschoolItems
      : primaryItems;
  };

  const getSectionLoading = (type: LunchMenuType) => {
    return type === "PRESCHOOL_AND_KINDERGARTEN_LUNCH_MENU"
      ? isPreschoolLoading
      : isPrimaryLoading;
  };

  const getImageNameFromUrl = (url?: string) => {
    if (!url) return "";
    const pathname = url.split("?")[0].split("#")[0];
    return pathname.split("/").pop() || "";
  };

  const getImageEntries = (item: IManageContentItem): IImageEntry[] => {
    if (item.imageUrls?.length) {
      return item.imageUrls
        .filter((url): url is string => Boolean(url))
        .map((url, index) => ({
          url,
          imageName: item.images?.[index] || getImageNameFromUrl(url),
          item,
        }))
        .filter((entry) => Boolean(entry.imageName));
    }

    const legacyUrl = item.fileUrl || item.file;
    if (!legacyUrl) return [];

    const imageName = getImageNameFromUrl(legacyUrl);
    if (!imageName) return [];

    return [{ url: legacyUrl, imageName, item }];
  };

  const handleDelete = async (item: IManageContentItem, imageName: string) => {
    if (!imageName) {
      toast.error("Image name not found");
      return;
    }

    const formData = new FormData();
    formData.append("type", item.type);
    formData.append("deletedImages", JSON.stringify([imageName]));

    try {
      await updateLunchMenu({
        url: `/lunch-menu/${item._id}`,
        data: formData,
        config: {
          headers: { "Content-Type": "multipart/form-data" },
        },
      });
      toast.success("Lunch menu image deleted successfully");
    } catch {
      return;
    }
  };

  const handleUploadSection = async (
    type: LunchMenuType,
    fieldName: keyof LunchMenuFormValues,
  ) => {
    const payloadType = sectionPayloadType[type];
    const sectionItems = getSectionItems(type);
    const sectionId = sectionItems[0]?._id;

    const fieldValue = methods.getValues(fieldName) || [];
    const selectedFiles = fieldValue.filter(
      (item): item is File => item instanceof File,
    );

    if (!selectedFiles.length) {
      toast.error("Please select at least one image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("type", payloadType);

      selectedFiles.forEach((file) => {
        formData.append("images", file);
      });

      if (sectionId) {
        formData.append("deletedImages", JSON.stringify([]));
        await updateLunchMenu({
          url: `/lunch-menu/${sectionId}`,
          data: formData,
          config: {
            headers: { "Content-Type": "multipart/form-data" },
          },
        });
      } else {
        formData.append("deletedImages", JSON.stringify([]));
        await updateLunchMenu({
          url: "/lunch-menu",
          data: formData,
          config: {
            headers: { "Content-Type": "multipart/form-data" },
          },
        });
      }

      methods.setValue(fieldName, []);
      toast.success("Lunch menu images uploaded successfully");
    } catch {
      return;
    }
  };

  return (
    <div className="px-5 lg:px-8">
      <div className="border border-light rounded-xl bg-white p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-main-primary text-2xl lg:text-3xl font-semibold">
            Lunch Menu Management
          </h2>
          <p className="text-sm text-[#6B6B6B] mt-1">
            Upload and maintain menu images for both lunch menu sections.
          </p>
        </div>

        <FormProvider {...methods}>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {sectionConfig.map((section) => {
              const sectionItems = getSectionItems(section.type);
              const isSectionLoading = getSectionLoading(section.type);
              const sectionImageEntries = sectionItems.flatMap(getImageEntries);

              return (
                <div
                  key={section.type}
                  className="bg-white border border-light p-6 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-main-primary font-semibold text-lg leading-tight">
                      {section.title}
                    </h3>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-main-primary/10 text-main-primary whitespace-nowrap">
                      {sectionImageEntries.length} Images
                    </span>
                  </div>

                  <div>
                    <InputLabel label="Upload Images" />
                    <MultipleImageUploadController
                      name={section.fieldName}
                      label="Upload images"
                    />
                  </div>

                  <div className="flex justify-end mb-5 pb-5 border-b border-light">
                    <Button
                      type="button"
                      disabled={isUpdating}
                      onClick={() =>
                        handleUploadSection(section.type, section.fieldName)
                      }
                      className="bg-main-primary text-white"
                    >
                      {isUpdating ? "Uploading..." : "Upload"}
                    </Button>
                  </div>

                  {isSectionLoading ? (
                    <Skeleton className="w-full h-[200px]" />
                  ) : sectionImageEntries.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionImageEntries.map((entry, index) => (
                        <div
                          key={`${entry.item._id}-${entry.imageName}-${index}`}
                          className="relative h-32 rounded-lg border border-light bg-white overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(entry.item, entry.imageName)
                            }
                            disabled={isUpdating}
                            className="absolute top-1 right-1 w-7 h-7 bg-rose-600 hover:bg-rose-700 rounded-full flex items-center justify-center z-10 disabled:opacity-60 shadow-sm"
                          >
                            <Trash2 className="w-3 h-3 text-white" />
                          </button>

                          <Image
                            src={entry.url}
                            alt={section.title}
                            fill
                            className="object-contain rounded-lg p-1"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#6B6B6B] text-sm text-center">
                      No images found.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
