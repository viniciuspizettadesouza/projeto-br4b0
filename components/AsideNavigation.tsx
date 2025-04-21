"use client";

import Link from "next/link";
import { useDashboardContext } from "@/context/dashboard-context";

const dashboardLinks = [
  { label: "Dashboard", href: "/dashboard", emoji: "📈" },
  { label: "Alterar Plano", href: "/dashboard/change-plan", emoji: "📝" },
  { label: "Meu Perfil", href: "/dashboard/profile", emoji: "⚙️" },
];

const adminLinks = [{ label: "Cadastro Manual", href: "/admin/create-user", emoji: "👤" }];

export function AsideNavigation() {
  const { role } = useDashboardContext();

  return (
    <aside className="w-64 h-screen bg-gray-50 dark:bg-gray-900 p-6 space-y-10">
      <div>
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav className="space-y-4">
          {dashboardLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block hover:text-blue-600">
              {link.emoji} {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {role === "admin" && (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Administração</h3>
          <nav className="space-y-4">
            {adminLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block hover:text-blue-600">
                {link.emoji} {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
