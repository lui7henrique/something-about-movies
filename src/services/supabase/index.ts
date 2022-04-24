import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const token = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ''

export const supabase = createClient(url, token)
