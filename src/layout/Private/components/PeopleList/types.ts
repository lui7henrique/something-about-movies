import { Locale } from 'types/locale'

export type MinimalPeople = {
  id: string
  name: string
  image: string
}

export type Title = {
  [key in Locale]: string
}
