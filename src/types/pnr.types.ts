import type { BookingStatus, Passenger } from "./booking.types";
import type { FlightSegment } from "./flight.types";

export type PNRJourneyStatus =
  | "on_time"
  | "delayed"
  | "cancelled"
  | "boarding"
  | "landed";

export interface PNRStatusResult {
  pnr: string;
  bookingId?: string;
  bookingStatus: BookingStatus;
  journeyStatus: PNRJourneyStatus;
  itinerary: FlightSegment[];
  passengers: Passenger[];
  message?: string;
  updatedAt: string;
}
