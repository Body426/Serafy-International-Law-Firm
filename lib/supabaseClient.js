// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// For server-side code, you can safely use the service role key
// For frontend/API routes, use the public anon key
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;
