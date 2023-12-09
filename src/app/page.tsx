import SignUp from "@/components/SignUp";
import ToHome from "@/components/ToHome";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-around gap-2">
      {/* //Signup */}
      <h1 className="text-3xl font-bold">
        Ani <span className="text-blue-500">Bucket</span>{" "}
      </h1>
      <main>
        <SignUp data="SignIn"></SignUp>
        <ToHome></ToHome>
      </main>
    </div>
  );
}
