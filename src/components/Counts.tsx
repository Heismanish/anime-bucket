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

  return (
    <div className="mt-4 grid sm:grid-cols-4 grid-cols-2  gap-2 md:gap-4 text-xs  sm:text-sm ">
      <p className=" bg-blue-500 flex justify-center items-center rounded-md font-semibold  min-w-max p-1">
        Completed : {animeListCount?.completed.length || 0}
      </p>
      <p className="bg-yellow-500 p-1 flex justify-center items-center rounded-md font-semibold min-w-max ">
        <span> On Hold : {animeListCount?.onHold.length || 0} </span>
      </p>
      <p className=" bg-green-600 p-1 flex justify-center items-center rounded-md font-semibold min-w-max ">
        {" "}
        <span> To Watch : {animeListCount?.toWatch.length || 0} </span>
      </p>
      <p className=" bg-orange-600 p-1 flex justify-center items-center rounded-md font-semibold   min-w-max">
        {" "}
        <span> Watching: {animeListCount?.watching.length || 0} </span>
      </p>
    </div>
  );
};

export default Counts;
