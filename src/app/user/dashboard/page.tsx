import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }
  return (
    <div>
      {session ? (
        <div> {JSON.stringify(session.user?.name)}</div>
      ) : (
        <div>
          <h1>User login required</h1>
        </div>
      )}
      Dahsboard
    </div>
  );
}

export default Dashboard;
