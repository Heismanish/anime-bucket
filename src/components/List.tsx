import React from "react";
import { AnimeListType } from "./AnimeList";

interface ListProps {
  animeList: string[];
  category: "onHold" | "Completed" | "Watching" | "To Watch";
}

const List: React.FC<ListProps> = ({ animeList, category }) => {
  // if(animeList.)

  return (
    <div className="rounded-md overflow-hidden bg-gray-900 h-full border border-gray-600">
      <h1 className="text-center  font-semibold bg-gray-950 p-2">{category}</h1>
      <ul className="list flex flex-col gap-2 list-none max-h-[440px]  overflow-y-auto px-2">
        {animeList?.map(
          (item, index) =>
            item.length > 1 && (
              <li
                key={index}
                className="py-1 text-sm border-b border-black flex items-center justify-center font-medium text-center"
              >
                {item}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default List;
