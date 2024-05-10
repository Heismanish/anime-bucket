"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  onHold: string[];
  completed: string[];
  watching: string[];
  toWatch: string[];
}
const Counts = () => {
  const [animeListCount, setAnimeListCount] = useState<Props>();

  const fetchAnimeCount = async () => {
    const response = await axios.get("/api/getAnimes");
    const data = await response.data;
    setAnimeListCount(data.animes);
  };

  useEffect(() => {
    fetchAnimeCount();
  }, []);

  useEffect(() => {
    console.log(animeListCount);
  }, [animeListCount]);

  return (
    <div className="mt-4 grid sm:grid-cols-3 grid-cols-2  gap-2 sm:gap-4 text-xs  sm:text-sm">
      <p className="min-w-full bg-blue-500 p-1 flex justify-center items-center rounded-md font-semibold">
        Completed :{" "}
        <span className="ml-1"> {animeListCount?.completed.length} </span>
      </p>
      <p className="bg-yellow-500 p-1 flex justify-center items-center rounded-md font-semibold">
        On Hold : <span className="ml-1">{animeListCount?.onHold.length} </span>
      </p>
      <p className=" bg-green-600 p-1 flex justify-center items-center rounded-md font-semibold">
        To Watch :{" "}
        <span className="ml-1"> {animeListCount?.toWatch.length} </span>
      </p>
    </div>
  );
};

export default Counts;
