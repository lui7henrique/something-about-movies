import { Genre } from 'types/genres/genres'

export type MinimalMedia = {
  id: string
  image: string
  title: string
  description: string
  genres: Genre[]
}
