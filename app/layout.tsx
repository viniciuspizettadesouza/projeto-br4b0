import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { auth } from "@/auth";
import { Header } from "@/components/Header";
import { DashboardContextProvider } from "@/context/dashboard-context";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyApp",
  description: "A modern Next.js app with Auth.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const { email, image, role = "user" } = session?.user ?? {};

  const firstName = session?.user?.name?.split(" ")[0] ?? "";

  return (
    <html lang="en" className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen`}
      >
        <DashboardContextProvider
          firstName={firstName}
          email={email ?? undefined}
          image={image ?? undefined}
          role={role}
        >
          <Header />
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </DashboardContextProvider>
      </body>
    </html>
  );
}
