import { Movie } from 'types/movies/list'

export type Person = {
  adult: boolean
  gender: 1 | 2
  id: number
  known_for: Movie[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: number
}

export type Details = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday?: any
  gender: number
  homepage?: any
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}

export type MovieCredits = {
  cast: Array<{
    poster_path: string
    id: number
    video: boolean
    vote_average: number
    overview: string
    release_date: string
    title: string
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    vote_count: number
    original_language: string
    original_title: string
    popularity: number
    character: string
    credit_id: string
    order: number
  }>
  crew: Array<{
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    popularity: number
    credit_id: string
    department: string
    job: string
  }>
  id: number
}

export type TvCredits = {
  cast: Array<{
    vote_average: number
    id: number
    overview: string
    original_name: string
    origin_country: string[]
    genre_ids: number[]
    vote_count: number
    original_language: string
    backdrop_path: string
    poster_path: string
    name: string
    first_air_date: string
    popularity: number
    character: string
    credit_id: string
    episode_count: number
  }>
  crew: Array<{
    genre_ids: number[]
    original_language: string
    poster_path: string
    first_air_date: string
    id: number
    vote_average: number
    overview: string
    original_name: string
    origin_country: string[]
    vote_count: number
    backdrop_path: string
    name: string
    popularity: number
    credit_id: string
    department: string
    episode_count: number
    job: string
  }>
  id: number
}

export type Images = {
  id: number
  profiles: Profile[]
}

export type Profile = {
  aspect_ratio: number
  height: number
  iso_639_1?: any
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export type ExternalIds = {
  id: number
  freebase_mid: string
  freebase_id: string
  imdb_id: string
  tvrage_id: number
  facebook_id: string
  instagram_id: string
  twitter_id: string
}
