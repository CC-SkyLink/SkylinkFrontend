export interface APIError {
  message: string;
  status?: number;
  details?: unknown;
}

export * from "./user.types";
export * from "./flight.types";
export * from "./booking.types";
export * from "./payment.types";
export * from "./pnr.types";
export * from "./report.types";
