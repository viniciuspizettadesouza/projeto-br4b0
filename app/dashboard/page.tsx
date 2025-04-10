"use client";

import dynamic from "next/dynamic";
import { useDashboardContext } from "@/context/dashboard-context";

const WeeklyLoadCalculator = dynamic(
  () => import("@/components/WeeklyLoadCalculator"),
  { ssr: false }
);

export default function DashboardPage() {
  const { firstName } = useDashboardContext();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Olá, {firstName} 👋</h1>
      <WeeklyLoadCalculator />
    </>
  );
}
