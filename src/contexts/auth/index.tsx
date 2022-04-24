import { Session, User } from '@supabase/supabase-js'
import { ReactNode, useCallback, useContext, useState } from 'react'
import { createContext } from 'react'
import { supabase } from 'services/supabase'
import { AuthContextType } from './types'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [session, setSession] = useState<Session>({} as Session)
  const [user, setUser] = useState({} as User)

  const login = useCallback(async (email: string, password: string) => {
    try {
      const { session, user } = await supabase.auth.signIn({
        email,
        password
      })

      if (session && user) {
        setSession(session)
        setUser(user)
      }
    } catch (e) {
      throw new Error('Authentication failed')
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        session,
        user,

        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(AuthContext)

  return value
}
