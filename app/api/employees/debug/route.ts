import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export async function GET() {
  try {
    // Get all employees to see what's in the database
    const { data: employees, error } = await supabase
      .from('employees')
      .select('id, email, name, password_hash')

    if (error) {
      return Response.json({ 
        error: 'Database error', 
        details: error.message,
        code: error.code 
      }, { status: 500 })
    }

    console.log('[v0] Employees in database:', employees)

    return Response.json({
      total: employees?.length || 0,
      employees: employees?.map(e => ({
        id: e.id,
        email: e.email,
        name: e.name,
        hasPasswordHash: !!e.password_hash,
        hashLength: e.password_hash?.length || 0
      })) || []
    })
  } catch (err) {
    console.error('[v0] Debug endpoint error:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
