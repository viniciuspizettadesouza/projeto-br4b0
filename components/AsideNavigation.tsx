"use client";

import Link from "next/link";
import { useDashboardContext } from "@/context/dashboard-context";
import {
  LayoutDashboard,
  BarChart,
  User,
  Palette,
  Repeat,
  TrendingUp,
  BookOpen,
  Video,
  UserPlus,
  Settings,
  Users,
  ClipboardList,
} from "lucide-react";

const userLinks = [
  { label: "Controle Visual", href: "/dashboard/visual-control", icon: Palette },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Métricas", href: "/dashboard/performance", icon: TrendingUp },
  { label: "Meu Progresso", href: "/dashboard/progress", icon: BarChart },
  { label: "Perfil", href: "/dashboard/profile", icon: User },
  { label: "Recursos", href: "/dashboard/resources", icon: BookOpen },
  { label: "Trilha de Vídeo", href: "/dashboard/videos", icon: Video },
  { label: "Trocar de Plano", href: "/dashboard/change-study-plan", icon: Repeat },
];

const adminLinks = [
  { label: "Alterar Plano", href: "/admin/change-plan", icon: Settings },
  { label: "Cadastro Manual", href: "/admin/create-user", icon: UserPlus },
  { label: "Estatísticas", href: "/admin/stats", icon: TrendingUp },
  { label: "Gerenciar Alunos", href: "/admin/students", icon: Users },
  { label: "Listagem de Planos", href: "/admin/plans", icon: ClipboardList },
];

export function AsideNavigation() {
  const { role } = useDashboardContext();

  return (
    <aside className="w-64 h-screen bg-gray-50 dark:bg-gray-900 p-6 space-y-10">
      <div>
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav className="space-y-4">
          {userLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-2 hover:text-blue-600">
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {role === "admin" && (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Administração</h3>
          <nav className="space-y-4">
            {adminLinks.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className="flex items-center gap-2 hover:text-blue-600">
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
