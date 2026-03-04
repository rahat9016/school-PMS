"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  mediaImageSchema,
  MediaImageSchemaForm,
} from "../Schema/mediaImageSchema";
import { IMediaImage } from "../types";
import MediaImageForm from "./MediaImageForm";

export default function CreateUpdateMediaImage({
  isOpen,
  onClose,
  initialValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: IMediaImage;
}) {
  const methods = useForm({
    resolver: yupResolver(mediaImageSchema),
    defaultValues: {
      image: "",
      status: false,
    },
  });

  useEffect(() => {
    if (initialValues) {
      methods.reset({
        ...initialValues,
        status: Boolean(initialValues.status),
      });
    }
  }, [initialValues, methods]);

  const onSubmit = (data: MediaImageSchemaForm) => {
    console.log(data);
    if (initialValues) {
      // PATCH
    } else {
      // POST
      methods.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white min-w-[60vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-main-secondary text-2xl font-semibold">
            {initialValues ? "Update Media Image" : "Create Media Image"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <MediaImageForm isEditMode={!!initialValues} onSubmit={onSubmit} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
