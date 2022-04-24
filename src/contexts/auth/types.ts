import { Session, User } from '@supabase/supabase-js'

export type AuthContextType = {
  session: Session
  user: User
  login: (email: string, password: string) => Promise<void>
}
