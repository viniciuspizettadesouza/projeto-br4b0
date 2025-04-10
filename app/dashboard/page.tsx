import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {session.user?.name}!</p>
      <p>Email: {session.user?.email}</p>
      <img
        src={session.user?.image ?? ""}
        alt="User Avatar"
        className="w-16 h-16 rounded-full mt-4"
      />
      <a
        href="/api/auth/signout"
        className="mt-6 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sign out
      </a>
    </main>
  );
}
