import { Player } from 'components/Player'
import { createContext, useContext, useState } from 'react'
import { PlayerContextType, PlayerProviderProps } from './types'

const PlayerContext = createContext({} as PlayerContextType)

export function PlayerContextProvider({
  children
}: PlayerProviderProps): JSX.Element {
  const [showPlayer, setShowPlayer] = useState(false)
  const [url, setUrl] = useState('')

  function openPlayer(url: string) {
    setUrl(url)
    setShowPlayer(true)
  }

  function hidePlayer() {
    setShowPlayer(false)
  }

  return (
    <PlayerContext.Provider
      value={{
        showPlayer,
        openPlayer,
        hidePlayer
      }}
    >
      {children}

      {showPlayer && url !== '' && <Player url={url} />}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)

  return context
}
