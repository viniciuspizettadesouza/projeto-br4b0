"use client";

import { createContext, useContext } from "react";

type DashboardContextType = {
  firstName: string;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardContextProvider({
  children,
  firstName,
}: {
  children: React.ReactNode;
  firstName: string;
}) {
  return (
    <DashboardContext.Provider value={{ firstName }}>
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
