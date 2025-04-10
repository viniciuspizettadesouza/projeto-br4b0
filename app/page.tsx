import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="min-h-screen dark:bg-black text-gray-900 dark:text-white font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
          Esta é uma área pública do sistema. Todos podem acessá-la.
        </p>
      </main>
    </div>
  );
}
