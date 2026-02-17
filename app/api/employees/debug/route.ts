import { createClient } from '@supabase/supabase-js'

// Use server-side privileged key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or SERVICE_ROLE_KEY is missing! Check your .env.local")
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
  try {
    // Fetch all employees
    const { data: employees, error } = await supabase
      .from('employees')
      .select('id, email, name, password_hash')

    if (error) {
      return new Response(
        JSON.stringify({ error: 'Database error', details: error.message, code: error.code }),
        { status: 500 }
      )
    }

    console.log('[v0] Employees in database:', employees)

    return new Response(
      JSON.stringify({
        total: employees?.length || 0,
        employees: employees?.map(e => ({
          id: e.id,
          email: e.email,
          name: e.name,
          hasPasswordHash: !!e.password_hash,
          hashLength: e.password_hash?.length || 0
        })) || []
      }),
      { status: 200 }
    )
  } catch (err) {
    console.error('[v0] Debug endpoint error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
