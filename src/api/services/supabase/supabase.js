import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ohxwvvhihamghnvpxswy.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPAKEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase