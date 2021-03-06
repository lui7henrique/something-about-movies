import _ from 'lodash'
import {
  ReactNode,
  useContext,
  createContext,
  useCallback,
  useState
} from 'react'
import { supabase } from 'services/supabase'
import { sleep } from 'utils/sleep'
import { WatchListProviderProps, WatchListType } from './types'

export const WatchListContext = createContext<WatchListType>(
  {} as WatchListType
)

export const WatchListContextProvider = (props: WatchListProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const user = supabase.auth.user()

  const handleAddToWatchList = useCallback(async (id: number) => {
    setIsLoading(true)
    console.log(user)
    await sleep(2000)
    setIsLoading(false)
  }, [])

  return (
    <WatchListContext.Provider
      value={{
        isLoading,
        handleAddToWatchList
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  )
}

export const useWatchList = () => {
  const value = useContext(WatchListContext)

  return value
}
