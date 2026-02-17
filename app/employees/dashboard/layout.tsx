import { Suspense } from 'react'
import DashboardLoading from './loading'

export const metadata = {
  title: 'Employee Dashboard - Serafy & Partners',
  description: 'Internal employee portal for document management',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<DashboardLoading />}>
      {children}
    </Suspense>
  )
}
