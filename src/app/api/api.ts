/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPreRegister } from "@/components/users/student/PaisInWonderlandSummerCamp/interface";
import api from "./baseAPI";
import { IFeedback } from "@/components/users/contact/interface";
import { IFAQ } from "@/components/users/FAQ/interface";

export const loginRequest = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/signing", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

export const admissionRequest = async <T>(data: T) => {
  try {
    const response = await api.post("/student/admission", data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const appointmentRequest = async <T>(data: T) => {
  try {
    const response = await api.post("/student/online-appointment", data);
    return response.data;
  } catch (error: any) {
    // console.log(error)
    return error.response.data;
  }
};

export const schoolTourBookingRequest = async <T>(data: T) => {
  try {
    const response = await api.post("/student/school-tour-booking", data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const preRegisterRequest = async (data: IPreRegister) => {
  try {
    const response = await api.post("/student/pre-register", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};
export const feedbackRequest = async (data: IFeedback) => {
  try {
    const response = await api.post("/student/feedback", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

export const faqRequest = async (data: IFAQ) => {
  try {
    const response = await api.post("/student/faq", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

export const mediaLibraryGalleryRequest = async (data: FormData) => {
  try {
    const response = await api.post("/media-library/gallery", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};
export const getMediaLibraryGalleryRequest = async ({
  page = 1,
  limit,
}: {
  page?: number;
  limit: number;
}) => {
  try {
    const response = await api.get(
      `/media-library/gallery?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

export const getGalleryImagesRequest = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(
      `/media-library/get-images-from-gallery?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

export const getCategoryListRequest = async () => {
  try {
    const response = await api.get(
      `/group/category`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

export const uploadImageFromGalleryRequest = async (data: any) => {
  try {
    const response = await api.post(
      `/media-library/upload-images-from-gallery`,
      data
    );
    return response.data;
  } catch (error: any) {
    function extractErrorMessage(error: any): string {
      return (
        error?.response?.data?.errorMessages?.[0]?.message ||
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!"
      );
    }
    throw new Error(extractErrorMessage(error) || "Something went wrong!");
  }
};