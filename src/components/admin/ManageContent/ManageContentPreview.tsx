"use client";

import { FileUploadController } from "@/components/shared/FileUploadController";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useDelete } from "@/hooks/useDelete";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const MANAGE_CONTENT_TYPES = [
  "SCHOOL_BOARD",
  "CHILD_SAFETY",
  "CHILD_PROTECTION",
  "ACADEMIC_CALENDAR",
  "PAIS_SCHOOL_PROFILE_ONE",
  "PAIS_SCHOOL_PROFILE_TWO",
] as const;

export type ManageContentType = (typeof MANAGE_CONTENT_TYPES)[number];

interface IManageContentItem {
  _id: string;
  type: ManageContentType;
  file?: string;
  fileUrl?: string;
}

const typeLabels: Record<ManageContentType, string> = {
  SCHOOL_BOARD: "School Board",
  CHILD_SAFETY: "Child Safety",
  CHILD_PROTECTION: "Child Protection",
  ACADEMIC_CALENDAR: "Academic Calendar",
  PAIS_SCHOOL_PROFILE_ONE: "PAIS School Profile One",
  PAIS_SCHOOL_PROFILE_TWO: "PAIS School Profile Two",
};

const pageLinks: {
  label: string;
  href: string;
}[] = [
  {
    label: "School Board",
    href: "/dashboard/school-board",
  },
  {
    label: "Child Safety",
    href: "/dashboard/child-safety",
  },
  {
    label: "Academic Calendar",
    href: "/dashboard/academic-calendar",
  },
  {
    label: "PAIS School Profile",
    href: "/dashboard/pais-school-profile",
  },
];

export default function ManageContentPreview({
  pageTitle,
  contentType,
  contentTypes,
}: {
  pageTitle: string;
  contentType?: ManageContentType;
  contentTypes?: ManageContentType[];
}) {
  const pathname = usePathname();
  const availableTypes: ManageContentType[] =
    contentTypes && contentTypes.length > 0
      ? contentTypes
      : contentType
        ? [contentType]
        : (["SCHOOL_BOARD"] as ManageContentType[]);

  const primaryType = availableTypes[0];
  const secondaryType = availableTypes[1];

  const [createType, setCreateType] = useState<ManageContentType>(primaryType);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const methods = useForm<{ image: File | null }>({
    defaultValues: {
      image: null,
    },
  });

  const {
    data: primaryData,
    isLoading: isPrimaryLoading,
    refetch: refetchPrimary,
  } = useGet<IManageContentItem | IManageContentItem[]>(
    "/manage-content",
    ["manage-content", primaryType],
    { type: primaryType },
  );

  const {
    data: secondaryData,
    isLoading: isSecondaryLoading,
    refetch: refetchSecondary,
  } = useGet<IManageContentItem | IManageContentItem[]>(
    "/manage-content",
    ["manage-content", secondaryType || "none"],
    secondaryType ? { type: secondaryType } : undefined,
    { enabled: Boolean(secondaryType) },
  );

  const { mutate: createContent, isPending } = usePost(
    "/manage-content",
    () => {
      toast.success(`${pageTitle} created successfully`);
      methods.reset({ image: null });
      setIsModalOpen(false);
      refetchPrimary();
      if (secondaryType) {
        refetchSecondary();
      }
    },
    [["manage-content"]],
  );

  const { mutate: deleteContent, isPending: isDeleting } = useDelete(() => {
    toast.success(`${pageTitle} deleted successfully`);
    refetchPrimary();
    if (secondaryType) {
      refetchSecondary();
    }
  }, [["manage-content"]]);

  const primaryContent = Array.isArray(primaryData?.data)
    ? primaryData?.data?.[0]
    : primaryData?.data;
  const secondaryContent = Array.isArray(secondaryData?.data)
    ? secondaryData?.data?.[0]
    : secondaryData?.data;

  const handleCreate = () => {
    const selectedFile = methods.getValues("image");

    if (!selectedFile) {
      toast.error("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("type", createType);

    createContent({
      data: formData,
      config: {
        headers: { "Content-Type": "multipart/form-data" },
      },
    });
  };

  const handleDelete = (item?: IManageContentItem) => {
    if (!item?._id) {
      toast.error("No image found to delete");
      return;
    }

    deleteContent({ url: `/manage-content/${item._id}` });
  };

  const renderPreviewCard = (
    type: ManageContentType,
    item?: IManageContentItem,
  ) => {
    const imageUrl = item?.fileUrl || item?.file;
    const isLoading =
      type === primaryType ? isPrimaryLoading : isSecondaryLoading;

    return (
      <div
        key={type}
        className="bg-[#FCFCFD] border border-[#CDCDCD] p-6 rounded-[16px] min-h-[360px] flex items-center justify-center relative"
      >
        {isLoading ? (
          <Skeleton className="w-full h-[300px]" />
        ) : imageUrl ? (
          <>
            <button
              type="button"
              onClick={() => handleDelete(item)}
              disabled={isDeleting}
              className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-md disabled:opacity-60"
              aria-label="Delete image"
              title="Delete image"
            >
              {isDeleting ? (
                <span className="text-xs">...</span>
              ) : (
                <Trash2 className="w-4 h-4" />
              )}
            </button>
            <Image
              src={imageUrl}
              alt={typeLabels[type]}
              width={1000}
              height={300}
              className="w-full h-[300px] object-contain"
            />
          </>
        ) : (
          <p className="text-[#6B6B6B] text-sm font-normal text-center">
            No image found for {typeLabels[type]}.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="p-5 lg:p-8">
      <div className="border border-[#CDCDCD] rounded-xl bg-white p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
          <h2 className="text-main-primary text-2xl font-semibold">
            {pageTitle}
          </h2>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-main-primary text-white px-4 py-2 rounded-md text-sm w-fit"
          >
            Create
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {pageLinks.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`text-sm px-3 py-2 rounded-md border ${
                page.href === pathname
                  ? "bg-main-primary text-white border-main-primary"
                  : "bg-white border-[#CDCDCD] text-[#363739]"
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>

        <div
          className={`grid gap-4 ${
            availableTypes.length > 1
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {renderPreviewCard(primaryType, primaryContent)}
          {secondaryType && renderPreviewCard(secondaryType, secondaryContent)}
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onOpenChange={(value) => {
          setIsModalOpen(value);
          if (!value) {
            methods.reset({ image: null });
          }
        }}
      >
        <DialogContent className="bg-white min-w-[40vw] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-main-secondary text-2xl font-semibold">
              Create {pageTitle}
            </DialogTitle>
          </DialogHeader>

          <FormProvider {...methods}>
            <div className="space-y-5">
              {availableTypes.length > 1 && (
                <div>
                  <p className="text-sm text-main-primary font-medium mb-2">
                    Select Type
                  </p>
                  <Select
                    value={createType}
                    onValueChange={(value) =>
                      setCreateType(value as ManageContentType)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {typeLabels[type]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="border border-[#CDCDCD] rounded-lg p-4">
                <p className="text-sm text-main-primary font-medium mb-3">
                  Upload Image
                </p>
                <FileUploadController name="image" label="Upload image" />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCreate}
                  disabled={isPending}
                  className="bg-main-primary text-white px-4 py-2 rounded-md text-sm disabled:opacity-60"
                >
                  {isPending ? "Creating..." : "Create"}
                </button>
              </div>
            </div>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
}
