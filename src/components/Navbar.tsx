"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "react-avatar";
import SignUp from "./SignUp";
import Logout from "./Logout";
import Loader from "./Loader";

function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader></Loader>;
  }

  return (
    <div className="sticky z-[100] top-0 px-4 py-2 flex justify-between items-center bg-[#111111] opacity-90">
      <span className="font-bold text-base">Logo</span>
      {session ? (
        <div className="flex items-center gap-2">
          <span className="font-semibold ">
            {session?.user?.name?.split(" ")[0]}
          </span>
          <Avatar src={session.user?.image!} size="40" round={true} />
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
