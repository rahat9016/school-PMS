import * as Yup from "yup";

export const categorySchema = Yup.object({
  name: Yup.string().required("Category name is required"),
  description: Yup.string()
});

export type CategorySchemaForm = Yup.InferType<typeof categorySchema>;
