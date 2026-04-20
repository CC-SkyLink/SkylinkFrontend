import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { Flight, FlightSearchParams } from "@/types";

export async function searchFlights(
  params: FlightSearchParams = {},
): Promise<Flight[]> {
  try {
    const res = await axiosClient.get("/flights", { params });
    return res.data as Flight[];
  } catch (err) {
    handleApiError(err);
  }
}

export async function getFlightById(id: string): Promise<Flight> {
  try {
    const res = await axiosClient.get(`/flights/${id}`);
    return res.data as Flight;
  } catch (err) {
    handleApiError(err);
  }
}

export async function createFlight(payload: Partial<Flight>): Promise<Flight> {
  try {
    const res = await axiosClient.post("/flights", payload);
    return res.data as Flight;
  } catch (err) {
    handleApiError(err);
  }
}

export async function updateFlight(
  id: string,
  payload: Partial<Flight>,
): Promise<Flight> {
  try {
    const res = await axiosClient.put(`/flights/${id}`, payload);
    return res.data as Flight;
  } catch (err) {
    handleApiError(err);
  }
}

export async function deleteFlight(id: string): Promise<void> {
  try {
    await axiosClient.delete(`/flights/${id}`);
  } catch (err) {
    handleApiError(err);
  }
}
