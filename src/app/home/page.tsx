"use client";
import Navbar from "@/components/Navbar";
import { useUserStore } from "@/store/zustand";
import React from "react";

function Home() {
  const { userInfo } = useUserStore();
  return (
    <div>
      <Navbar />
      Home
    </div>
  );
}

export default Home;
