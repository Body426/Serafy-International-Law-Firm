import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return Response.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Simple local demo mode so you can always log in and see the UI,
    // even if Supabase / database is not configured on your machine.
    const demoAccounts = [
      {
        id: 1,
        name: 'Dr. May El Serafy',
        email: 'may.elserafy@elserafylawfirm.com',
        role: 'Manager',
        password: 'SecurePass2024!'
      },
      {
        id: 2,
        name: 'Amina Hassan',
        email: 'amina.hassan@elserafylawfirm.com',
        role: 'Employee',
        password: 'Password123!'
      }
    ]

    const demoMatch = demoAccounts.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )

    if (demoMatch) {
      const cookieStore = await cookies()
      cookieStore.set(
        'employee_session',
        JSON.stringify({
          id: demoMatch.id,
          name: demoMatch.name,
          email: demoMatch.email,
          role: demoMatch.role,
          timestamp: Date.now()
        }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7 // 7 days
        }
      )

      return Response.json({
        success: true,
        employee: {
          id: demoMatch.id,
          name: demoMatch.name,
          email: demoMatch.email,
          role: demoMatch.role
        }
      })
    }

    // Normal Supabase-based authentication (for real data)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: employees, error } = await supabase
      .from('employees')
      .select('*')
      .eq('email', email.toLowerCase())

    console.log('[v0] Login attempt:', { email: email.toLowerCase(), found: employees?.length || 0 })

    if (error) {
      console.error('[v0] Employee query error:', error.message)
      return Response.json({ error: 'Database error', details: error.message }, { status: 500 })
    }

    if (!employees || employees.length === 0) {
      console.error('[v0] No employee found with email:', email.toLowerCase())
      return Response.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const employee = employees[0]
    console.log('[v0] Employee found:', { id: employee.id, name: employee.name, email: employee.email })

    // Verify password hash exists
    if (!employee.password_hash) {
      console.error('[v0] No password hash for employee:', employee.id)
      return Response.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    // Direct password comparison for now
    const passwordMatch =
      password === employee.password_hash ||
      (await bcrypt.compare(password, employee.password_hash).catch(() => false))
    console.log(
      '[v0] Password match result:',
      passwordMatch,
      'provided:',
      password,
      'stored:',
      employee.password_hash?.substring(0, 10) + '...'
    )

    if (!passwordMatch) {
      console.error('[v0] Password mismatch for email:', email)
      return Response.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set(
      'employee_session',
      JSON.stringify({
        id: employee.id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
        timestamp: Date.now()
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      }
    )

    return Response.json({
      success: true,
      employee: {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        role: employee.role
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return Response.json({ error: 'Authentication failed' }, { status: 500 })
  }
}
