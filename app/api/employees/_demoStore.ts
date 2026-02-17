type DemoEmployee = {
  id: string
  name: string
  email: string
  role: 'Manager' | 'Employee'
  position?: string
}

export type DemoSession = {
  id: string | number
  name: string
  email: string
  role: string
  timestamp: number
}

export type DemoDocument = {
  id: string
  title: string
  file_name?: string
  file_size: number
  created_at: string
  status: 'pending' | 'approved' | 'rejected'
}

export type DemoFolder = {
  id: string
  name: string
  description: string
  created_by: string
  shared_with: string[]
  created_at: string
  created_by_employee?: Pick<DemoEmployee, 'id' | 'name' | 'email'>
}

export type DemoTask = {
  id: string
  title: string
  description: string
  assigned_to: string
  assigned_by: string
  due_date: string | null
  folder_id: string | null
  status: 'pending' | 'in_progress' | 'completed'
  completed: boolean
  created_at: string
  assigned_to_employee?: Pick<DemoEmployee, 'id' | 'name' | 'email'>
  assigned_by_employee?: Pick<DemoEmployee, 'id' | 'name' | 'email'>
}

type Store = {
  employees: DemoEmployee[]
  documentsByEmployeeId: Record<string, DemoDocument[]>
  folders: DemoFolder[]
  tasks: DemoTask[]
  nextId: number
}

declare global {
  // eslint-disable-next-line no-var
  var __serafyEmployeeDemoStore: Store | undefined
}

function initStore(): Store {
  return {
    employees: [
      {
        id: '1',
        name: 'Dr. May El Serafy',
        email: 'may.elserafy@elserafylawfirm.com',
        role: 'Manager',
        position: 'Managing Partner',
      },
      {
        id: '2',
        name: 'Amina Hassan',
        email: 'amina.hassan@elserafylawfirm.com',
        role: 'Employee',
        position: 'Senior Associate',
      },
      {
        id: '3',
        name: 'Farah Khan',
        email: 'farah.khan@elserafylawfirm.com',
        role: 'Employee',
        position: 'Senior Associate',
      },
      {
        id: '4',
        name: 'Leila Mansour',
        email: 'leila.mansour@elserafylawfirm.com',
        role: 'Employee',
        position: 'Associate',
      },
    ],
    documentsByEmployeeId: {},
    folders: [],
    tasks: [],
    nextId: 1000,
  }
}

export function getDemoStore(): Store {
  if (!globalThis.__serafyEmployeeDemoStore) {
    globalThis.__serafyEmployeeDemoStore = initStore()
  }
  return globalThis.__serafyEmployeeDemoStore
}

export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
}

export function toId(value: string | number | null | undefined) {
  return String(value ?? '')
}

export function nowIso() {
  return new Date().toISOString()
}

export function getDemoEmployeeById(id: string) {
  const store = getDemoStore()
  return store.employees.find((e) => e.id === id) || null
}

export function createDemoId() {
  const store = getDemoStore()
  store.nextId += 1
  return String(store.nextId)
}

