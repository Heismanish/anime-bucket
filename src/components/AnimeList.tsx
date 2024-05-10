"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";

export interface AnimeListType {
  onHold: string[];
  completed: string[];
  watching: string[];
  toWatch: string[];
}

const animeListDefault = {
  onHold: [],
  completed: [],
  watching: [],
  toWatch: [],
};

function AnimeList() {
  const [animeList, setAnimeList] = useState<AnimeListType>(animeListDefault);
  const items = Array.from(
    { length: 12 },
    (_, index) => `One Piece ${index + 1}`
  );
  const fetchAnime = async () => {
    const response = await axios.post("/api/getAnimes");
    const data = await response.data;
    setAnimeList(data.animes);
  };

  useEffect(() => {
    fetchAnime();
    // console.log(data);
  }, []);

  return (
    <div>
      <main className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 min-h-[80%]">
        {/* Completed List  */}
        <List animeList={animeList.completed} category="Completed" />

        {/* OnHold */}
        <List animeList={animeList.onHold} category="onHold" />

        {/* To watch */}
        <List animeList={animeList.toWatch} category="To Watch" />

        {/* Watching */}
        <List animeList={animeList.watching} category="Watching" />
      </main>
    </div>
  );
}

export default AnimeList;
