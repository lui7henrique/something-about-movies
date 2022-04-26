import { Locale } from 'services/api'

type Translations = {
  [key in Locale]: {
    links: Array<{
      label: string
      href: string
    }>
  }
}

export const translations: Translations = {
  'en-US': {
    links: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Movies',
        href: '/app/movies/popular'
      },
      {
        label: 'Series',
        href: '/app/tv/popular'
      }
    ]
  },
  'pt-BR': {
    links: [
      {
        label: 'Página Inicial',
        href: '/'
      },
      {
        label: 'Filmes',
        href: '/app/movies/popular'
      },
      {
        label: 'Séries',
        href: '/app/tv/popular'
      }
    ]
  }
}
