import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Provider from "./_context/client-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/authOptions";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Bucket",
  description: "An anime log book you weebs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          {children}
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}
