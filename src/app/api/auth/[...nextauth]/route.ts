import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";
import { ensureDbConnected } from "@/lib/ensureDbConnected";
import bcryptjs from "bcryptjs";
import { User } from "@/models/Schema";

export const authOptions: AuthOptions = {
  providers: [
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   type: "credentials",
    //   credentials: {
    //     username: { label: "Name", type: "text", placeholder: "Light Yagami" },
    //     email: {
    //       label: "Email",
    //       type: "text",
    //       placeholder: "example@gmail.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     await ensureDbConnected();

    //     if (
    //       !credentials ||
    //       !credentials.email ||
    //       !credentials.password ||
    //       !credentials.username
    //     ) {
    //       return null;
    //     }

    //     const username = credentials.username;
    //     const email = credentials.email;
    //     const password = credentials.password;

    //     const hashedPassword = await bcryptjs.hash(password, 10);

    //     const alreadyExistingUser = await User.findOne({ email });
    //     if (alreadyExistingUser) {
    //       if (alreadyExistingUser.password === hashedPassword) {
    //         return { id: alreadyExistingUser._id, username };
    //       } else {
    //         return null;
    //       }
    //     }
    //     const newUser = new User({ username, email, hashedPassword });
    //     const newSavedUser = await newUser.save();
    //     console.log(newSavedUser);
    //     return {
    //       id: newSavedUser._id,
    //       username: newSavedUser.username,
    //       email: newSavedUser.email,
    //     };
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const db = await ensureDbConnected();

      // console.log("Hello");
      // console.log(profile?.email, !profile?.name);

      if (!profile?.email && !profile?.name) {
        throw new Error("No signIn data found");
      }

      const existingUser = await User.findOne({
        email: profile?.email,
        username: profile?.name,
      });

      if (existingUser) {
        console.log("existed");
        return true;
      }

      const newUser = new User({
        username: profile?.name,
        email: profile?.email,
        // category: {
        //   onHold: [],
        //   watching: [],
        //   completed: [],
        //   toWatch: [],
        // },
      });
      const newSavedUser = await newUser.save();
      console.log(newSavedUser);

      return true; // Return true to allow sign-in
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 * 30 },
  // jwt: { encryption: true },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
