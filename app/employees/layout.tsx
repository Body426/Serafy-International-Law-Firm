import { Suspense } from 'react'

export const metadata = {
  title: 'Employees - Serafy & Partners',
  description: 'Employee portal and document management system',
}

export default function EmployeesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  )
}
