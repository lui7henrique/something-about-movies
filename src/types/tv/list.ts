import { Genre } from 'types/genres/genres'

export type TV = {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export type Details = TV & {
  created_by: Creator[]
  episode_run_time: number[]
  first_air_date: string
  genres: Genre[]
  homepage: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: Episode
  name: string
  next_episode_to_air: Episode
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

type Creator = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

type Episode = {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}

type Network = {
  name: string
  id: number
  logo_path: string
  origin_country: string
}

type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}
