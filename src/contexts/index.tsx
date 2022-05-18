import { ReactNode } from 'react'
import NextImage from 'next/image'

import { AuthContextProvider } from './auth'
import { SidebarContextProvider } from './sidebar'
import { WatchListContextProvider } from './watchList'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props

  return (
    <AuthContextProvider>
      <WatchListContextProvider>
        <SidebarContextProvider>{children}</SidebarContextProvider>
      </WatchListContextProvider>
    </AuthContextProvider>
  )
}
