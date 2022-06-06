import { Locale } from 'types/locale'

type Info = {
  value: string
  label: string
}

type Content = {
  movies: Info
  tv: Info
  people: Info
}

export const translations: Record<Locale, Content> = {
  'en-US': {
    movies: {
      value: '771 thousand',
      label: 'movies'
    },
    tv: {
      value: '134 thousand',
      label: 'TV shows'
    },
    people: {
      value: '2.5 million',
      label: 'people'
    }
  },
  'pt-BR': {
    movies: {
      value: '771 mil',
      label: 'filmes'
    },
    tv: {
      value: '134 mil',
      label: 'séries de TV'
    },
    people: {
      value: '2.5 million',
      label: 'de pessoas'
    }
  }
}
