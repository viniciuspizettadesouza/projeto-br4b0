"use client";

import Link from "next/link";
import { useDashboardContext } from "@/context/dashboard-context";

const userLinks = [
  { label: "Dashboard", href: "/dashboard", emoji: "📈" },
  { label: "Meu Progresso", href: "/dashboard/progress", emoji: "📊" },
  { label: "Meu Perfil", href: "/dashboard/profile", emoji: "⚙️" },
];

const adminLinks = [
  { label: "Cadastro Manual", href: "/admin/create-user", emoji: "👤" },
  { label: "Alterar Plano", href: "/admin/change-plan", emoji: "📝" },
  { label: "Listagem de Planos", href: "/admin/plans", emoji: "📚" },
  { label: "Estatísticas", href: "/admin/stats", emoji: "📊" },
  { label: "Gerenciar Alunos", href: "/admin/students", emoji: "🎓" },
];

export function AsideNavigation() {
  const { role } = useDashboardContext();

  return (
    <aside className="w-64 h-screen bg-gray-50 dark:bg-gray-900 p-6 space-y-10">
      <div>
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav className="space-y-4">
          {userLinks.map((link) => (
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
