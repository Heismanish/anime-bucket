"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function AddToCategory() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  console.log(session);
  const showCategoryModal = () => {
    if (!session) {
      toast.error("User login required!");
      return;
    }
    toast.success("Userd!");
    router.push("?showDialog=y");
    setShowModal(!showModal);
  };
  return (
    <div>
      <div>
        <Toaster />
      </div>

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
      </button>
    </div>
  );
}

export default AddToCategory;
