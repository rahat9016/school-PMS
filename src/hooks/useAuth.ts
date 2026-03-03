import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { authService } from "../services/auth";
import { IGenericErrorResponse } from "../types/common/common";
import { encryptData } from "../utils/cryptoHelper";

export const useAuth = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      const encryptedId = encryptData(String(data.user._id), "ABC123!@#");
      const encryptedRole = encryptData(String(data.user.role), "ABC123!@#");

      Cookies.set("accessToken", data.accessToken, { expires: 1 });
      Cookies.set("refreshToken", data.refreshToken, { expires: 2 });
      Cookies.set("userId", encryptedId, { expires: 1 });
      Cookies.set("role", encryptedRole, { expires: 1 });

      toast.success(data.message);
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error: IGenericErrorResponse) => {
      toast.error(error.message);
      throw error;
    },
  });
};
