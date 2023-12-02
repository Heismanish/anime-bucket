"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function Logout() {
  const router = useRouter();
  return (
    <div>
      <button
        className="ml-2 p-2 border border-white hover:bg-white active:border-none hover:text-black transition  rounded-md"
        onClick={() => {
          router.push("/home");
          signOut();
        }}
      >
        {" "}
        Logout
      </button>
    </div>
  );
}

export default Logout;
