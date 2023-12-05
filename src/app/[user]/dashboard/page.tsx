// "use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  const items = Array.from(
    { length: 12 },
    (_, index) => `One Piece ${index + 1}`
  );

  // other way to protect this route.
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }

  return (
    <div className="pb-12 sm:pb-0">
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
          <main className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 min-h-[80%]">
            {/* Completed List  */}
            <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
              <h1 className="text-center font-semibold bg-gray-950 p-2">
                Completed
              </h1>
              <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 border-b border-black flex items-center justify-center font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* OnHold */}
            <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
              <h1 className="text-center font-semibold bg-gray-950 p-2">
                Completed
              </h1>
              <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 border-b border-black flex items-center justify-center font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* To watch */}
            <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
              <h1 className="text-center font-semibold bg-gray-950 p-2">
                To Watch
              </h1>
              <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 border-b border-black flex items-center justify-center font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      ) : (
        <div>
          <h1>User login required</h1>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
