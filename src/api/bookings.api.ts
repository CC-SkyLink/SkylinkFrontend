import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { Booking } from "@/types";

export async function createBooking(
  payload: Partial<Booking>,
): Promise<Booking> {
  try {
    const res = await axiosClient.post("/bookings", payload);
    return res.data as Booking;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getBookingsForUser(userId?: string): Promise<Booking[]> {
  try {
    const res = await axiosClient.get("/bookings", {
      params: userId ? { userId } : {},
    });
    return res.data as Booking[];
  } catch (err) {
    handleApiError(err);
  }
}

export async function getBookingById(id: string): Promise<Booking> {
  try {
    const res = await axiosClient.get(`/bookings/${id}`);
    return res.data as Booking;
  } catch (err) {
    handleApiError(err);
  }
}

export async function cancelBooking(id: string): Promise<void> {
  try {
    await axiosClient.post(`/bookings/${id}/cancel`);
  } catch (err) {
    handleApiError(err);
  }
}
