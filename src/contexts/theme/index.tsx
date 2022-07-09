import { useContext, createContext, useState, useCallback } from 'react'

import { Theme, ThemeProviderProps, ThemeType } from './types'

export const ThemeContext = createContext<ThemeType>({} as ThemeType)

export const ThemeContextProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  const handleToggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark'
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const value = useContext(ThemeContext)

  return value
}
