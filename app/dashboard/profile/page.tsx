import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen px-6 py-12 text-black dark:text-white bg-white dark:bg-black">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
      <p className="text-lg">Bem-vindo, {session.user?.name}!</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {session.user?.email}
      </p>
      <Image
        src={session.user?.image ?? ""}
        alt="User Avatar"
        className="w-20 h-20 rounded-full border mt-4"
      />
      <Link
        href="/api/auth/signout"
        className="mt-6 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sair
      </Link>
    </main>
  );
}
