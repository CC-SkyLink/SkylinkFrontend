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
