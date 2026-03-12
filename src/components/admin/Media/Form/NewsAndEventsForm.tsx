import ControlledInputField from "@/components/shared/ControlledInputField";
import ControlledMultiSelectField from "@/components/shared/ControlledMultiSelectField";
import ControlledSelectField from "@/components/shared/ControlledSelectField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import ControlledTimeField from "@/components/shared/ControlledTimeField";
import ErrorMessage from "@/components/shared/Errors/ErrorMessage";
import InputLabel from "@/components/shared/InputLabel";
import { MultipleImageUploadController } from "@/components/shared/MultipleImageFileInput";
import Paragraph from "@/components/shared/Paragraph";
import SubmitButton from "@/components/shared/SubmitButton";
import { Button } from "@/components/ui/button";
import { useGet } from "@/hooks/useGet";
import { ErrorType } from "@/types/common/common";
import { mapToSelectOptions } from "@/utils/mapToSelectOptions";
import { ClipboardMinus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import { NewsAndEventsSchemaForm } from "../Schema/newsAndEventsSchema";
import { ICategory, ITag } from "../types";

export default function NewsAndEventsForm({
  isEditMode = false,
  onSubmit,
  error,
  isPending = false,
}: {
  isEditMode?: boolean;
  onSubmit: (data: NewsAndEventsSchemaForm) => void;
  error?: ErrorType | null;
  isPending?: boolean;
}) {
  const router = useRouter();
  const { handleSubmit, reset, control } =
    useFormContext<NewsAndEventsSchemaForm>();
  const type = useWatch({ control, name: "type" });

  const { data: categoryData } = useGet<ICategory[]>("/category", [
    "categories",
  ]);
  const { data: tagData } = useGet<ITag[]>("/tag", ["tags"]);

  const categoryOptions = mapToSelectOptions(categoryData?.data, "name", "_id");
  const tagOptions = mapToSelectOptions(tagData?.data, "name", "_id");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="border border-light-silver rounded-lg p-8 bg-white space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-main-primary/10 w-9 h-9 flex items-center justify-center rounded-md border border-primary/20">
            <ClipboardMinus className="w-4" />
          </div>
          <Paragraph className="xl:text-lg font-medium">
            News And Events Information
          </Paragraph>
        </div>

        <div>
          <InputLabel label="Images" />
          <MultipleImageUploadController name="images" />
        </div>

        <div>
          <InputLabel label="Title" />
          <ControlledInputField name="title" placeholder="Enter title" />
        </div>

        <div>
          <InputLabel label="Description" />
          <ControlledTextareaField
            name="description"
            placeholder="Enter description"
          />
        </div>

        <div>
          <InputLabel label="Category" />
          <ControlledSelectField
            name="generalCategory"
            placeholder="Select category"
            options={categoryOptions}
          />
        </div>

        <div>
          <InputLabel label="Tags" />
          <ControlledMultiSelectField
            name="tags"
            placeholder="Select tags"
            options={tagOptions}
          />
        </div>

        <div>
          <InputLabel label="Type" />
          <ControlledSelectField
            name="type"
            placeholder="Select type"
            options={[
              { label: "News", value: "NEWS" },
              { label: "Events", value: "EVENTS" },
            ]}
          />
        </div>

        {type === "EVENTS" && (
          <>
            <div>
              <InputLabel label="Event Date" />
              <ControlledInputField
                name="eventDate"
                type="date"
                placeholder="Select event date"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputLabel label="Start Time" />
                <ControlledTimeField name="startTime" />
              </div>
              <div>
                <InputLabel label="End Time" />
                <ControlledTimeField name="endTime" />
              </div>
            </div>

            <div>
              <InputLabel label="Location" />
              <ControlledInputField
                name="location"
                placeholder="Enter location"
              />
            </div>
          </>
        )}

        <div>
          <InputLabel label="Status" />
          <ControlledSelectField
            name="activeStatus"
            placeholder="Select status"
            options={[
              { label: "Active", value: true },
              { label: "Inactive", value: false },
            ]}
          />
        </div>
      </div>

      <ErrorMessage error={error} />

      <div className="flex items-center justify-end gap-4">
        <Button
          onClick={() => {
            router.back();
            reset();
          }}
          type="button"
          className="text-secondary-foreground bg-transparent hover:bg-transparent border shadow-none cursor-pointer"
        >
          Cancel
        </Button>

        <SubmitButton
          isLoading={isPending}
          label={
            isEditMode ? "Update News And Events" : "Create News And Events"
          }
        />
      </div>
    </form>
  );
}
