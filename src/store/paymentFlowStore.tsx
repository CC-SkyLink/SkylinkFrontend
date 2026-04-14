import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  INITIAL_PAYMENT_FLOW_STATE,
  PaymentFlowContext,
  type PaymentFlowContextType,
  type PaymentFlowState,
} from "./paymentFlowContext";
import type { PaymentMethod, PaymentStatus } from "@/types";

export const PaymentFlowProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PaymentFlowState>(
    INITIAL_PAYMENT_FLOW_STATE,
  );
  const otpTimerRef = useRef<number | null>(null);

  const clearOtpTimer = () => {
    if (otpTimerRef.current !== null) {
      window.clearTimeout(otpTimerRef.current);
      otpTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (otpTimerRef.current !== null) {
        window.clearTimeout(otpTimerRef.current);
        otpTimerRef.current = null;
      }
    };
  }, []);

  const value = useMemo<PaymentFlowContextType>(() => {
    const startSession = ({
      paymentId,
      method,
      status = "pending",
    }: {
      paymentId: string;
      method: PaymentMethod;
      status?: PaymentStatus;
    }) => {
      clearOtpTimer();
      setState({
        ...INITIAL_PAYMENT_FLOW_STATE,
        paymentId,
        method,
        status,
      });
    };

    const setStatus = (status: PaymentStatus) => {
      setState((previous) => ({ ...previous, status }));
    };

    const requestOtp = (expiresAt: string, maxAttempts = 3) => {
      clearOtpTimer();

      const millisecondsUntilExpiry = Math.max(
        new Date(expiresAt).getTime() - Date.now(),
        0,
      );

      otpTimerRef.current = window.setTimeout(() => {
        setState((previous) => ({ ...previous, isOtpExpired: true }));
      }, millisecondsUntilExpiry);

      setState((previous) => ({
        ...previous,
        status: "otp_required",
        otpExpiresAt: expiresAt,
        maxOtpAttempts: maxAttempts,
        otpAttempts: 0,
        isOtpExpired: false,
      }));
    };

    const incrementOtpAttempt = () => {
      setState((previous) => ({
        ...previous,
        otpAttempts: previous.otpAttempts + 1,
      }));
    };

    const clearSession = () => {
      clearOtpTimer();
      setState(INITIAL_PAYMENT_FLOW_STATE);
    };

    return {
      state,
      startSession,
      setStatus,
      requestOtp,
      incrementOtpAttempt,
      clearSession,
    };
  }, [state]);

  return (
    <PaymentFlowContext.Provider value={value}>
      {children}
    </PaymentFlowContext.Provider>
  );
};

export default PaymentFlowProvider;
