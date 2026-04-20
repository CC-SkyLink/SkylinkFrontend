import { useContext } from "react";
import {
  BookingFlowContext,
  type BookingFlowContextType,
} from "./bookingFlowContext";

export function useBookingFlowStore(): BookingFlowContextType {
  const context = useContext(BookingFlowContext);

  if (!context) {
    throw new Error(
      "useBookingFlowStore must be used within a BookingFlowProvider",
    );
  }

  return context;
}

export default useBookingFlowStore;
