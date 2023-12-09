import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/Schema";
import { authOptions } from "@/lib/authOptions";

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

// ensureDbConnected();
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" });
    }

    const { animeName, animeCategory } = await req.json();
    // console.log(animeName, session.user?.email, animeCategory);

    const removeFromLists = ["onHold", "watching", "completed", "toWatch"];
    removeFromLists.forEach((list) => {
      if (list !== animeCategory) {
        User.updateOne(
          { email: session.user?.email },
          { $pull: { [`category.${list}`]: animeName } }
        ).exec();
      }
    });

    const update = {
      $push: { [`category.${animeCategory}`]: animeName },
    };

    const userInDb = await User.findOneAndUpdate(
      {
        email: session.user?.email,
        [`category.${animeCategory}`]: { $ne: animeName },
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
}
