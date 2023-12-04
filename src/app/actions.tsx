"use server";
import axios from "axios";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { AnimeDataHome } from "@/lib/AnimeResponse";

export const fetchAnime = async (page: number, name?: string) => {
  let baseAPI;

  if (name) {
    baseAPI = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(
      name
    )}&page[limit]=8&page[offset]=${page * 8}`;
  } else {
    baseAPI = `https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=${
      page * 8
    }`;
  }

  try {
    const response = await axios.get(baseAPI);
    const data = await response.data;

    console.log(...data.data);

    return data.data.map((item: AnimeDataHome, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ));
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return [];
  }
};
