import { Genre } from 'types/genres/genres'

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Details = Omit<Movie, 'genre_ids'> & {
  belongs_to_collection: Collection
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: ProductionCompanies[]
  production_countries: ProductionCountries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
}

type Collection = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

type ProductionCompanies = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

type ProductionCountries = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}
