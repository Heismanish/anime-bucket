type Links = {
  self: string;
};

type Titles = {
  en: string;
  en_jp: string;
  ja_jp: string;
};

type RatingFrequencies = {
  [key: string]: string;
  // You might want to adjust the type of keys and values based on the actual data.
};

type MetaDimensions = {
  tiny: { width: number; height: number };
  large: { width: number; height: number };
  small: { width: number; height: number };
  medium: { width: number; height: number };
};

type PosterImage = {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: {
    dimensions: MetaDimensions;
  };
};

type CoverImage = {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: {
    dimensions: MetaDimensions;
  };
};

type Attributes = {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: RatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease: null;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
};

export type AnimeDataHome = {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
};

type AnimeResponse = {
  data: AnimeDataHome[];
};
