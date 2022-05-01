import { ReactNode } from 'react'
import { AuthContextProvider } from './auth'
import { WatchListContextProvider } from './watchList'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props

  return (
    <AuthContextProvider>
      <WatchListContextProvider>{children}</WatchListContextProvider>
    </AuthContextProvider>
  )
}
