import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import AddToCategory from "./AddToCategory";
import CategoryModal from "./Modal";
import Link from "next/link";
import { AnimeDataHome } from "@/lib/AnimeResponse";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeDataHome;
  index: number;
}

const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  console.log(anime, anime.attributes.titles.en);
  // console.log(anime.name);
  console.log(anime.id);

  return (
    <MotionDiv
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime?.attributes?.coverImage?.original!}
          alt={anime.attributes.titles.en}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            <Link href={`?showDialog=y&key=${anime.id}`}>
              {anime.attributes.titles.en}
            </Link>
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.type}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime.attributes.episodeCount}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#fff]">
                {anime.attributes.averageRating}
              </p>
            </div>
          </div>
          <AddToCategory key={anime.id} />
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
