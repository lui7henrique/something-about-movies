import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { supabase } from 'services/supabase'

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  if (!req.url.includes('/app')) {
    return undefined
  }

  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return undefined
}
