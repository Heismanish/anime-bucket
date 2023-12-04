interface Image {
  original: string;
  preview: string;
  x96: string;
  x48: string;
}

interface Rate {
  name: number;
  value: number;
}

interface RatesStatus {
  name: string;
  value: number;
}

interface Genre {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
}

interface Studio {
  id: number;
  name: string;
  filtered_name: string;
  real: boolean;
  image: string;
}

interface Video {
  id: number;
  url: string;
  image_url: string;
  player_url: string;
  name: string | null;
  kind: string;
  hosting: string;
}

interface Screenshot {
  original: string;
  preview: string;
}

export interface AnimeData {
  id: number;
  name: string;
  russian: string;
  image: Image;
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
  rating: string;
  english: string[];
  japanese: string[];
  synonyms: string[];
  license_name_ru: string;
  duration: number;
  description: string;
  description_html: string;
  description_source: null;
  franchise: string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: Rate[];
  rates_statuses_stats: RatesStatus[];
  updated_at: string;
  next_episode_at: null;
  fansubbers: string[];
  fandubbers: string[];
  licensors: string[];
  genres: Genre[];
  studios: Studio[];
  videos: Video[];
  screenshots: Screenshot[];
  user_rate: null;
}
