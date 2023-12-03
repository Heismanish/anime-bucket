"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
  title: string;
  onClose: () => {};
  onOk: () => {};
  children: React.ReactNode;
};

function CategoryModal({ title, onClose, onOk, children }: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  const router = useRouter();

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.push("/home");
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };
  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-1000 rounded-xl backdrop:bg-gray-200/10"
      >
        <div className="w-[500px] max-w-full bg-gray-200 flex flex-col">
          <div className="flex justify-between flex-row mb-4 pt-2 px-5 bg-gray-300">
            <h1 className="text-2xl">{title}</h1>
            <button
              onClick={closeDialog}
              className=" p-2 bg-red-500 hover:bg-red-600 border-none cursor-pointer w-8 h-8 font-bold  text-white rounded"
            >
              x
            </button>
          </div>
          <div className="px-5 pb-6">
            {children}
            <div className="flex justify-end flex-row">
              <button
                onClick={clickOk}
                className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;
  return dialog;
}

export default CategoryModal;
