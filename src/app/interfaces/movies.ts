import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

export interface TVShow {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
}

export interface ReleaseDates {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDatesResults {
  results: ReleaseDates[];
}

export interface Movie {
  release_dates: ReleaseDatesResults;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: any;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Cast {
  character: string;
  credit_id: string;
  release_date: string;
  vote_count: number;
  video: boolean;
  adult: boolean;
  vote_average: number;
  title: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
}

export interface Crew {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  vote_count: number;
  video: boolean;
  poster_path: string;
  backdrop_path: string;
  title: string;
  popularity: number;
  genre_ids: number[];
  vote_average: number;
  adult: boolean;
  release_date: string;
  credit_id: string;
}

export interface CastMembers {
  cast: Cast[];
  crew: Crew[];
  id: number;
}

export interface Person {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  url: SafeResourceUrl;
}

export interface Videos {
  id: number;
  results: Video[];
}

export interface CreatedBy {
  id: number;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Network {
  id: number;
  name: string;
}

export interface ProductionCompany {
  name: string;
  id: number;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  poster_path: string;
  season_number: number;
}

export interface Serie {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface Series {
  id: number;
  results: Serie[];
}

export interface PopularMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface PopularMovies {
  page: number;
  results: PopularMovie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  name: string;
  id: number;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface Movies {
  Movie: Movie[];
}

export interface PopularTV {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface PopularTVShows {
  page: number;
  results: PopularTV[];
  total_results: number;
  total_pages: number;
}

export interface UpcomingMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface UpcomingMovies {
  page: number;
  results: UpcomingMovie[];
  dates: Dates;
  total_pages: number;
  total_results: number;
}

export interface SearchMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface SearchMovies {
  page: number;
  results: SearchMovie[];
  total_results: number;
  total_pages: number;
}

export interface SimilarMovie {
  adult: boolean;
  backdrop_path?: any;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path?: any;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  url: string;
}

export interface CreditCast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}
