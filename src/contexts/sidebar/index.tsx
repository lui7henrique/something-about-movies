import { useContext, createContext, useState, useCallback } from 'react'
import { SidebarProviderProps, SidebarType } from './types'

export const SidebarContext = createContext<SidebarType>({} as SidebarType)

export const SidebarContextProvider = (props: SidebarProviderProps) => {
  const [isMinimized, setIsMinimized] = useState(false)

  const handleToggleSidebar = useCallback(() => {
    setIsMinimized((prevState) => !prevState)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isMinimized,
        handleToggleSidebar
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const value = useContext(SidebarContext)

  return value
}
