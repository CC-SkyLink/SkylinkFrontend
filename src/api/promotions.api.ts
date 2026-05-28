import axiosClient from "./axiosClient";
import type { Promotion, CreatePromotionPayload } from "@/types/promotion.types";

const BASE_PATH = "/promotions";

export const getPromotions = async (): Promise<Promotion[]> => {
  const response = await axiosClient.get(BASE_PATH);
  return response.data;
};

export const getPromotionById = async (id: string): Promise<Promotion> => {
  const response = await axiosClient.get(`${BASE_PATH}/${id}`);
  return response.data;
};

export const createPromotion = async (payload: CreatePromotionPayload): Promise<Promotion> => {
  const response = await axiosClient.post(BASE_PATH, payload);
  return response.data;
};

export const deletePromotion = async (id: string): Promise<void> => {
  await axiosClient.delete(`${BASE_PATH}/${id}`);
};
