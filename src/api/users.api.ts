import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { User } from "@/types";

export interface UserDetail extends User {
  total_bookings: number;
  // Add other detail fields if needed
}

export interface UserListItem extends User {
  bookings_count: number;
}

export async function getUsers(): Promise<UserListItem[]> {
  try {
    const res = await axiosClient.get("/admin/users");
    // Handle potential pagination if backend follows the items: [] pattern
    const items = Array.isArray(res.data) ? res.data : (res.data?.items || []);
    return items;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getUserById(id: string): Promise<UserDetail> {
  try {
    const res = await axiosClient.get(`/admin/users/${id}`);
    return res.data;
  } catch (err) {
    handleApiError(err);
  }
}

export async function toggleUserStatus(id: string, active: boolean): Promise<User> {
  try {
    const res = await axiosClient.patch(`/admin/users/${id}/status`, { is_active: active });
    return res.data;
  } catch (err) {
    handleApiError(err);
  }
}

export async function resetUserPassword(id: string): Promise<{ message: string }> {
  try {
    const res = await axiosClient.post(`/admin/users/${id}/reset-password`);
    return res.data;
  } catch (err) {
    handleApiError(err);
  }
}
