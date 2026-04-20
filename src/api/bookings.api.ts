import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type {
  Booking,
  BookingDetail,
  CancellationRequest,
  RefundDetail,
  RescheduleRequest,
} from "@/types";

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

export async function getBookingDetail(id: string): Promise<BookingDetail> {
  try {
    const res = await axiosClient.get(`/bookings/${id}/detail`);
    return res.data as BookingDetail;
  } catch (err) {
    handleApiError(err);
  }
}

export async function previewCancellation(id: string): Promise<RefundDetail> {
  try {
    const res = await axiosClient.get(`/bookings/${id}/cancel-preview`);
    return res.data as RefundDetail;
  } catch (err) {
    handleApiError(err);
  }
}

export async function cancelBooking(
  id: string,
  payload: CancellationRequest,
): Promise<Booking> {
  try {
    const res = await axiosClient.post(`/bookings/${id}/cancel`, payload);
    return res.data as Booking;
  } catch (err) {
    handleApiError(err);
  }
}

export async function rescheduleBooking(
  id: string,
  payload: RescheduleRequest,
): Promise<Booking> {
  try {
    const res = await axiosClient.post(`/bookings/${id}/reschedule`, payload);
    return res.data as Booking;
  } catch (err) {
    handleApiError(err);
  }
}
