import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { createDemoId, getDemoStore, isSupabaseConfigured, nowIso, toId } from '../_demoStore'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('employee_session')

    if (!sessionCookie) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)
    const employeeId = toId(session.id)

    // Demo/local mode (no Supabase configured)
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      return Response.json({ documents: store.documentsByEmployeeId[employeeId] || [] })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: documents, error } = await supabase
      .from('documents')
      .select('*')
      .eq('employee_id', session.id)
      .order('created_at', { ascending: false })

    if (error) {
      return Response.json({ error: 'Failed to fetch documents', details: error.message }, { status: 500 })
    }

    return Response.json({ documents })
  } catch (error) {
    console.error('Documents fetch error:', error)
    return Response.json({ error: 'Failed to fetch documents' }, { status: 500 })
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
    const employeeId = toId(session.id)
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string

    if (!file || !title) {
      return Response.json({ error: 'File and title are required' }, { status: 400 })
    }

    // Demo/local mode: store metadata in memory so UI works without Supabase
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const demoDoc = {
        id: createDemoId(),
        title,
        file_name: file.name,
        file_size: file.size || 0,
        created_at: nowIso(),
        status: 'pending' as const,
      }
      store.documentsByEmployeeId[employeeId] = [demoDoc, ...(store.documentsByEmployeeId[employeeId] || [])]
      return Response.json({ document: demoDoc }, { status: 201 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Upload file to storage
    const fileName = `${Date.now()}-${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('documents')
      .upload(`${session.id}/${fileName}`, file)

    if (uploadError) {
      return Response.json(
        { error: 'Failed to upload file', details: uploadError.message },
        { status: 500 }
      )
    }

    // Create document record
    const { data: documentData, error: dbError } = await supabase
      .from('documents')
      .insert([{
        employee_id: session.id,
        title,
        file_name: fileName,
        file_path: uploadData.path,
        file_size: file.size,
        status: 'pending'
      }])
      .select()
      .single()

    if (dbError) {
      return Response.json({ error: 'Failed to save document', details: dbError.message }, { status: 500 })
    }

    return Response.json({ document: documentData }, { status: 201 })
  } catch (error) {
    console.error('Document upload error:', error)
    return Response.json(
      { error: 'Failed to upload document', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
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
    const employeeId = toId(session.id)
    const { searchParams } = new URL(request.url)
    const documentId = searchParams.get('id')

    if (!documentId) {
      return Response.json({ error: 'Document ID is required' }, { status: 400 })
    }

    // Demo/local mode
    if (!isSupabaseConfigured()) {
      const store = getDemoStore()
      const list = store.documentsByEmployeeId[employeeId] || []
      const next = list.filter((d) => d.id !== documentId)
      store.documentsByEmployeeId[employeeId] = next
      return Response.json({ success: true })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Check if document belongs to employee
    const { data: document } = await supabase
      .from('documents')
      .select('*')
      .eq('id', documentId)
      .eq('employee_id', session.id)
      .single()

    if (!document) {
      return Response.json({ error: 'Document not found' }, { status: 404 })
    }

    // Delete file from storage
    await supabase.storage
      .from('documents')
      .remove([document.file_path])

    // Delete document record
    const { error: deleteError } = await supabase
      .from('documents')
      .delete()
      .eq('id', documentId)

    if (deleteError) {
      return Response.json({ error: 'Failed to delete document' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Document delete error:', error)
    return Response.json({ error: 'Failed to delete document' }, { status: 500 })
  }
}
