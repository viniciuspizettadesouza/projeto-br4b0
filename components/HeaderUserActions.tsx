"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
          Dashboard
        </Link>

        <div className="flex items-center gap-2">
          {image && (
            <Image
              src={image}
              alt={firstName}
              width={32}
              height={32}
              className="rounded-full border border-gray-300 dark:border-gray-600"
            />
          )}
          <span className="text-sm font-medium">{firstName}</span>
          <a
            href="/api/auth/signout"
            className="text-xs text-red-600 hover:text-red-700 underline"
          >
            Sign out
          </a>
        </div>
      </div>
    );
  }

  if (isOnSignInPage) return null;

  return (
    <Link
      href="/sign-in"
      className="text-sm px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      Sign in
    </Link>
  );
}
