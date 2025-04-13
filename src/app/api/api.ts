/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./baseAPI";

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
