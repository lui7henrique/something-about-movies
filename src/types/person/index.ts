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
