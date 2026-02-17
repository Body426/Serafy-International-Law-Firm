import { cookies } from 'next/headers'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ authenticated: false }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)
    
    // Check if session is still valid (7 days)
    const sessionAge = Date.now() - session.timestamp
    const maxAge = 60 * 60 * 24 * 7 * 1000

    if (sessionAge > maxAge) {
      cookieStore.delete('employee_session')
      return Response.json({ authenticated: false }, { status: 401 })
    }

    return Response.json({
      authenticated: true,
      employee: {
        id: session.id,
        name: session.name,
        email: session.email,
        role: session.role
      }
    })
  } catch (error) {
    console.error('Auth check error:', error)
    return Response.json({ authenticated: false }, { status: 401 })
  }
}
