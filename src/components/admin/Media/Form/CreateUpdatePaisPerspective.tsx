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
    PaisPerspectiveSchemaForm,
    paisPerspectiveSchema,
} from "../Schema/paisPerspectiveSchema";
import { IPaisPerspective } from "../types";
import PaisPerspectiveForm from "./PaisPerspectiveForm";

export default function CreateUpdatePaisPerspective({
  isOpen,
  onClose,
  initialValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: IPaisPerspective;
}) {
  const methods = useForm({
    resolver: yupResolver(paisPerspectiveSchema),
    defaultValues: {
      title: "",
      image: undefined,
    },
  });

  const {
    mutate: createPaisPerspective,
    isPending: isCreating,
    error: createError,
  } = usePost(
    "/pais-perspective",
    () => {
      toast.success("PAIS Perspective created successfully");
      methods.reset();
      onClose();
    },
    [["pais-perspective"]],
  );

  const {
    mutate: updatePaisPerspective,
    isPending: isUpdating,
    error: updateError,
  } = usePatch(() => {
    toast.success("PAIS Perspective updated successfully");
    methods.reset();
    onClose();
  }, [["pais-perspective"]]);

  useEffect(() => {
    if (initialValues) {
      methods.reset({
        title: initialValues.title,
        image: initialValues.imageUrl || initialValues.image || undefined,
      });
    } else {
      methods.reset({
        title: "",
        image: undefined,
      });
    }
  }, [initialValues, methods]);

  const onSubmit = (data: PaisPerspectiveSchemaForm) => {
    const formData = new FormData();

    formData.append("title", data.title);

    if (data.image instanceof File) {
      formData.append("image", data.image);
    } else if (typeof data.image === "string") {
      formData.append("existingImage", data.image);
    }

    if (initialValues) {
      updatePaisPerspective({
        url: `/pais-perspective/${initialValues._id}`,
        data: formData,
      });
      return;
    }

    createPaisPerspective({
      data: formData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    });
  };

  const error = initialValues ? updateError : createError;
  const isPending = isCreating || isUpdating;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white !max-w-[60vw] w-[60vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-main-secondary text-2xl font-semibold">
            {initialValues
              ? "Update PAIS Perspective"
              : "Create PAIS Perspective"}
          </DialogTitle>
        </DialogHeader>

        <FormProvider {...methods}>
          <PaisPerspectiveForm
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
