"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  mediaVideoSchema,
  MediaVideoSchemaForm,
} from "../Schema/mediaVideoSchema";
import { IMediaVideo } from "../types";
import MediaVideoForm from "./MediaVideoForm";

export default function CreateUpdateMediaVideo({
  initialValues,
}: {
  initialValues?: IMediaVideo;
}) {
  const methods = useForm({
    resolver: yupResolver(mediaVideoSchema),
    defaultValues: {
      videoThumbnail:"",
      title: "",
      link: "",
      duration: "",
      status: false,
      description: "",
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

  const onSubmit = (data: MediaVideoSchemaForm) => {
    console.log(data);
    if (initialValues) {
      // PATCH
    } else {
      // POST
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <MediaVideoForm isEditMode={!!initialValues} onSubmit={onSubmit} />
    </FormProvider>
  );
}
