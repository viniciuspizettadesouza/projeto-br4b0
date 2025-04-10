import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { HeaderUserActions } from "./HeaderUserActions";

export async function Header() {
  const session = await auth();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] ?? "";

  return (
    <header className="w-full border-b bg-gray-50 border-gray-200 dark:border-gray-800 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold tracking-tight">
        🧠 Projeto br4b0
      </Link>

      <HeaderUserActions isAuthenticated={!!session} firstName={firstName} image={user?.image} />
    </header>
  );
}
