import { authOptions } from "@/lib/authOptions";
import { User } from "@/models/Schema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 500 });
    }
    const email = session?.user?.email;

    if (!email) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    const data = await User.findOne({ email });
    if (!data) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }
    console.log(data.category);

    return NextResponse.json({ animes: data.category }, { status: 200 });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// import { NextApiRequest } from "next";

// export async function getServerSideProps(context: NextApiRequest) {
//   const session = await getServerSession(context);

//   if (!session) {
//     // User not logged in
//     return NextResponse.json({ error: "unauthorized" }, { status: 500 });
//   }

//   return {
//     session,
//   };
// }
