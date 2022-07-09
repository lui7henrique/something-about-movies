import { Dispatch, ReactNode, SetStateAction } from 'react'

export type Theme = 'light' | 'dark'

export type ThemeType = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
  handleToggleTheme: () => void
}

export type ThemeProviderProps = {
  children: ReactNode
}
