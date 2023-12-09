import React from "react";
import SignUp from "./SignUp";
import Logout from "./Logout";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="sticky z-[100] top-0 px-4 py-2 flex justify-between items-center bg-[#111111] opacity-90">
      <span className="font-bold text-lg">
        {" "}
        <Link href={"/home"}>
          Ani<span className="text-blue-500">Bucket</span>
        </Link>
      </span>
      {session ? (
        <div className="flex items-center gap-2">
          <span className="font-semibold ">
            <Link
              href={
                `/${session?.user?.name?.split(" ")[0]}/dashboard` || "/home"
              }
            >
              {session?.user?.name?.split(" ")[0]}
            </Link>
          </span>
          {/* <Avatar src={session.user?.image!} size="40" round={true} /> */}
          <Image
            src={session?.user?.image!}
            width={40}
            height={40}
            alt="pfp"
            className="rounded-full"
          />
          <Logout></Logout>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <SignUp data="Login" />
        </div>
      )}
    </div>
  );
}

export default Navbar;
