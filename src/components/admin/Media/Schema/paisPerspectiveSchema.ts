import * as Yup from "yup";

export const paisPerspectiveSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  image: Yup.mixed<File | string>()
    .required("Image is required")
    .test("image-required", "Image is required", (value) => {
      if (value instanceof File) return true;
      if (typeof value === "string") return value.trim().length > 0;
      return false;
    }),
});

export type PaisPerspectiveSchemaForm = Yup.InferType<
  typeof paisPerspectiveSchema
>;
