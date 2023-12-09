// "use client";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/SignUp";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  // other way to protect this route.
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }
  return (
    <div className="pb-12 sm:pb-0">
      <Navbar></Navbar>
      {session ? (
        <div className="md:px-16 md:py-8 sm:px-6 px-2   py-2 flex flex-col md:gap-16 gap-8 h-auto sm:min-h-full">
          {/* User Info */}
          <section className="flex flex-row  sm:gap-12 gap-6 ">
            <div className="flex justify-center items-center">
              <Image
                src={session?.user?.image || ""}
                width={100}
                height={100}
                alt="pfp"
                className="rounded-full border-2 border-white"
              />
            </div>
            {/* user info */}
            <div>
              <h1 className="sm:text-2xl text-lg font-semibold">
                {session.user?.name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                {session?.user?.email}
              </p>
              <div className="mt-4 grid sm:grid-cols-3 grid-cols-2  gap-2 sm:gap-4 text-xs  sm:text-sm">
                <p className="min-w-full bg-blue-500 p-1 flex justify-center items-center rounded-md font-semibold">
                  Completed : <span className="ml-1"> 00 </span>
                </p>
                <p className="bg-yellow-500 p-1 flex justify-center items-center rounded-md font-semibold">
                  On Hold : <span className="ml-1"> 00 </span>
                </p>
                <p className=" bg-green-600 p-1 flex justify-center items-center rounded-md font-semibold">
                  To Watch : <span className="ml-1"> 00 </span>
                </p>
              </div>
            </div>
          </section>

          {/* Anime Bucket */}
          <AnimeList></AnimeList>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center font-semibold sm:pt-18 pt-12 ">
          <h1 className="text-2xl">User login required</h1>
          <span className="text-3xl">⬇️</span>
          <SignUp data="Login To Continue"></SignUp>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
