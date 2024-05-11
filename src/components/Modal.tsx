"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import axios from "axios";
import { AnimeData } from "@/lib/AnimeData";
import Image from "next/image";
import { AnimeDataHome } from "@/lib/AnimeResponse";
import Loader from "./Loader";
import { toast, Toaster } from "react-hot-toast";
import { z } from "zod";

type Props = {
  title: string;
  onClose: () => {};
  onOk: () => {};
  children: React.ReactNode;
};

const apiBase = process.env.NEXT_PUBLIC_API_BASE!;

function CategoryModal({ title, onClose, onOk, children }: Props) {
  const searchParams = useSearchParams();
  const [animeData, setAnimeData] = useState<Partial<AnimeDataHome> | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  const router = useRouter();
  const animeId = searchParams.get("key");

  // zod schema validator:
  const apiInput = z.string().min(2);

  const addToList = async (animeName: string, category: string) => {
    try {
      apiInput.parse(animeName);
      apiInput.parse(category);

      console.log(animeName);
      const response = await axios.post("/api/addToHold", {
        animeName,
        animeCategory: category,
      });

      console.log(response.status);
      if (response.status == 200) {
        toast(`${animeName} adde to ${category}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnimeDetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiBase + animeId);
      const data = await response.data;
      // console.log(data.data);
      if (data) {
        setLoading(true);
      }
      setAnimeData(data.data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
      fetchAnimeDetail();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog, animeId, apiBase]);

  // useEffect(() => {
  //   console.log(animeData);
  // }, [animeData]);

  const closeDialog = () => {
    dialogRef.current?.close();
    setAnimeData({});
    router.push("/home");
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog = showDialog === "y" && (
    <dialog
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1000 rounded-xl backdrop-filter backdrop-blur-lg"
    >
      <Toaster />
      {
        <div className="w-[560px] max-w-full bg-[#151414] text-white flex flex-col">
          {/* Heading */}
          <div className="flex justify-between flex-row mb-4 py-2 px-5 bg-gray-950">
            <h1 className="text-2xl font-semibold">
              {animeData?.attributes?.titles.en}
            </h1>
            <button
              onClick={closeDialog}
              className="p-2 bg-red-500 hover:bg-red-600 border-none cursor-pointer w-8 h-8 font-bold text-white rounded flex justify-center items-center"
            >
              x
            </button>
          </div>
          <div className="px-5 pb-6">
            <main className="flex gap-4">
              <div className="flex gap-4 min-h-[200px] min-w-[100px]">
                <Image
                  src={animeData?.attributes?.coverImage.original! || ""}
                  alt={animeData?.attributes?.titles.en || "Anime Poster"}
                  width={400}
                  height={200}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-wrap overflow-hidden text-ellipsis w-full px-2">
                <div className="flex h-64 overflow-y-auto mb-5  ">
                  {animeData?.attributes?.description}...
                </div>
                <div className="flex flex-row gap-4 ">
                  <div className="flex items-center gap-2">
                    <Image
                      src="./star.svg"
                      alt="star"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <p className="text-base font-bold text-[#f7f2f2]">
                      {animeData?.attributes?.averageRating}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="./episodes.svg"
                      alt="episodes"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <p className="text-base text-white font-bold">
                      {animeData?.attributes?.episodeCount}
                    </p>
                  </div>
                </div>
              </div>
            </main>

            <div className="flex justify-evenly mt-4">
              <section className="grid sm:grid-cols-4 grid-cols-2 gap-2 sm:gap-4">
                <button
                  onClick={() =>
                    addToList(
                      animeData?.attributes?.titles?.en || " ",
                      "toWatch" || ""
                    )
                  }
                  className={
                    animeData
                      ? "col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                      : `disabled col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white`
                  }
                >
                  To Watch
                </button>
                <button
                  onClick={() =>
                    addToList(
                      animeData?.attributes?.titles?.en || " ",
                      "completed" || ""
                    )
                  }
                  className={
                    animeData
                      ? "col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                      : `disabled col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white`
                  }
                >
                  Completed
                </button>
                <button
                  onClick={() =>
                    addToList(
                      animeData?.attributes?.titles?.en || " ",
                      "onHold" || ""
                    )
                  }
                  className={
                    animeData
                      ? "col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                      : `disabled col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white`
                  }
                >
                  On Hold
                </button>
                <button
                  onClick={() =>
                    addToList(
                      animeData?.attributes?.titles?.en || " ",
                      "watching" || ""
                    )
                  }
                  className={
                    animeData
                      ? "col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                      : `disabled col-span-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white`
                  }
                >
                  Watching
                </button>
              </section>
            </div>
          </div>
        </div>
      }
    </dialog>
  );

  return dialog;
}

export default CategoryModal;
