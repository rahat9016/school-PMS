import { ErrorType } from "@/types/common/common";
import { FieldError } from "react-hook-form";

const getErrorMessage = (
  error: NonNullable<ErrorType> | FieldError,
): string => {
  if ("errorMessages" in error && error.errorMessages) {
    if (typeof error.errorMessages === "string") {
      return error.errorMessages;
    }
    if (Array.isArray(error.errorMessages) && error.errorMessages.length > 0) {
      return error.errorMessages[0]?.message || "Something went wrong!";
    }
  }

  if (
    "errors" in error &&
    Array.isArray(error.errors) &&
    error.errors.length > 0
  ) {
    return error.errors[0];
  }

  return error.message ?? "Something went wrong!";
};

const ErrorMessage = ({ error }: { error?: ErrorType | FieldError }) => {
  if (!error) return null;

  return (
    <div className="text-rose-600 bg-rose-200 text-center py-2 rounded-sm text-sm">
      {getErrorMessage(error)}
    </div>
  );
};
export default ErrorMessage;
