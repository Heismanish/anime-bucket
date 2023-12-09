"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  onHold: string[];
  completed: string[];
  watching: string[];
  toWatch: string[];
}

function AnimeList() {
  const [animeList, setAnimeList] = useState<Props>();
  const items = Array.from(
    { length: 12 },
    (_, index) => `One Piece ${index + 1}`
  );
  const fetchAnime = async () => {
    const response = await axios.get("/api/getAnimes");
    const data = await response.data;
    setAnimeList(data.animes);
  };
  useEffect(() => {
    fetchAnime();
    // console.log(data);
  }, []);
  return (
    <div>
      {" "}
      <main className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 min-h-[80%]">
        {/* Completed List  */}
        <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
          <h1 className="text-center font-semibold bg-gray-950 p-2">
            Completed
          </h1>
          <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
            {animeList?.completed.map((item, index) => (
              <li
                key={index}
                className="py-1 border-b border-black flex items-center justify-center font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* OnHold */}
        <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
          <h1 className="text-center font-semibold bg-gray-950 p-2">On Hold</h1>
          <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
            {animeList?.onHold.map((item, index) => (
              <li
                key={index}
                className="py-1 border-b border-black flex items-center justify-center font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* To watch */}
        <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
          <h1 className="text-center font-semibold bg-gray-950 p-2">
            To Watch
          </h1>
          <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
            {animeList?.toWatch.map((item, index) => (
              <li
                key={index}
                className="py-1 border-b border-black flex items-center justify-center font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Watching */}
        <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
          <h1 className="text-center font-semibold bg-gray-950 p-2">
            Watching{" "}
          </h1>
          <ul className="list flex flex-col gap-2 list-none max-h-[440px] overflow-y-auto ">
            {animeList?.watching.map((item, index) => (
              <li
                key={index}
                className="py-1 border-b border-black flex items-center justify-center font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default AnimeList;
