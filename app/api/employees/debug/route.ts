import supabase from '@/lib/supabaseClient';

export async function GET(req) {
  const { data, error } = await supabase.from('employees').select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ employees: data }), { status: 200 });
}
