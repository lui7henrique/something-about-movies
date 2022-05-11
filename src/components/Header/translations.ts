import { Locale } from 'types/locale'

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
        href: '/app/tv'
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
        href: '/app/tv'
      }
    ]
  }
}
