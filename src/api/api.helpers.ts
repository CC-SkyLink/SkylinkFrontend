import axios from "axios";
import type { APIError } from "@/types";

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const message =
      (error.response?.data as any)?.message || error.message || "API Error";
    const status = error.response?.status;
    const details = error.response?.data;
    throw { message, status, details } as APIError;
  }

  throw { message: "Unknown API error", details: error } as APIError;
}
