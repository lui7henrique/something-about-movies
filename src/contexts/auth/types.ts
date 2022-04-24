import { Session, User } from '@supabase/supabase-js'

export type AuthContextType = {
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
