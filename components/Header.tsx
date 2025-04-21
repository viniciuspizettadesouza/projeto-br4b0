import Link from "next/link";
import { HeaderUserActions } from "./HeaderUserActions";

export function Header() {
  return (
    <header className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold tracking-tight">
        🧠 Projeto br4b0
      </Link>

      <HeaderUserActions />
    </header>
  );
}
