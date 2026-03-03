"use client";
import Cookies from "js-cookie";

import { useEffect } from "react";
import { useGet } from "../hooks/useGet";
import {
  setUserId,
  setUserInformation,
} from "../lib/redux/features/auth/authSlice";
import { useAppDispatch } from "../lib/redux/hooks";
import { decryptData } from "../utils/cryptoHelper";

export const UserFetcher = () => {
  const dispatch = useAppDispatch();
  const userId = Cookies.get("userId");
  // const role = Cookies.get("role");
  const decryptedUserId = decryptData(userId ?? "", "ABC123!@#");
  // const decryptedRole = decryptData(role ?? "", "ABC123!@#");

  const { data, isSuccess, isLoading } = useGet(
    `/auth/user/${decryptedUserId}`,
    ["user", decryptedUserId || ""],
    undefined,
    {
      enabled: !!decryptedUserId,
      staleTime: 5 * 60 * 1000,
    },
  );

  // If userId is available, set it in the store
  useEffect(() => {
    if (decryptedUserId) {
      dispatch(setUserId(decryptedUserId));
    }
  }, [decryptedUserId, dispatch]);

  // If user data is available, set it in the store
  useEffect(() => {
    // dispatch(setLoading(isLoading));
    if (isSuccess && data?.data) {
      dispatch(setUserInformation(data.data));
    }
  }, [isSuccess, data, dispatch, isLoading]);

  return null;
};
