import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "admin" | "user";
    };
  }

  interface User {
    role?: "admin" | "user";
  }

  interface JWT {
    role?: "admin" | "user";
  }
}
