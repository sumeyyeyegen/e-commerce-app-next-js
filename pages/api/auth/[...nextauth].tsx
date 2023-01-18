import NextAuth, { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { authService } from "../../../services/auth.service";

const options: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    GitHub({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
    CredentialsProvider({
      id: "login",
      name: "Login",
      type: "credentials",
      credentials: {},
      async authorize(credentials: any, req: any) {
        const { email, password } = credentials as { email: string, password: string }
        try {
          return await authService.login({ email, password });
        } catch (error: any) {
          console.log('error', error.response);
          throw new Error(error.message);
        }
      }
    }),
    CredentialsProvider({
      id: "signup",
      credentials: {},
      async authorize(credentials: any) {
        const { first_name, last_name, email, password } = credentials as { first_name: string, last_name: string, email: string, password: string }
        try {
          return await authService.signup({ first_name, last_name, email, password });
        } catch (error: any) {
          console.log('error', error.response);
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login"
  },

  callbacks: {
    async signIn({ user }: any) {
      // console.log({ user });
      if (user) return true;

      return false;
    },
    async session({ session }: any) {
      session.user.isLoggedIn = true;
      return session;
    },
    async jwt({ token, user }: any) {
      return token;
    },
  },
};

export default (req: any, res: any) => NextAuth(req, res, options);