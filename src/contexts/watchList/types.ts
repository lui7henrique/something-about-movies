import { ReactNode } from 'react'

export type WatchListType = {
  isLoading: boolean
  handleAddToWatchList: (id: number) => Promise<void>
}

export type WatchListProviderProps = {
  children: ReactNode
}
