"use client";

import { createContext, useContext } from "react";

type DashboardContextType = {
  firstName: string;
  email?: string;
  image?: string;
  role?: "admin" | "user";
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardContextProvider({
  children,
  firstName,
  email,
  image,
  role
}: {
  children: React.ReactNode;
  firstName: string;
  email?: string;
  image?: string;
  role?: "admin" | "user";
}) {
  return (
    <DashboardContext.Provider value={{ firstName, email, image, role }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboardContext must be used within DashboardContextProvider");
  }
  return context;
}
