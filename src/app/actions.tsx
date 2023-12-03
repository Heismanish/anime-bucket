"use server";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const baseAPI = `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`;
  // const baseAPI = `https://kitsu.io/api/edge/anime?page[limit]=${page}&page[offset]=0`;
  const repsone = await fetch(baseAPI);
  const data = await repsone.json();

  console.log(data.data);
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
