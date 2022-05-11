import { IconType } from 'react-icons/lib'
import { Locale } from 'types/locale'

import { FaCompass, FaList } from 'react-icons/fa'
import { FiTv } from 'react-icons/fi'
import { HiHome } from 'react-icons/hi'
import { MdGroups } from 'react-icons/md'
import { RiClapperboardFill } from 'react-icons/ri'

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
                label: 'Community',
                href: '/app/community',
                icon: MdGroups
              },
              {
                label: 'Watchlist',
                href: `/app/watch-list/${id}`,
                icon: FaList
              },
              {
                label: 'Movies',
                href: '/app/movies',
                icon: RiClapperboardFill
              },
              {
                label: 'Series',
                href: '/app/tv',
                icon: FiTv
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
                label: 'Comunidade',
                href: '/app/community',
                icon: MdGroups
              },
              {
                label: 'Watchlist',
                href: `/app/watch-list/${id}`,
                icon: FaList
              },
              {
                label: 'Filmes',
                href: '/app/movies',
                icon: RiClapperboardFill
              },
              {
                label: 'Séries',
                href: '/app/tv',
                icon: FiTv
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
