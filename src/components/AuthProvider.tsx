"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { AuthSession } from "@/types";
import {
  getServerSession,
  getSession,
  setSession,
  signOutUser,
  subscribeSession,
} from "@/lib/auth";

interface AuthContextValue {
  user: AuthSession | null;
  ready: boolean;
  setUser: (user: AuthSession | null) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const user = useSyncExternalStore(
    subscribeSession,
    getSession,
    getServerSession
  );

  const value = useMemo(
    () => ({
      user,
      ready,
      setUser: (next: AuthSession | null) => setSession(next),
      signOut: () => signOutUser(),
    }),
    [user, ready]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
