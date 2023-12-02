"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ToHome() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/home")}
      className="text-black p-2 rounded-xl bg-gray-50 hover:bg-white  transition-all"
    >
      Go to Home
    </button>
  );
}

export default ToHome;
