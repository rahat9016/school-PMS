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
import { articleSchema, ArticleSchemaForm } from "../Schema/articleSchema";
import { IMediaImage } from "../types";
import ArticleForm from "./ArticleForm";

export default function CreateUpdateArticle({
  isOpen,
  onClose,
  initialValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: IMediaImage;
}) {
  const methods = useForm({
    resolver: yupResolver(articleSchema),
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

  const onSubmit = (data: ArticleSchemaForm) => {
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
            {initialValues ? "Update Article" : "Create Article"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <ArticleForm isEditMode={!!initialValues} onSubmit={onSubmit} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
