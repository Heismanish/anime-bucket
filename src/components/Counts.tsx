"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

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

  //   useEffect(() => {
  //     console.log(animeListCount);
  //   }, [animeListCount]);

  return (
    <div className="mt-4 grid sm:grid-cols-4 grid-cols-2  gap-2 sm:gap-4 text-xs  sm:text-sm">
      <p className=" bg-blue-500 p-1 flex justify-center items-center rounded-md font-semibold ">
        <span>Completed : {animeListCount?.completed.length || 0} </span>
      </p>
      <p className="bg-yellow-500 p-1 flex justify-center items-center rounded-md font-semibold">
        <span> On Hold : {animeListCount?.onHold.length || 0} </span>
      </p>
      <p className=" bg-green-600 p-1 flex justify-center items-center rounded-md font-semibold">
        {" "}
        <span> To Watch : {animeListCount?.toWatch.length || 0} </span>
      </p>
      <p className=" bg-orange-600 p-1 flex justify-center items-center rounded-md font-semibold">
        {" "}
        <span> Watching: {animeListCount?.watching.length || 0} </span>
      </p>
    </div>
  );
};

export default Counts;
