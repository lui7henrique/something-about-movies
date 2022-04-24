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
        href: '/app/movies'
      },
      {
        label: 'Series',
        href: '/app/series'
      },
      {
        label: 'Actors',
        href: '/app/actors'
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
        href: '/app/movies'
      },
      {
        label: 'Séries',
        href: '/app/series'
      },
      {
        label: 'Atores',
        href: '/app/actors'
      }
    ]
  }
}
