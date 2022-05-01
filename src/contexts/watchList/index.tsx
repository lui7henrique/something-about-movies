import { ReactNode, useContext, createContext } from 'react'
import { WatchListType } from './types'

export const WatchListContext = createContext<WatchListType>(
  {} as WatchListType
)

type WatchListProviderProps = {
  children: ReactNode
}

export const WatchListContextProvider = (props: WatchListProviderProps) => {
  return (
    <WatchListContext.Provider value={{}}>
      {props.children}
    </WatchListContext.Provider>
  )
}

export const useWatchLIST = () => {
  const value = useContext(WatchListContext)

  return value
}
