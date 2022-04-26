import { FaClock, FaCompass } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import { MdGroups } from 'react-icons/md'
import { BsClockFill } from 'react-icons/bs'
import { Locale } from 'services/api'

type Translations = {
  [key in Locale]: {
    sidebar: {
      nav: Array<{
        label: string
        href: string
        icon: IconType
      }>
      sign_out: {
        label: string
      }
    }
  }
}

export const translations: Translations = {
  'en-US': {
    sidebar: {
      nav: [
        {
          label: 'Home',
          href: '/app',
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
          label: 'Início',
          href: '/app',
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
        }
      ],
      sign_out: {
        label: 'Sair'
      }
    }
  }
}
