"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePatch } from "@/hooks/usePatch";
import { usePost } from "@/hooks/usePost";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  newsAndEventsSchema,
  NewsAndEventsSchemaForm,
} from "../Schema/newsAndEventsSchema";
import { INewsAndEvents } from "../types";
import NewsAndEventsForm from "./NewsAndEventsForm";

export default function CreateUpdateNewsAndEvents({
  isOpen,
  onClose,
  initialValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: INewsAndEvents;
}) {
  const methods = useForm({
    resolver: yupResolver(newsAndEventsSchema),
    defaultValues: {
      images: [],
      title: "",
      description: "",
      generalCategory: "",
      tags: [],
      type: "NEWS",
      eventDate: "",
      startTime: "",
      endTime: "",
      location: "",
      activeStatus: true,
    },
  });

  const {
    mutate: createNewsAndEvents,
    isPending: isCreating,
    error: createError,
  } = usePost(
    "/news-events",
    () => {
      toast.success("News and events created successfully");
      methods.reset();
      onClose();
    },
    [["news-events"]],
  );

  const {
    mutate: updateNewsAndEvents,
    isPending: isUpdating,
    error: updateError,
  } = usePatch(() => {
    toast.success("News and events updated successfully");
    onClose();
  }, [["news-events"]]);

  useEffect(() => {
    if (initialValues) {
      methods.reset({
        images: initialValues.imageUrls || [],
        title: initialValues.title,
        description: initialValues.description,
        generalCategory: initialValues.generalCategory?._id || "",
        tags: initialValues.tags?.map((tag) => tag._id) || [],
        type: initialValues.type as "NEWS" | "EVENTS",
        eventDate: initialValues.eventDate
          ? initialValues.eventDate.split("T")[0]
          : "",
        startTime: initialValues.startTime || "",
        endTime: initialValues.endTime || "",
        location: initialValues.location || "",
        activeStatus: Boolean(initialValues.activeStatus),
      });
    }
  }, [initialValues, methods]);

  const onSubmit = (data: NewsAndEventsSchemaForm) => {
    const formData = new FormData();

    data.images?.forEach((image) => {
      if (image instanceof File) {
        formData.append("images", image);
      } else if (typeof image === "string") {
        formData.append("existingImages", image);
      }
    });

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("generalCategory", data.generalCategory);
    formData.append("type", data.type);
    formData.append("activeStatus", String(data.activeStatus));

    data.tags?.forEach((tag) => {
      formData.append("tags", tag as string);
    });

    if (data.type === "EVENTS") {
      if (data.eventDate) formData.append("eventDate", data.eventDate);
      if (data.startTime) formData.append("startTime", data.startTime);
      if (data.endTime) formData.append("endTime", data.endTime);
      if (data.location) formData.append("location", data.location);
    }

    if (initialValues) {
      updateNewsAndEvents({
        url: `/news-events/${initialValues._id}`,
        data: formData,
      });
    } else {
      createNewsAndEvents({
        data: formData,
        config: {
          headers: { "Content-Type": "multipart/form-data" },
        },
      });
    }
  };

  const error = initialValues ? updateError : createError;
  const isPending = isCreating || isUpdating;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white !max-w-[60vw] w-[60vw] max-h-[90vh]  overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-main-secondary text-2xl font-semibold">
            {initialValues
              ? "Update News And Events"
              : "Create News And Events"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <NewsAndEventsForm
            isEditMode={!!initialValues}
            onSubmit={onSubmit}
            error={error}
            isPending={isPending}
          />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
