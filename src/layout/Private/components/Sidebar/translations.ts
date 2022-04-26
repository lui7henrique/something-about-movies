import { IconType } from 'react-icons/lib'
import { Locale } from 'services/api'

import { FaCompass, FaEye, FaFire, FaStar, FaList } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { MdGroups } from 'react-icons/md'
import { BsClockFill } from 'react-icons/bs'

type Translations = (id: string) => {
  [key in Locale]: {
    sidebar: {
      nav: Array<{
        title: string
        links: Array<{
          label: string
          href: string
          icon: IconType
        }>
      }>
      sign_out: {
        label: string
      }
    }
  }
}

export const translations: Translations = (id: string) => {
  return {
    'en-US': {
      sidebar: {
        nav: [
          {
            title: 'Menu',
            links: [
              {
                label: 'Home',
                href: '/app/home',
                icon: HiHome
              },
              {
                label: 'Discover',
                href: '/app/discover',
                icon: FaCompass
              },
              {
                label: 'Community',
                href: '/app/community',
                icon: MdGroups
              },
              {
                label: 'Coming soon',
                href: '/app/coming-soon',
                icon: BsClockFill
              },
              {
                label: 'Watchlist',
                href: `/app/watch-list/${id}`,
                icon: FaList
              }
            ]
          },
          {
            title: 'FILMES',
            links: [
              {
                label: 'Popular',
                href: '/app/movies/popular',
                icon: FaFire
              },
              {
                label: 'Now playing',
                href: '/app/movies/now-playing',
                icon: FaEye
              },
              {
                label: 'Up coming',
                href: '/app/movies/up-coming',
                icon: BsClockFill
              },
              {
                label: 'Top rated',
                href: '/app/movies/top-rated',
                icon: FaStar
              }
            ]
          },
          {
            title: 'SERIES',
            links: [
              {
                label: 'Popular',
                href: '/app/tv/popular',
                icon: FaFire
              },
              {
                label: 'Now playing',
                href: '/app/tv/now-playing',
                icon: FaEye
              },
              {
                label: 'Up coming',
                href: '/app/tv/up-coming',
                icon: BsClockFill
              },
              {
                label: 'Top rated',
                href: '/app/tv/top-rated',
                icon: FaStar
              }
            ]
          }
        ],
        sign_out: {
          label: 'Logout'
        }
      }
    },
    'pt-BR': {
      sidebar: {
        nav: [
          {
            title: 'MENU',
            links: [
              {
                label: 'Início',
                href: '/app/home',
                icon: HiHome
              },
              {
                label: 'Explorar',
                href: '/app/discover',
                icon: FaCompass
              },
              {
                label: 'Comunidade',
                href: '/app/community',
                icon: MdGroups
              },
              {
                label: 'Em breve',
                href: '/app/coming-soon',
                icon: BsClockFill
              },
              {
                label: 'Watchlist',
                href: `/app/watch-list/${id}`,
                icon: FaList
              }
            ]
          },
          {
            title: 'FILMES',
            links: [
              {
                label: 'Populares',
                href: '/app/movies/popular',
                icon: FaFire
              },
              {
                label: 'Em cartaz',
                href: '/app/movies/now-playing',
                icon: FaEye
              },
              {
                label: 'Em breve',
                href: '/app/movies/up-coming',
                icon: BsClockFill
              },
              {
                label: 'Mais bem avaliados',
                href: '/app/movies/top-rated',
                icon: FaStar
              }
            ]
          },
          {
            title: 'SÉRIES',
            links: [
              {
                label: 'Populares',
                href: '/app/tv/popular',
                icon: FaFire
              },
              {
                label: 'Em cartaz',
                href: '/app/tv/now-playing',
                icon: FaEye
              },
              {
                label: 'Em breve',
                href: '/app/tv/up-coming',
                icon: BsClockFill
              },
              {
                label: 'Mais bem avaliadas',
                href: '/app/tv/top-rated',
                icon: FaStar
              }
            ]
          }
        ],
        sign_out: {
          label: 'Sair'
        }
      }
    }
  }
}
