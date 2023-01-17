import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    GitHub({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
    // CredentialsProvider({
    //   id: "login",
    //   async authorize(credentials:any) {
    //     try {
    //       return await Auth.login(credentials);
    //     } catch (error) {
    //       throw new Error(error.message);
    //     }
    //   },
    // }),
    // CredentialsProvider({
    //   id: "signup",
    //   async authorize(credentials:any) {
    //     try {
    //       return await Auth.signup(credentials);
    //     } catch (error) {
    //       throw new Error(error.message);
    //     }
    //   },
    // }),
  ],
};

export default (req: any, res: any) => NextAuth(req, res, options);