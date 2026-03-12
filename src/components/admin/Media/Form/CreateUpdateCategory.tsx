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
import { categorySchema, CategorySchemaForm } from "../Schema/categorySchema";
import { ICategory } from "../types";
import CategoryForm from "./CategoryForm";

export default function CreateUpdateCategory({
  isOpen,
  onClose,
  initialValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: ICategory;
}) {
  const methods = useForm({
    resolver: yupResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const {
    mutate: createCategory,
    isPending: isCreating,
    error: createError,
  } = usePost(
    "/category/create-category",
    () => {
      toast.success("Category created successfully");
      methods.reset();
      onClose();
    },
    [["categories"]],
  );

  const {
    mutate: updateCategory,
    isPending: isUpdating,
    error: updateError,
  } = usePatch(() => {
    toast.success("Category updated successfully");
    methods.reset();
    onClose();
  }, [["categories"]]);

  useEffect(() => {
    if (initialValues) {
      methods.reset({
        name: initialValues.name,
        description: initialValues.description,
      });
    } else {
      methods.reset({
        name: "",
        description: "",
      });
    }
  }, [initialValues, methods]);

  const onSubmit = (data: CategorySchemaForm) => {
    if (initialValues) {
      updateCategory({
        url: `/category/${initialValues._id}`,
        data,
      });
    } else {
      createCategory(data);
    }
  };

  const error = initialValues ? updateError : createError;
  const isPending = isCreating || isUpdating;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white min-w-[60vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-main-secondary text-2xl font-semibold">
            {initialValues ? "Update Category" : "Create Category"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <CategoryForm
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
