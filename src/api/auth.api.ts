import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { AuthResponse, User } from "@/types";

export async function login(credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  try {
    const res = await axiosClient.post("/auth/login", credentials);
    return res.data as AuthResponse;
  } catch (err) {
    handleApiError(err);
  }
}

export async function register(payload: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthResponse> {
  try {
    const res = await axiosClient.post("/auth/register", payload);
    return res.data as AuthResponse;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getProfile(): Promise<User> {
  try {
    const res = await axiosClient.get("/auth/me");
    return res.data as User;
  } catch (err) {
    handleApiError(err);
  }
}

export async function forgotPassword(
  email: string,
): Promise<{ message: string }> {
  try {
    const res = await axiosClient.post("/auth/forgot-password", { email });
    return res.data as { message: string };
  } catch (err) {
    handleApiError(err);
  }
}

export async function resetPassword(payload: {
  token: string;
  password: string;
}): Promise<{ message: string }> {
  try {
    const res = await axiosClient.post("/auth/reset-password", payload);
    return res.data as { message: string };
  } catch (err) {
    handleApiError(err);
  }
}

export async function resendVerification(
  email: string,
): Promise<{ message: string }> {
  try {
    const res = await axiosClient.post("/auth/resend-verification", { email });
    return res.data as { message: string };
  } catch (err) {
    handleApiError(err);
  }
}
