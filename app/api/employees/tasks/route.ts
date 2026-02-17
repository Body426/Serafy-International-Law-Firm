import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import {
  createDemoId,
  getDemoEmployeeById,
  getDemoStore,
  isSupabaseConfigured,
  nowIso,
  toId,
} from '../_demoStore'

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)
    const { searchParams } = new URL(request.url)
    const employeeId = searchParams.get('employee_id')
    const sessionId = toId(session.id)

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const canSeeAll = session.role === 'Manager'
      const effectiveId = employeeId ? toId(employeeId) : ''
      const filtered = store.tasks.filter((t) => {
        if (canSeeAll) return effectiveId ? t.assigned_to === effectiveId : true
        return t.assigned_to === sessionId
      })
      return Response.json({ tasks: filtered })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    // If manager, can see all tasks. If employee, only their tasks
    let query = supabase
      .from('tasks')
      .select(
        '*, assigned_to_employee:employees!tasks_assigned_to_fkey(id, name, email), assigned_by_employee:employees!tasks_assigned_by_fkey(id, name, email)'
      )

    if (session.role === 'Manager') {
      if (employeeId) {
        query = query.eq('assigned_to', employeeId)
      }
    } else {
      query = query.eq('assigned_to', session.id)
    }

    const { data: tasks, error } = await query.order('created_at', { ascending: false })

    if (error) {
      console.error('Tasks fetch error:', error)
      return Response.json({ error: 'Failed to fetch tasks' }, { status: 500 })
    }

    return Response.json({ tasks: tasks || [] })
  } catch (error) {
    console.error('Tasks fetch error:', error)
    return Response.json({ error: 'Failed to fetch tasks' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)
    const sessionId = toId(session.id)

    // Only managers can create tasks
    if (session.role !== 'Manager') {
      return Response.json({ error: 'Only managers can assign tasks' }, { status: 403 })
    }

    const body = await request.json()
    const { title, description, assigned_to, due_date, folder_id } = body

    if (!title || !assigned_to) {
      return Response.json({ error: 'Title and assigned_to are required' }, { status: 400 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const assignedToId = toId(assigned_to)
      const assignedToEmp = getDemoEmployeeById(assignedToId)
      const assignedByEmp = getDemoEmployeeById(sessionId)

      const task = {
        id: createDemoId(),
        title,
        description: description || '',
        assigned_to: assignedToId,
        assigned_by: sessionId,
        due_date: due_date || null,
        folder_id: folder_id || null,
        status: 'pending' as const,
        completed: false,
        created_at: nowIso(),
        assigned_to_employee: assignedToEmp ? { id: assignedToEmp.id, name: assignedToEmp.name, email: assignedToEmp.email } : undefined,
        assigned_by_employee: assignedByEmp ? { id: assignedByEmp.id, name: assignedByEmp.name, email: assignedByEmp.email } : undefined,
      }

      store.tasks = [task, ...store.tasks]
      return Response.json({ task }, { status: 201 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data: task, error } = await supabase
      .from('tasks')
      .insert([{
        title,
        description: description || '',
        assigned_to,
        assigned_by: session.id,
        due_date: due_date || null,
        folder_id: folder_id || null,
        status: 'pending',
        completed: false
      }])
      .select(
        '*, assigned_to_employee:employees!tasks_assigned_to_fkey(id, name, email), assigned_by_employee:employees!tasks_assigned_by_fkey(id, name, email)'
      )
      .single()

    if (error) {
      console.error('Task creation error:', error)
      return Response.json({ error: 'Failed to create task' }, { status: 500 })
    }

    return Response.json({ task }, { status: 201 })
  } catch (error) {
    console.error('Task creation error:', error)
    return Response.json({ error: 'Failed to create task' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)
    const sessionId = toId(session.id)
    const body = await request.json()
    const { id, completed, status } = body

    if (!id) {
      return Response.json({ error: 'Task ID is required' }, { status: 400 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const idx = store.tasks.findIndex((t) => t.id === String(id))
      if (idx === -1) return Response.json({ error: 'Task not found' }, { status: 404 })

      const existingTask = store.tasks[idx]
      if (session.role !== 'Manager' && existingTask.assigned_to !== sessionId) {
        return Response.json({ error: 'Unauthorized' }, { status: 403 })
      }

      const next = { ...existingTask }
      if (completed !== undefined) next.completed = Boolean(completed)
      if (status) next.status = status
      store.tasks[idx] = next
      return Response.json({ task: next })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    // Check if task belongs to employee (unless manager)
    const { data: existingTask } = await supabase
      .from('tasks')
      .select('assigned_to')
      .eq('id', id)
      .single()

    if (!existingTask) {
      return Response.json({ error: 'Task not found' }, { status: 404 })
    }

    if (session.role !== 'Manager' && existingTask.assigned_to !== session.id) {
      return Response.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const updateData: any = {}
    if (completed !== undefined) updateData.completed = completed
    if (status) updateData.status = status

    const { data: task, error } = await supabase
      .from('tasks')
      .update(updateData)
      .eq('id', id)
      .select(
        '*, assigned_to_employee:employees!tasks_assigned_to_fkey(id, name, email), assigned_by_employee:employees!tasks_assigned_by_fkey(id, name, email)'
      )
      .single()

    if (error) {
      console.error('Task update error:', error)
      return Response.json({ error: 'Failed to update task' }, { status: 500 })
    }

    return Response.json({ task })
  } catch (error) {
    console.error('Task update error:', error)
    return Response.json({ error: 'Failed to update task' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)

    // Only managers can delete tasks
    if (session.role !== 'Manager') {
      return Response.json({ error: 'Only managers can delete tasks' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const taskId = searchParams.get('id')

    if (!taskId) {
      return Response.json({ error: 'Task ID is required' }, { status: 400 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      store.tasks = store.tasks.filter((t) => t.id !== taskId)
      return Response.json({ success: true })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', taskId)

    if (error) {
      console.error('Task delete error:', error)
      return Response.json({ error: 'Failed to delete task' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Task delete error:', error)
    return Response.json({ error: 'Failed to delete task' }, { status: 500 })
  }
}
