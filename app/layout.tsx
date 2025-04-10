import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans min-h-screen`}
      >
        <Header />
        <main className="px-6">{children}</main>
      </body>
    </html>
  );
}
