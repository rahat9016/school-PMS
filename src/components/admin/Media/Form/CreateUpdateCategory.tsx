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

  const onSubmit = (data: CategorySchemaForm) => {
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
            {initialValues ? "Update Category" : "Create Category"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <CategoryForm isEditMode={!!initialValues} onSubmit={onSubmit} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
