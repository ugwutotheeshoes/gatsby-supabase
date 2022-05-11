import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.GATSBY_PUBLIC_SUPABASE_URL,
  process.env.GATSBY_PUBLIC_SUPABASE_KEY
);