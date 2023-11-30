import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    // async authorize(credentials, req) {
    // if (typeof credentials !== "undefined") {
    //   const res = await authenticate(
    //     credentials.email,
    //     credentials.password
    //   );
    //   if (typeof res !== "undefined") {
    //     return { ...res.user, apiToken: res.token };
    //   } else {
    //     return null;
    //   }
    // } else {
    //   return null;
    // }
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
