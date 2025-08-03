"use client";

import Link from "next/link";
import Image from "next/image";
import { useDashboardContext } from "@/context/dashboard-context";
import { StudentDashboardPanel } from "@/components/StudentDashboard";

export default function ProfilePage() {
  const { firstName, email, image } = useDashboardContext();

  return (
    <div className="min-h-screen text-black dark:text-white bg-white dark:bg-black">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>

      <StudentDashboardPanel />
      <p className="text-lg">Bem-vindo, {firstName}!</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{email}</p>
      <Image
        src={image ?? ""}
        alt="User Avatar"
        className="w-20 h-20 rounded-full border mt-4"
        width={80}
        height={80}
      />
      <Link
        href="/api/auth/signout"
        className="mt-6 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sair
      </Link>
    </div>
  );
}
