"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/zustand";

function SignUp() {
  const router = useRouter();
  const { data: session } = useSession();
  const { userInfo, updateUserInfo } = useUserStore();
  useEffect(() => {
    if (session && session.user) {
      console.log(session.user);
      updateUserInfo({
        name: session.user.name || "", // Handle potential null or undefined values
        email: session.user.email || "",
        image: session.user.image || "",
      });
      console.log(userInfo);

      router.push("/home");
    }
  }, [session, router, updateUserInfo, userInfo]);

  return (
    <div>
      {" "}
      <button
        onClick={() => signIn()}
        className="text-black p-2 rounded-xl bg-gray-50 hover:bg-white  transition-all"
      >
        SignUp/Login
      </button>
    </div>
  );
}

export default SignUp;
