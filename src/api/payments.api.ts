import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type {
  OTPChallenge,
  Payment,
  PaymentFailure,
  PaymentRequest,
} from "@/types";

export async function initializePayment(
  payload: PaymentRequest,
): Promise<Payment> {
  try {
    const res = await axiosClient.post("/payments/initialize", payload);
    return res.data as Payment;
  } catch (err) {
    handleApiError(err);
  }
}

export async function requestPaymentOtp(
  paymentId: string,
): Promise<OTPChallenge> {
  try {
    const res = await axiosClient.post(`/payments/${paymentId}/otp/request`);
    return res.data as OTPChallenge;
  } catch (err) {
    handleApiError(err);
  }
}

export async function verifyPaymentOtp(
  paymentId: string,
  otpCode: string,
): Promise<Payment> {
  try {
    const res = await axiosClient.post(`/payments/${paymentId}/otp/verify`, {
      otpCode,
    });
    return res.data as Payment;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getPaymentStatus(paymentId: string): Promise<Payment> {
  try {
    const res = await axiosClient.get(`/payments/${paymentId}`);
    return res.data as Payment;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getPaymentFailure(
  paymentId: string,
): Promise<PaymentFailure | null> {
  try {
    const res = await axiosClient.get(`/payments/${paymentId}/failure`);
    return res.data as PaymentFailure | null;
  } catch (err) {
    handleApiError(err);
  }
}
