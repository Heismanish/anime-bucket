"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/zustand";

function SignUp({ data }: { data: string }) {
  const router = useRouter();
  const { data: session } = useSession();
  // const { userInfo, updateUserInfo } = useUserStore();

  useEffect(() => {
    if (session && session.user) {
      // console.log(session.user);
      // updateUserInfo({
      //   name: session.user.name || "", // Handle potential null or undefined values
      //   email: session.user.email || "",
      //   image: session.user.image || "",
      // });
      // console.log(userInfo);

      router.push("/home");
    }
  }, [session, router]);

  return (
    <>
      <button
        type="button"
        onClick={() => signIn()}
        className="text-white font-semibold bg-[#2d63b8] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        {data}
      </button>
    </>
  );
}

export default SignUp;
