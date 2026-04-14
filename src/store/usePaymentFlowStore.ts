import { useContext } from "react";
import {
  PaymentFlowContext,
  type PaymentFlowContextType,
} from "./paymentFlowContext";

export function usePaymentFlowStore(): PaymentFlowContextType {
  const context = useContext(PaymentFlowContext);

  if (!context) {
    throw new Error(
      "usePaymentFlowStore must be used within a PaymentFlowProvider",
    );
  }

  return context;
}

export default usePaymentFlowStore;
