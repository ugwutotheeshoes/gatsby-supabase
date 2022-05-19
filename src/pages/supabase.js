import { createClient, SupabaseClient } from "@supabase/supabase-js";

// // export const supabase = createClient(
// //   process.env.GATSBY_PUBLIC_SUPABASE_URL,
// //   process.env.GATSBY_PUBLIC_SUPABASE_KEY
// // );

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

// import React from "react";

const url =process.env.SUPABASE_URL

console.log(url)

const supabase = () => {
  createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
};

export default supabase;