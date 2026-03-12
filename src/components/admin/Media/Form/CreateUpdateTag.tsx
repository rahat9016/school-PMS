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
import { tagSchema, TagSchemaForm } from "../Schema/tagSchema";
import { ITag } from "../types";
import TagForm from "./TagForm";

export default function CreateUpdateTag({
  isOpen,
  onClose,
  initialValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: ITag;
}) {
  const methods = useForm({
    resolver: yupResolver(tagSchema),
    defaultValues: {
      name: "",
      status: false,
    },
  });

  const {
    mutate: createTag,
    isPending: isCreating,
    error: createError,
  } = usePost(
    "/tag",
    () => {
      toast.success("Tag created successfully");
      methods.reset();
      onClose();
    },
    [["tags"]],
  );

  const {
    mutate: updateTag,
    isPending: isUpdating,
    error: updateError,
  } = usePatch(() => {
    toast.success("Tag updated successfully");
    onClose();
  }, [["tags"]]);

  useEffect(() => {
    if (initialValues) {
      methods.reset({
        name: initialValues.name,
        status: Boolean(initialValues.status),
      });
    } else {
      methods.reset({
        name: "",
        status: false,
      });
    }
  }, [initialValues, methods]);

  const onSubmit = (data: TagSchemaForm) => {
    if (initialValues) {
      updateTag({
        url: `/tag/${initialValues._id}`,
        data,
      });
    } else {
      createTag(data);
    }
  };

  const error = initialValues ? updateError : createError;
  const isPending = isCreating || isUpdating;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white min-w-[60vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-main-secondary text-2xl font-semibold">
            {initialValues ? "Update Tag" : "Create Tag"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <TagForm
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
