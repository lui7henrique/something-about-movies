import { ReactNode } from 'react'
import NextImage from 'next/image'

import { AuthContextProvider } from './auth'
import { SidebarContextProvider } from './sidebar'
import { WatchListContextProvider } from './watchList'
import { PlayerContextProvider } from './player'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props

  return (
    <AuthContextProvider>
      <WatchListContextProvider>
        <PlayerContextProvider>
          <SidebarContextProvider>{children}</SidebarContextProvider>
        </PlayerContextProvider>
      </WatchListContextProvider>
    </AuthContextProvider>
  )
}
