import type { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AsideNavigation } from "@/components/AsideNavigation";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex bg-gray-50  text-black ">
      <AsideNavigation />
      <div className="flex-1 px-6 py-12 bg-white rounded-tl-3xl">
        {children}
      </div>
    </div>
  );
}
