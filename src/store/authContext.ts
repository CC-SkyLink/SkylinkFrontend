import { createContext } from "react";

export interface User {
  id: string;
  name?: string;
  email?: string;
  role?: "user" | "admin" | string;
}

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