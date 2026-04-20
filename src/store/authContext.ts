import { createContext } from "react";
import type { User } from "@/types";

export type { User };

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user?: User | null) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
