import { supabase } from 'services/supabase'

export default function handler(req: Request, res: Response) {
  supabase.auth.api.setAuthCookie(req, res)
}
