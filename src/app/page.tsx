"use client";
import Image from "next/image";

export default function Home() {
  const handleSignup = () => {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* //Signup */}
      <div className="mt-2">
        <button
          onClick={handleSignup}
          className="text-black p-2 rounded-xl bg-gray-50 hover:bg-white  transition-all"
        >
          Signup/Login
        </button>
      </div>
    </main>
  );
}
