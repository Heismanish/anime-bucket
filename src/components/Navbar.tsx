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
  //   console.log(session);
  return (
    <div className=" top-0 px-4 py-2 flex justify-between items-center relative">
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
        <SignUp />
      )}
    </div>
  );
}

export default Navbar;
