import type { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardContextProvider } from "@/context/dashboard-context";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  const firstName = session.user?.name?.split(" ")[0] ?? "";

  return (
    <div className="min-h-screen py-12 px-6 bg-white dark:bg-black text-black dark:text-white">
      <DashboardContextProvider firstName={firstName}>
        {children}
      </DashboardContextProvider>
    </div>
  );
}