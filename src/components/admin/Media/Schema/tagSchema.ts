import * as Yup from "yup";

export const tagSchema = Yup.object({
  name: Yup.string().required("Tag name is required"),
  status: Yup.boolean().required("Status is required"),
});

export type TagSchemaForm = Yup.InferType<typeof tagSchema>;
