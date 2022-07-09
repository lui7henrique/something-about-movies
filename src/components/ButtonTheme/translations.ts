import { Theme } from 'contexts/theme/types'
import { Locale } from 'types/locale'

export type ButtonThemeTranslations = {
  [key in Locale]: {
    [theme in Theme]: {
      tooltip: {
        label: string
      }
    }
  }
}

export const buttonThemeTranslations: ButtonThemeTranslations = {
  'en-US': {
    dark: {
      tooltip: {
        label: 'Change theme to light'
      }
    },
    light: {
      tooltip: {
        label: 'Change theme to dark'
      }
    }
  },
  'pt-BR': {
    dark: {
      tooltip: {
        label: 'Alterar para tema claro'
      }
    },
    light: {
      tooltip: {
        label: 'Alterar para tema escuro'
      }
    }
  }
}
