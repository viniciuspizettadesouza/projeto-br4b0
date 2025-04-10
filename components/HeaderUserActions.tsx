"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

type Props = {
  isAuthenticated: boolean;
  firstName: string;
  image?: string | null;
};

export function HeaderUserActions({ isAuthenticated, firstName, image }: Props) {
  const pathname = usePathname();
  const isOnSignInPage = pathname === "/sign-in";

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Painel
        </Link>

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
              <Link href="/dashboard/profile" className="w-full">
                Ver perfil
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
