import { authOptions } from "@/lib/authOptions";
import { User } from "@/models/Schema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  try {
    // const { category } = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 500 });
    }
    const email = session?.user?.email;
    const data = await User.findOne({ email });
    console.log(data.category);
    return NextResponse.json(
      { message: "success", animes: data.category },
      { status: 200 }
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
}
