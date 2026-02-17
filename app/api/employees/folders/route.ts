import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { createDemoId, getDemoEmployeeById, getDemoStore, isSupabaseConfigured, nowIso, toId } from '../_demoStore'

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)
    const sessionId = toId(session.id)

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const folders =
        session.role === 'Manager'
          ? store.folders
          : store.folders.filter((f) => f.created_by === sessionId || (f.shared_with || []).includes(sessionId))
      return Response.json({ folders })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    // Managers can see all folders, employees see folders they have access to
    let query = supabase
      .from('folders')
      .select('*, created_by_employee:employees!folders_created_by_fkey(id, name, email)')

    if (session.role !== 'Manager') {
      // Employees can see folders they created or folders shared with them
      query = query.or(`created_by.eq.${session.id},shared_with.cs.{${session.id}}`)
    }

    const { data: folders, error } = await query.order('created_at', { ascending: false })

    if (error) {
      console.error('Folders fetch error:', error)
      return Response.json({ error: 'Failed to fetch folders' }, { status: 500 })
    }

    return Response.json({ folders: folders || [] })
  } catch (error) {
    console.error('Folders fetch error:', error)
    return Response.json({ error: 'Failed to fetch folders' }, { status: 500 })
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

    // Only managers can create folders
    if (session.role !== 'Manager') {
      return Response.json({ error: 'Only managers can create folders' }, { status: 403 })
    }

    const body = await request.json()
    const { name, description, shared_with } = body

    if (!name) {
      return Response.json({ error: 'Folder name is required' }, { status: 400 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const creator = getDemoEmployeeById(sessionId)
      const folder = {
        id: createDemoId(),
        name,
        description: description || '',
        created_by: sessionId,
        shared_with: shared_with || [],
        created_at: nowIso(),
        created_by_employee: creator ? { id: creator.id, name: creator.name, email: creator.email } : undefined,
      }
      store.folders = [folder, ...store.folders]
      return Response.json({ folder }, { status: 201 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data: folder, error } = await supabase
      .from('folders')
      .insert([{
        name,
        description: description || '',
        created_by: session.id,
        shared_with: shared_with || []
      }])
      .select('*, created_by_employee:employees!folders_created_by_fkey(id, name, email)')
      .single()

    if (error) {
      console.error('Folder creation error:', error)
      return Response.json({ error: 'Failed to create folder' }, { status: 500 })
    }

    return Response.json({ folder }, { status: 201 })
  } catch (error) {
    console.error('Folder creation error:', error)
    return Response.json({ error: 'Failed to create folder' }, { status: 500 })
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

    // Only managers can delete folders
    if (session.role !== 'Manager') {
      return Response.json({ error: 'Only managers can delete folders' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const folderId = searchParams.get('id')

    if (!folderId) {
      return Response.json({ error: 'Folder ID is required' }, { status: 400 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      store.folders = store.folders.filter((f) => f.id !== folderId)
      return Response.json({ success: true })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { error } = await supabase
      .from('folders')
      .delete()
      .eq('id', folderId)

    if (error) {
      console.error('Folder delete error:', error)
      return Response.json({ error: 'Failed to delete folder' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Folder delete error:', error)
    return Response.json({ error: 'Failed to delete folder' }, { status: 500 })
  }
}
