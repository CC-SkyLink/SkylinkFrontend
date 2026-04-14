import { createContext } from "react";
import type { AddOn, MealPreference, Passenger } from "@/types";

export type BookingFlowStep =
  | "passengers"
  | "seats"
  | "meals"
  | "summary"
  | "payment"
  | "confirmation";

export interface BookingPricingSnapshot {
  baseFare: number;
  taxes: number;
  fees: number;
  addOns: AddOn[];
  total: number;
}

export interface BookingFlowState {
  selectedFlightId: string | null;
  passengers: Passenger[];
  seatSelections: string[];
  mealSelections: MealPreference[];
  pricing: BookingPricingSnapshot | null;
  step: BookingFlowStep;
  seatHoldExpiresAt: string | null;
  isSeatHoldExpired: boolean;
}

export interface BookingFlowContextType {
  state: BookingFlowState;
  startFlow: (flightId: string) => void;
  setStep: (step: BookingFlowStep) => void;
  setPassengers: (passengers: Passenger[]) => void;
  setSeatSelections: (seats: string[]) => void;
  setMealSelections: (meals: MealPreference[]) => void;
  setPricing: (pricing: BookingPricingSnapshot) => void;
  startSeatHold: (minutes?: number) => void;
  clearFlow: () => void;
}

export const INITIAL_BOOKING_FLOW_STATE: BookingFlowState = {
  selectedFlightId: null,
  passengers: [],
  seatSelections: [],
  mealSelections: [],
  pricing: null,
  step: "passengers",
  seatHoldExpiresAt: null,
  isSeatHoldExpired: false,
};

export const BookingFlowContext = createContext<
  BookingFlowContextType | undefined
>(undefined);
