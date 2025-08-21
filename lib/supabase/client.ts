import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

let _supabase: ReturnType<typeof createClient> | undefined

export const supabase = (() => {
  if (_supabase === undefined) {
    _supabase = createClient()
  }
  return _supabase
})()
