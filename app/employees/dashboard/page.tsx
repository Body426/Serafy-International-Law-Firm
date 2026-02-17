'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  LogOut,
  Upload,
  File,
  Download,
  Trash2,
  Plus,
  Search,
  Clock,
  FileText,
  Users,
  Settings,
  CheckCircle,
  AlertCircle,
  Loader2,
  Folder,
  FolderPlus,
  CheckSquare,
  Square,
  Calendar,
  User,
  X,
  ListTodo,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Document {
  id: string
  title: string
  file_size: number
  created_at: string
  status: 'pending' | 'approved' | 'rejected'
  file_name?: string
}

interface Employee {
  id: string
  name: string
  email: string
  role: string
  position?: string
}

interface Task {
  id: string
  title: string
  description: string
  assigned_to: string
  assigned_by: string
  due_date: string | null
  status: 'pending' | 'in_progress' | 'completed'
  completed: boolean
  folder_id: string | null
  assigned_to_employee?: { id: string; name: string; email: string }
  assigned_by_employee?: { id: string; name: string; email: string }
}

interface Folder {
  id: string
  name: string
  description: string
  created_by: string
  shared_with: string[]
  created_by_employee?: { id: string; name: string; email: string }
}

export default function EmployeeDashboard() {
  const router = useRouter()
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [folders, setFolders] = useState<Folder[]>([])
  const [employees, setEmployees] = useState<Employee[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [uploading, setUploading] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [showFolderModal, setShowFolderModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'documents' | 'tasks' | 'employees' | 'folders'>('documents')

  // Task form state
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    assigned_to: '',
    due_date: '',
    folder_id: '',
  })

  // Folder form state
  const [folderForm, setFolderForm] = useState({
    name: '',
    description: '',
  })

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/employees/auth-check')
        const data = await response.json()

        if (!data.authenticated) {
          router.push('/employees')
          return
        }

        setEmployee(data.employee)
        await Promise.all([
          fetchDocuments(),
          fetchTasks(),
          fetchFolders(),
          data.employee.role === 'Manager' ? fetchEmployees() : Promise.resolve(),
        ])
      } catch (err) {
        router.push('/employees')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/employees/documents')
      const data = await response.json()

      if (response.ok) {
        setDocuments(data.documents || [])
      }
    } catch (err) {
      setError('Failed to fetch documents')
    }
  }

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/employees/tasks')
      const data = await response.json()

      if (response.ok) {
        setTasks(data.tasks || [])
      }
    } catch (err) {
      console.error('Failed to fetch tasks:', err)
    }
  }

  const fetchFolders = async () => {
    try {
      const response = await fetch('/api/employees/folders')
      const data = await response.json()

      if (response.ok) {
        setFolders(data.folders || [])
      }
    } catch (err) {
      console.error('Failed to fetch folders:', err)
    }
  }

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/employees/list')
      const data = await response.json()

      if (response.ok) {
        setEmployees(data.employees || [])
      }
    } catch (err) {
      console.error('Failed to fetch employees:', err)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/employees/logout', { method: 'POST' })
      router.push('/employees')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement

    if (!fileInput?.files?.[0]) {
      setError('Please select a file')
      setUploading(false)
      return
    }

    formData.append('file', fileInput.files[0])
    formData.append('title', fileInput.files[0].name)

    try {
      const response = await fetch('/api/employees/documents', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Failed to upload document')
        return
      }

      const data = await response.json()
      setDocuments([data.document, ...documents])
      setShowUploadModal(false)
      form.reset()
    } catch (err) {
      setError('Failed to upload document')
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteDocument = async (id: string) => {
    if (!confirm('Are you sure you want to delete this document?')) return

    try {
      const response = await fetch(`/api/employees/documents?id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setDocuments(documents.filter(doc => doc.id !== id))
      }
    } catch (err) {
      setError('Failed to delete document')
    }
  }

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      const response = await fetch('/api/employees/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...taskForm,
          due_date: taskForm.due_date || null,
          folder_id: taskForm.folder_id || null,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Failed to create task')
        return
      }

      const data = await response.json()
      setTasks([data.task, ...tasks])
      setShowTaskModal(false)
      setTaskForm({ title: '', description: '', assigned_to: '', due_date: '', folder_id: '' })
    } catch (err) {
      setError('Failed to create task')
    } finally {
      setUploading(false)
    }
  }

  const handleToggleTask = async (taskId: string, completed: boolean) => {
    try {
      const response = await fetch('/api/employees/tasks', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: taskId, completed: !completed }),
      })

      if (response.ok) {
        const data = await response.json()
        setTasks(tasks.map(t => t.id === taskId ? data.task : t))
      }
    } catch (err) {
      console.error('Failed to update task:', err)
    }
  }

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      const response = await fetch('/api/employees/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(folderForm),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Failed to create folder')
        return
      }

      const data = await response.json()
      setFolders([data.folder, ...folders])
      setShowFolderModal(false)
      setFolderForm({ name: '', description: '' })
    } catch (err) {
      setError('Failed to create folder')
    } finally {
      setUploading(false)
    }
  }

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    total: documents.length,
    approved: documents.filter(d => d.status === 'approved').length,
    pending: documents.filter(d => d.status === 'pending').length,
    tasks: tasks.length,
    completedTasks: tasks.filter(t => t.completed).length,
    folders: folders.length,
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    )
  }

  const isManager = employee?.role === 'Manager'

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-accent/20 bg-gradient-to-r from-[#002060] to-[#001040] text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Employee Portal</h1>
              <p className="text-white/60 text-sm">Document Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">{employee?.name}</p>
              <p className="text-xs text-white/60">{employee?.role}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setError('')}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">Total Documents</p>
                  <p className="text-3xl font-bold text-foreground">{stats.total}</p>
                </div>
                <FileText className="h-12 w-12 text-accent/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">My Tasks</p>
                  <p className="text-3xl font-bold text-foreground">{stats.tasks}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stats.completedTasks} completed</p>
                </div>
                <ListTodo className="h-12 w-12 text-accent/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">Folders</p>
                  <p className="text-3xl font-bold text-foreground">{stats.folders}</p>
                </div>
                <Folder className="h-12 w-12 text-accent/30" />
              </div>
            </CardContent>
          </Card>

          {isManager && (
            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">Team Members</p>
                    <p className="text-3xl font-bold text-foreground">{employees.length}</p>
                  </div>
                  <Users className="h-12 w-12 text-accent/30" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-accent/10">
          <Button
            variant={activeTab === 'documents' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('documents')}
            className="rounded-b-none"
          >
            <FileText className="h-4 w-4 mr-2" />
            Documents
          </Button>
          <Button
            variant={activeTab === 'tasks' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('tasks')}
            className="rounded-b-none"
          >
            <ListTodo className="h-4 w-4 mr-2" />
            Tasks
          </Button>
          {isManager && (
            <>
              <Button
                variant={activeTab === 'employees' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('employees')}
                className="rounded-b-none"
              >
                <Users className="h-4 w-4 mr-2" />
                Employees
              </Button>
              <Button
                variant={activeTab === 'folders' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('folders')}
                className="rounded-b-none"
              >
                <Folder className="h-4 w-4 mr-2" />
                Folders
              </Button>
            </>
          )}
        </div>

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <Card className="border-accent/20 mb-8">
            <CardHeader className="border-b border-accent/10">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">My Documents</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">Upload and manage your legal documents</p>
                </div>
                <Button
                  onClick={() => setShowUploadModal(true)}
                  className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-muted/50 border-accent/20 focus:border-accent/50 transition-all duration-300"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-accent/10">
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Document Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Uploaded</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                      <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocuments.length > 0 ? (
                      filteredDocuments.map((doc) => (
                        <tr
                          key={doc.id}
                          className="border-b border-accent/10 hover:bg-muted/30 transition-colors duration-200"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <File className="h-5 w-5 text-accent/50" />
                              <div>
                                <p className="font-medium text-foreground">{doc.title}</p>
                                <p className="text-xs text-muted-foreground">{doc.file_name || 'N/A'}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {doc.file_size ? `${(doc.file_size / 1024).toFixed(2)} KB` : 'N/A'}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {new Date(doc.created_at).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              className={`${
                                doc.status === 'approved'
                                  ? 'bg-green-500/20 text-green-600 border-green-500/30'
                                  : doc.status === 'pending'
                                    ? 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30'
                                    : 'bg-red-500/20 text-red-600 border-red-500/30'
                              } border`}
                            >
                              {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="hover:bg-accent/10 text-accent hover:text-accent transform hover:scale-110 transition-all duration-300"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteDocument(doc.id)}
                                className="hover:bg-red-500/10 text-red-500 hover:text-red-600 transform hover:scale-110 transition-all duration-300"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-muted-foreground">
                          No documents found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <Card className="border-accent/20 mb-8">
            <CardHeader className="border-b border-accent/10">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">My Tasks</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">Track and manage your assigned tasks</p>
                </div>
                {isManager && (
                  <Button
                    onClick={() => setShowTaskModal(true)}
                    className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Assign Task
                  </Button>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-muted/50 border-accent/20 focus:border-accent/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-3">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-4 rounded-lg border border-accent/10 hover:border-accent/30 bg-card transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => handleToggleTask(task.id, task.completed)}
                          className="mt-1 text-accent hover:text-accent/80 transition-colors"
                        >
                          {task.completed ? (
                            <CheckSquare className="h-5 w-5" />
                          ) : (
                            <Square className="h-5 w-5" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className={`font-semibold text-foreground ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                                {task.title}
                              </h3>
                              {task.description && (
                                <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                              )}
                              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                {task.assigned_to_employee && (
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span>Assigned to: {task.assigned_to_employee.name}</span>
                                  </div>
                                )}
                                {task.due_date && (
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>Due: {new Date(task.due_date).toLocaleDateString()}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <Badge
                              className={`${
                                task.completed
                                  ? 'bg-green-500/20 text-green-600 border-green-500/30'
                                  : task.status === 'in_progress'
                                    ? 'bg-blue-500/20 text-blue-600 border-blue-500/30'
                                    : 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30'
                              } border`}
                            >
                              {task.completed ? 'Completed' : task.status.replace('_', ' ')}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No tasks found
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Employees Tab (Manager Only) */}
        {activeTab === 'employees' && isManager && (
          <Card className="border-accent/20 mb-8">
            <CardHeader className="border-b border-accent/10">
              <div>
                <CardTitle className="text-2xl">Team Members</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">View and manage your team</p>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-accent/10">
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Role</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.length > 0 ? (
                      employees.map((emp) => (
                        <tr
                          key={emp.id}
                          className="border-b border-accent/10 hover:bg-muted/30 transition-colors duration-200"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                                <User className="h-4 w-4 text-accent" />
                              </div>
                              <p className="font-medium text-foreground">{emp.name}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{emp.email}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-accent/20 text-accent border-accent/30">
                              {emp.role}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{emp.position || 'N/A'}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-muted-foreground">
                          No employees found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Folders Tab (Manager Only) */}
        {activeTab === 'folders' && isManager && (
          <Card className="border-accent/20 mb-8">
            <CardHeader className="border-b border-accent/10">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Folders</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">Organize documents into folders</p>
                </div>
                <Button
                  onClick={() => setShowFolderModal(true)}
                  className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300"
                >
                  <FolderPlus className="h-4 w-4 mr-2" />
                  Create Folder
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {folders.length > 0 ? (
                  folders.map((folder) => (
                    <Card key={folder.id} className="border-accent/10 hover:border-accent/30 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Folder className="h-5 w-5 text-accent" />
                            <div>
                              <h3 className="font-semibold text-foreground">{folder.name}</h3>
                              {folder.description && (
                                <p className="text-xs text-muted-foreground mt-1">{folder.description}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        {folder.created_by_employee && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Created by: {folder.created_by_employee.name}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-muted-foreground">
                    No folders found. Create your first folder to organize documents.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="max-w-md w-full border-accent/30 shadow-2xl transform scale-100 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upload Document</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setShowUploadModal(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFileUpload} className="space-y-4">
                  <div>
                    <Label htmlFor="file">Select File</Label>
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      disabled={uploading}
                      className="flex-1 bg-accent hover:bg-accent/90 transition-all duration-300"
                    >
                      {uploading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowUploadModal(false)}
                      disabled={uploading}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Task Modal */}
        {showTaskModal && isManager && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="max-w-md w-full border-accent/30 shadow-2xl transform scale-100 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Assign Task</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setShowTaskModal(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateTask} className="space-y-4">
                  <div>
                    <Label htmlFor="task-title">Task Title *</Label>
                    <Input
                      id="task-title"
                      value={taskForm.title}
                      onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="task-description">Description</Label>
                    <textarea
                      id="task-description"
                      value={taskForm.description}
                      onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                      className="mt-2 w-full p-2 border rounded-lg resize-none"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="task-assigned">Assign To *</Label>
                    <select
                      id="task-assigned"
                      value={taskForm.assigned_to}
                      onChange={(e) => setTaskForm({ ...taskForm, assigned_to: e.target.value })}
                      required
                      className="mt-2 w-full p-2 border rounded-lg"
                    >
                      <option value="">Select employee...</option>
                      {employees.map((emp) => (
                        <option key={emp.id} value={emp.id}>
                          {emp.name} ({emp.email})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="task-due">Due Date</Label>
                    <Input
                      id="task-due"
                      type="date"
                      value={taskForm.due_date}
                      onChange={(e) => setTaskForm({ ...taskForm, due_date: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      disabled={uploading}
                      className="flex-1 bg-accent hover:bg-accent/90 transition-all duration-300"
                    >
                      {uploading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-2" />
                          Create Task
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowTaskModal(false)}
                      disabled={uploading}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Folder Modal */}
        {showFolderModal && isManager && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="max-w-md w-full border-accent/30 shadow-2xl transform scale-100 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create Folder</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setShowFolderModal(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateFolder} className="space-y-4">
                  <div>
                    <Label htmlFor="folder-name">Folder Name *</Label>
                    <Input
                      id="folder-name"
                      value={folderForm.name}
                      onChange={(e) => setFolderForm({ ...folderForm, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="folder-description">Description</Label>
                    <textarea
                      id="folder-description"
                      value={folderForm.description}
                      onChange={(e) => setFolderForm({ ...folderForm, description: e.target.value })}
                      className="mt-2 w-full p-2 border rounded-lg resize-none"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      disabled={uploading}
                      className="flex-1 bg-accent hover:bg-accent/90 transition-all duration-300"
                    >
                      {uploading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <FolderPlus className="h-4 w-4 mr-2" />
                          Create Folder
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowFolderModal(false)}
                      disabled={uploading}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
