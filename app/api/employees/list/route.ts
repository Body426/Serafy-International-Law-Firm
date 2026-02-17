import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { getDemoStore, isSupabaseConfigured } from '../_demoStore'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)

    // Only managers can see all employees
    if (session.role !== 'Manager') {
      return Response.json({ error: 'Only managers can view all employees' }, { status: 403 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      return Response.json({ employees: store.employees })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data: employees, error } = await supabase
      .from('employees')
      .select('id, name, email, role, position, created_at')
      .order('name', { ascending: true })

    if (error) {
      console.error('Employees fetch error:', error)
      return Response.json({ error: 'Failed to fetch employees' }, { status: 500 })
    }

    return Response.json({ employees: employees || [] })
  } catch (error) {
    console.error('Employees fetch error:', error)
    return Response.json({ error: 'Failed to fetch employees' }, { status: 500 })
  }
}
