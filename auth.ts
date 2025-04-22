import NextAuth, { type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const ADMIN_EMAILS = ["viniciuspzt@gmail.com", "joaolisboa@projetobravo.com.br"];

const LOCAL_USERS: (User & { role: "admin" | "user" })[] = [
  {
    id: "1",
    email: "admin@exemplo.com",
    name: "Admin Local",
    role: "admin",
  },
  {
    id: "2",
    email: "user@exemplo.com",
    name: "Usuário Normal",
    role: "user",
  },
];

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) return null;

        const user = LOCAL_USERS.find((u) => u.email === email);
        const expectedPassword = user?.role === "admin" ? "admin123" : "user123";

        if (user && password === expectedPassword) {
          return user;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { prompt: "select_account" } },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user?.role) {
        token.role = user.role;
      } else if (account?.provider === "google" && ADMIN_EMAILS.includes(token.email || "")) {
        token.role = "admin";
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role ?? "user") as "admin" | "user";
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
});
