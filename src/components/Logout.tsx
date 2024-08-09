"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function Logout() {
  const router = useRouter();
  return (
    <div>
      <button
        className="text-sm ml-2 p-4  active:border-none text-white hover:text-red-600 transition duration-200 rounded-2xl font-semibold bg-gray-900/90 hover:bg-gray-800/80"
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
