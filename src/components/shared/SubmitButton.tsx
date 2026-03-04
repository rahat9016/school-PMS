import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface ISubmitButtonProps {
  isLoading?: boolean;
  label: string;
  className?: string;
}

export default function SubmitButton({
  isLoading = false,
  label = "Submit",
  className = "",
}: ISubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={cn(
        `
        flex items-center h-11 gap-2 text-white  cursor-pointer
        ${
          isLoading
            ? "bg-main-primary/70 cursor-not-allowed"
            : "bg-main-primary hover:bg-main-primary"
        }
        
      `,
        className,
      )}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
}
