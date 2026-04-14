import { createContext } from "react";
import type { PaymentMethod, PaymentStatus } from "@/types";

export interface PaymentFlowState {
  paymentId: string | null;
  method: PaymentMethod | null;
  status: PaymentStatus | null;
  otpAttempts: number;
  maxOtpAttempts: number;
  otpExpiresAt: string | null;
  isOtpExpired: boolean;
}

export interface PaymentFlowContextType {
  state: PaymentFlowState;
  startSession: (args: {
    paymentId: string;
    method: PaymentMethod;
    status?: PaymentStatus;
  }) => void;
  setStatus: (status: PaymentStatus) => void;
  requestOtp: (expiresAt: string, maxAttempts?: number) => void;
  incrementOtpAttempt: () => void;
  clearSession: () => void;
}

export const INITIAL_PAYMENT_FLOW_STATE: PaymentFlowState = {
  paymentId: null,
  method: null,
  status: null,
  otpAttempts: 0,
  maxOtpAttempts: 3,
  otpExpiresAt: null,
  isOtpExpired: false,
};

export const PaymentFlowContext = createContext<
  PaymentFlowContextType | undefined
>(undefined);
