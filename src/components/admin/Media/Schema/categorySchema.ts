import * as Yup from "yup";

export const categorySchema = Yup.object({
  name: Yup.string().required("Category name is required"),
  status: Yup.boolean().required("Status is required"),
});

export type CategorySchemaForm = Yup.InferType<typeof categorySchema>;
