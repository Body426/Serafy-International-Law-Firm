'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Lock, Mail, Loader2, Eye, EyeOff, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function EmployeeLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/employees/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed. Please try again.')
        return
      }

      router.push('/employees/dashboard')
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002060] to-[#001040] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Lock className="h-8 w-8 text-accent" />
            <h1 className="text-3xl font-bold text-white">Employee Portal</h1>
          </div>
          <p className="text-white/70 text-sm">Secure access for firm employees and management</p>
        </div>

        {/* Login Card */}
        <Card className="border-accent/30 bg-white/5 backdrop-blur-md shadow-2xl">
          <CardHeader className="space-y-2">
            <CardTitle className="text-white text-2xl">Login</CardTitle>
            <CardDescription className="text-white/60">
              Enter your credentials to access the internal system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-accent/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@elserafylawfirm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-accent/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/80 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-accent/50" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-accent/50 focus:outline-none transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-white/50 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={loading || !email || !password}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 h-auto rounded-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>

              {/* System access – Email & Password */}
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 space-y-3">
                <p className="text-accent font-semibold text-sm">System access — use these credentials:</p>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-accent/50 pl-3 space-y-1">
                    <p className="font-semibold text-white">Manager (full access)</p>
                    <p className="text-white/90"><span className="text-white/60">Email:</span> may.elserafy@elserafylawfirm.com</p>
                    <p className="text-white/90"><span className="text-white/60">Password:</span> SecurePass2024!</p>
                  </div>
                  <div className="border-l-2 border-accent/50 pl-3 space-y-1">
                    <p className="font-semibold text-white">Employee (example)</p>
                    <p className="text-white/90"><span className="text-white/60">Email:</span> amina.hassan@elserafylawfirm.com</p>
                    <p className="text-white/90"><span className="text-white/60">Password:</span> Password123!</p>
                  </div>
                  <p className="text-white/60 text-xs pt-1">Other employees: same password (Password123!), email = firstname.lastname@elserafylawfirm.com</p>
                </div>
              </div>
            </form>

            {/* Back Link */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm mb-2">Need help?</p>
              <Button
                variant="link"
                asChild
                className="text-accent hover:text-accent/80"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center mt-6">
          <p className="text-white/40 text-xs">
            © 2024 Serafy & Partners. All rights reserved. Secure portal for authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  )
}
