import { useContext } from "react";
import { AuthContext, type AuthContextType } from "./authContext";

export function useAuthStore(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthStore must be used within an AuthProvider");
  return ctx;
}

export default useAuthStore;