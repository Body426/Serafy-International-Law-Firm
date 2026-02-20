// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://htikbogyxxhevxugohff.supabase.co',
  'sb_publishable_cCqdjdGOekF5X_ryzHht8w_Kr7Nl637'
);

export default supabase;