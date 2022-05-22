import { ReactNode } from 'react'

export type PlayerContextType = {
  showPlayer: boolean
  openPlayer: (url: string) => void
  hidePlayer: () => void
}

export type PlayerProviderProps = {
  children: ReactNode
}
