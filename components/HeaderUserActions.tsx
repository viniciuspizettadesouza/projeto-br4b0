"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useDashboardContext } from "@/context/dashboard-context";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function HeaderUserActions() {
  const pathname = usePathname();
  const isOnSignInPage = pathname === "/sign-in";

  const { firstName, image, email } = useDashboardContext();
  const isAuthenticated = !!email;

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <span className="text-sm font-medium">{firstName}</span>
              {image && (
                <Image
                  src={image}
                  alt={`Foto de ${firstName}`}
                  width={32}
                  height={32}
                  className="rounded-full border border-gray-300 dark:border-gray-600"
                />
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile" className="w-full">
                Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/api/auth/signout" className="w-full text-red-600">
                Sair
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  if (isOnSignInPage) return null;

  return (
    <Link
      href="/sign-in"
      className="text-sm px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      Entrar
    </Link>
  );
}
