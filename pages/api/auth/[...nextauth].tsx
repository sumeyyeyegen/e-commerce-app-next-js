import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github";

const options = {
  providers: [
    GitHub({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
  ],
};

export default (req: any, res: any) => NextAuth(req, res, options);