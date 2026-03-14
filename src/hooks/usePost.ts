import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { postService } from "../services/auth";
import { IGenericErrorResponse } from "../types/common/common";

export interface PostArg {
  endpoint?: string;
  data?: FormData | Record<string, unknown>;
  config?: AxiosRequestConfig;
}

export const usePost = <T>(
  defaultEndpoint?: string,
  onSuccess?: (data: T) => void,
  invalidateQueriesKeys?: Array<string[]>,
) => {
  const queryClient = useQueryClient();

  const getErrorMessage = (error: IGenericErrorResponse | unknown): string => {
    if (!error) return "Something went wrong";

    if (typeof error === "string") return error;

    if (typeof error === "object") {
      const err = error as {
        message?: string;
        errorMessages?: Array<{ message?: string }>;
      };

      if (Array.isArray(err.errorMessages) && err.errorMessages.length > 0) {
        const firstMessage = err.errorMessages.find(
          (item) => item?.message,
        )?.message;
        if (firstMessage) return firstMessage;
      }

      if (err.message) return err.message;
    }

    return "Something went wrong";
  };

  return useMutation<
    T,
    IGenericErrorResponse,
    PostArg | FormData | Record<string, unknown>
  >({
    mutationFn: (arg) => {
      let endpoint: string | undefined = defaultEndpoint;
      let data: FormData | Record<string, unknown> = arg as
        | FormData
        | Record<string, unknown>;
      let config: AxiosRequestConfig = {};

      if (typeof arg === "object" && "data" in arg) {
        const postArg = arg as PostArg;
        endpoint = postArg.endpoint ?? defaultEndpoint;
        data = postArg.data ?? {};
        config = postArg.config ?? {};
      }

      if (!endpoint) {
        throw new Error(
          "defaultEndpoint is required if endpoint is not provided",
        );
      }

      return postService.request(endpoint, data, config);
    },

    onSuccess: (data) => {
      invalidateQueriesKeys?.forEach((key) =>
        queryClient.invalidateQueries({ queryKey: key }),
      );

      onSuccess?.(data);
    },

    onError: (error) => {
      console.error("POST error", error);
      toast.error(getErrorMessage(error));
      throw error;
    },
  });
};
