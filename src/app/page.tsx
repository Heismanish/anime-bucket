import SignUp from "@/components/SignUp";
import ToHome from "@/components/ToHome";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* //Signup */}
      <div className="mt-2">
        <SignUp></SignUp>
        <ToHome></ToHome>
      </div>
    </main>
  );
}
