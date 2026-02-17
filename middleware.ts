import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect employee dashboard: require a valid employee session cookie
  if (request.nextUrl.pathname.startsWith('/employees/dashboard')) {
    const sessionCookie = request.cookies.get('employee_session')?.value

    if (!sessionCookie) {
      // No session -> redirect to login page
      return NextResponse.redirect(new URL('/employees', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/employees/dashboard/:path*'],
}
