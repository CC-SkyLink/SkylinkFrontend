import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { PNRStatusResult } from "@/types";

export async function getPNRStatus(pnr: string): Promise<PNRStatusResult> {
  try {
    const res = await axiosClient.get("/pnr/status", {
      params: { pnr: pnr.toUpperCase() },
    });
    return res.data as PNRStatusResult;
  } catch (err) {
    handleApiError(err);
  }
}

export async function lookupPublicPNRStatus(
  pnr: string,
  lastName: string,
): Promise<PNRStatusResult> {
  try {
    const res = await axiosClient.get("/pnr/public-status", {
      params: {
        pnr: pnr.toUpperCase(),
        lastName,
      },
    });
    return res.data as PNRStatusResult;
  } catch (err) {
    handleApiError(err);
  }
}
