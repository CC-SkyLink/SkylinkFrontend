import React, { useEffect, useState } from "react";
import { AuthContext, type AuthContextType, type User } from "./authContext";
import { isTokenExpired } from "@/utils/token";
import { getProfile } from "@/api/auth.api";
import logos1 from "@/assets/logos/Logos-1.png";

export type { User, AuthContextType } from "./authContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(() => {
    try {
      const stored = localStorage.getItem("token");
      if (!stored || isTokenExpired(stored)) {
        localStorage.removeItem("token");
        return null;
      }
      return stored;
    } catch {
      return null;
    }
  });

  const [user, setUserState] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const startTime = Date.now();
      if (token) {
        try {
          const profile = await getProfile();
          setUserState(profile);
        } catch {
          logout();
        }
      }
      
      const elapsed = Date.now() - startTime;
      const minDuration = 2500; // Enforce minimum 2.5 seconds loading view
      const remainingDelay = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsInitializing(false);
      }, remainingDelay);
    };

    initAuth();
  }, []);

  useEffect(() => {
    try {
      if (token) localStorage.setItem("token", token);
      else localStorage.removeItem("token");
    } catch {
      // ignore localStorage errors
    }
  }, [token]);

  const login = (newToken: string, newUser: User | null = null) => {
    setToken(newToken);
    setUserState(newUser);
  };

  const logout = () => {
    setToken(null);
    setUserState(null);
    try {
      localStorage.removeItem("token");
    } catch {
      // ignore
    }
  };

  const setUser = (u: User | null) => {
    setUserState(u);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
    setUser,
  };

  if (isInitializing) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#F0F5FA] select-none">
        <style>{`
          @keyframes floatLogo {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-8px) scale(1.03); }
          }
          @keyframes progressLoad {
            0% { left: -100%; width: 50%; }
            50% { width: 70%; }
            100% { left: 100%; width: 50%; }
          }
          @keyframes textPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .animate-float-logo {
            animation: floatLogo 2s ease-in-out infinite;
          }
          .animate-progress-load {
            animation: progressLoad 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .animate-text-pulse {
            animation: textPulse 1.5s ease-in-out infinite;
          }
        `}</style>
        <div className="flex flex-col items-center animate-in fade-in duration-300">
          {/* Logo container with float animation */}
          <div className="relative mb-5 flex items-center justify-center">
            {/* Ambient decorative glowing back-ring */}
            <div className="absolute size-24 rounded-full bg-blue-100/40 blur-xl animate-pulse" />
            <img 
              src={logos1} 
              alt="SkyLink Logo" 
              className="size-20 relative z-10 animate-float-logo object-contain" 
            />
          </div>
          
          {/* Brand Name */}
          <h1 
            className="text-3xl font-normal text-[#496B92] tracking-wider mb-4 animate-text-pulse"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            SkyLink
          </h1>
          
          {/* Creative Progress Bar */}
          <div className="h-1 w-32 bg-slate-200/80 rounded-full overflow-hidden relative">
            <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#496B92] to-[#6b8eb7] rounded-full animate-progress-load" />
          </div>
          
          {/* Subtext */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3 animate-pulse">
            Preparing flight details...
          </p>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;