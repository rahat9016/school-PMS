import * as Yup from "yup";

const SUPPORTED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/webp",
];

const IMAGE_SIZE = 5 * 1024 * 1024;

export const newsAndEventsSchema = Yup.object({
  images: Yup.array()
    .of(
      Yup.mixed<File | string>()
        .required()
        .test(
          "fileType",
          "Unsupported image format. Allowed: JPG, PNG, WEBP.",
          (value) => {
            if (typeof value === "string") return true;
            if (value instanceof File) {
              return SUPPORTED_IMAGE_FORMATS.includes(value.type);
            }
            return false;
          },
        )
        .test("fileSize", "Image size must be less than 5MB.", (value) =>
          typeof value === "string" ? true : value.size <= IMAGE_SIZE,
        ),
    )
    .min(1, "At least one image is required")
    .required("Images are required"),

  title: Yup.string().required("Title is required").trim(),

  description: Yup.string().required("Description is required").trim(),

  generalCategory: Yup.string().required("Category is required"),

  tags: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one tag is required")
    .required("Tags are required"),

  type: Yup.string()
    .oneOf(["NEWS", "EVENTS"], "Type must be NEWS or EVENTS")
    .required("Type is required"),

  eventDate: Yup.string().when("type", {
    is: "EVENTS",
    then: (schema) => schema.required("Event date is required for events"),
    otherwise: (schema) => schema.notRequired(),
  }),

  startTime: Yup.string().when("type", {
    is: "EVENTS",
    then: (schema) =>
      schema
        .required("Start time is required for events")
        .matches(
          /^(0[1-9]|1[0-2]):[0-5]\d\s(AM|PM)$/,
          "Start time must be in HH:MM AM/PM format",
        ),
    otherwise: (schema) => schema.notRequired(),
  }),

  endTime: Yup.string().when("type", {
    is: "EVENTS",
    then: (schema) =>
      schema
        .required("End time is required for events")
        .matches(
          /^(0[1-9]|1[0-2]):[0-5]\d\s(AM|PM)$/,
          "End time must be in HH:MM AM/PM format",
        ),
    otherwise: (schema) => schema.notRequired(),
  }),

  location: Yup.string().when("type", {
    is: "EVENTS",
    then: (schema) => schema.required("Location is required for events"),
    otherwise: (schema) => schema.notRequired(),
  }),

  activeStatus: Yup.boolean().required("Status is required"),
});

export type NewsAndEventsSchemaForm = Yup.InferType<typeof newsAndEventsSchema>;
