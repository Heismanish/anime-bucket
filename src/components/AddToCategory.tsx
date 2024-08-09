"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function AddToCategory({ key }: { key: string }) {
  const { data: session } = useSession();
  const router = useRouter();

  const showCategoryModal = () => {
    if (!session) {
      toast.error("User login required!");
      return;
    }

    router.push(`?showDialog=y&key=${key}`);
  };
  return (
    <div>
      {/* 

      <button
        className="p-2 hover:bg-gray-100 bg-gray-300 border border-gray-100 rounded-md transition-all"
        onClick={() => showCategoryModal()}
      >
        <Image
          src="./add.svg"
          alt="add to category"
          width={18}
          height={18}
          className="object-contain"
        />
      </button> */}
    </div>
  );
}

export default AddToCategory;
