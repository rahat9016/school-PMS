import ControlledInputField from "@/components/shared/ControlledInputField";
import ErrorMessage from "@/components/shared/Errors/ErrorMessage";
import { FileUploadController } from "@/components/shared/FileUploadController";
import InputLabel from "@/components/shared/InputLabel";
import Paragraph from "@/components/shared/Paragraph";
import SubmitButton from "@/components/shared/SubmitButton";
import { Button } from "@/components/ui/button";
import { ErrorType } from "@/types/common/common";
import { ClipboardMinus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { PaisPerspectiveSchemaForm } from "../Schema/paisPerspectiveSchema";

export default function PaisPerspectiveForm({
  isEditMode = false,
  onSubmit,
  error,
  isPending = false,
}: {
  isEditMode?: boolean;
  onSubmit: (data: PaisPerspectiveSchemaForm) => void;
  error?: ErrorType | null;
  isPending?: boolean;
}) {
  const router = useRouter();
  const { handleSubmit, reset } = useFormContext<PaisPerspectiveSchemaForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="border border-light-silver rounded-lg p-8 bg-white space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-main-primary/10 w-9 h-9 flex items-center justify-center rounded-md border border-primary/20">
            <ClipboardMinus className="w-4" />
          </div>
          <Paragraph className="xl:text-lg font-medium">
            PAIS Perspective Information
          </Paragraph>
        </div>

        <div>
          <InputLabel label="Image" />
          <FileUploadController name="image" label="Upload image" />
        </div>

        <div>
          <InputLabel label="Title" />
          <ControlledInputField name="title" placeholder="Enter title" />
        </div>
      </div>

      <ErrorMessage error={error} />

      <div className="flex items-center justify-end gap-4">
        <Button
          onClick={() => {
            router.push("/dashboard/pais-perspective");
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
            isEditMode ? "Update PAIS Perspective" : "Create PAIS Perspective"
          }
        />
      </div>
    </form>
  );
}
