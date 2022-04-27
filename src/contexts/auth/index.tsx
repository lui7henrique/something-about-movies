import { useToast } from '@chakra-ui/react'
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import {
  ReactNode,
  useCallback,
  useContext,
  useState,
  createContext,
  useEffect
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
  const [authenticatedState, setAuthenticatedState] =
    useState('not-authenticated')

  const chakraToast = useToast()

  const { locale, push } = useRouter()
  const { login: loginToast, logout: logoutToast } = toasts[locale as Locale]

  const login = useCallback(
    async (email: string, password: string) => {
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
          setAuthenticatedState('authenticated')
          await handleAuthChange('SIGNED_IN', session)
          await push('/app/home')

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
    },
    [locale]
  )

  const logout = useCallback(async () => {
    try {
      await supabase.auth.signOut()

      localStorage.removeItem(STORAGE_KEY)
      setAuthenticatedState('not-authenticated')
      await handleAuthChange('SIGNED_OUT', null)

      await push('/')

      chakraToast({
        title: logoutToast.success.title,
        description: logoutToast.success.description,
        status: 'success',
        duration: 5000
      })
    } catch {
      chakraToast({
        title: logoutToast.errors.default.title,
        description: logoutToast.errors.default.description,
        status: 'error',
        duration: 5000
      })
    }
  }, [locale])

  const handleAuthChange = useCallback(
    async (event: AuthChangeEvent, session: Session | null) => {
      await fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session })
      })
    },
    []
  )

  return (
    <AuthContext.Provider
      value={{
        login,
        logout
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
