import mongoose from "mongoose";
import { ensureDbConnected } from "@/lib/ensureDbConnected";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/Schema";

// interface UserInterface {
//   username: string;
//   email: string;
//   category: {
//     onHold: string[];
//     watching: string[];
//     completed: string[];
//     toWatch: string[];
//   };
// }

ensureDbConnected();
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" });
    }

    const { animeName, animeCategory } = await req.json();
    console.log(animeName, session.user?.email);
    const update = {
      $push: { [`category.${animeCategory}`]: animeName },
    };

    const userInDb = await User.findOneAndUpdate(
      {
        email: session.user?.email,
      },
      update,
      { new: true }
    );

    console.log("akjb", userInDb.category);

    return NextResponse.json({
      message: "Success",
      userInDb,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
  //   return NextResponse.json({ user });
}
