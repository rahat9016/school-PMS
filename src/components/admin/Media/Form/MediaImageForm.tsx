import ErrorMessage from "@/components/shared/Errors/ErrorMessage";
import Paragraph from "@/components/shared/Paragraph";
import SubmitButton from "@/components/shared/SubmitButton";
import { Button } from "@/components/ui/button";
import { ErrorType } from "@/types/common/common";
import { ClipboardMinus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { MediaImageSchemaForm } from "../Schema/mediaImageSchema";
import { FileUploadController } from "@/components/shared/FileUploadController";


export default function MediaImageForm({
  isEditMode = false,
  onSubmit,
  error,
  isPending = false,
}: {
  isEditMode?: boolean;
  onSubmit: (data: MediaImageSchemaForm) => void;
  error?: ErrorType | null;
  isPending?: boolean;
}) {
  const router = useRouter();

  const { handleSubmit, reset } = useFormContext<MediaImageSchemaForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="border border-light-silver rounded-lg p-8 bg-white">
        <div className="flex items-center gap-3">
          <div className="bg-main-primary/10 w-9 h-9 flex items-center justify-center rounded-md border border-primary/20">
            <ClipboardMinus className="w-4" />
          </div>
          <Paragraph className="xl:text-lg font-medium">
            Article Information
          </Paragraph>
        </div>

        <div className="mt-6">
          <FileUploadController name="image" />
        </div>
      </div>

      <ErrorMessage error={error} />

      <div className="flex items-center justify-end gap-4">
        <Button
          onClick={() => {
            router.push("/admin/image-gallery");
            reset();
          }}
          type="button"
          className="text-secondary-foreground bg-transparent hover:bg-transparent border shadow-none cursor-pointer"
        >
          Cancel
        </Button>

        <SubmitButton
          isLoading={isPending}
          label={isEditMode ? "Update Image" : "Create Image"}
        />
      </div>
    </form>
  );
}
