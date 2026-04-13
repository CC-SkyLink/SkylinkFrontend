export interface User {
  id: string;
  name?: string;
  email?: string;
  role?: "user" | "admin" | string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string; // ISO string
  arrivalTime: string; // ISO string
  price: number;
  airline?: string;
  seatsAvailable?: number;
}

export interface Passenger {
  name: string;
  age?: number;
  passport?: string;
}

export interface Booking {
  id: string;
  userId: string;
  flightId: string;
  passengers: Passenger[];
  status: "confirmed" | "pending" | "cancelled" | "rescheduled";
  totalPrice: number;
  createdAt: string;
}

export interface FlightSearchParams {
  origin?: string;
  destination?: string;
  date?: string;
  passengers?: number;
  page?: number;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
  airline?: string;
}

export interface APIError {
  message: string;
  status?: number;
  details?: unknown;
}
