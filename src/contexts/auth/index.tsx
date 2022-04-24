import { useToast } from '@chakra-ui/react'
import { Session, User } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import {
  ReactNode,
  useCallback,
  useContext,
  useState,
  createContext
} from 'react'
import { Locale } from 'services/api'

import { supabase } from 'services/supabase'
import { toasts } from './toasts'

import { AuthContextType } from './types'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type AuthContextProviderProps = {
  children: ReactNode
}

const STORAGE_KEY = '@cineapp/auth-token'

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [session, setSession] = useState<Session>({} as Session)
  const [user, setUser] = useState({} as User)

  const chakraToast = useToast()

  const { locale } = useRouter()
  const { login: loginToast } = toasts[locale as Locale]

  const login = useCallback(async (email: string, password: string) => {
    try {
      const { session, user, error } = await supabase.auth.signIn({
        email,
        password
      })

      if (error) {
        chakraToast({
          title: loginToast.errors[error.message].title,
          description: loginToast.errors[error.message].description,
          status: 'error',
          duration: 5000
        })
      }

      if (session && user && !error) {
        setSession(session)
        setUser(user)

        chakraToast({
          title: loginToast.success.title,
          description: loginToast.success.description,
          status: 'success',
          duration: 5000
        })
      }
    } catch (e) {
      chakraToast({
        title: loginToast.errors.default.title,
        description: loginToast.errors.default.description,
        status: 'error',
        duration: 5000
      })
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
