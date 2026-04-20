import axios from "axios";
import type { APIError } from "@/types";

interface AxiosErrorPayload {
  message?: string;
  [key: string]: unknown;
}

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const responsePayload = error.response?.data as AxiosErrorPayload | undefined;
    const message =
      responsePayload?.message || error.message || "API Error";
    const status = error.response?.status;
    const details = error.response?.data;
    throw { message, status, details } as APIError;
  }

  throw { message: "Unknown API error", details: error } as APIError;
}
