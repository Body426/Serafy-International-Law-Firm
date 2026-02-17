"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Calendar, TrendingUp, Clock, CheckCircle, AlertCircle, DollarSign } from "lucide-react"

export default function DashboardPage() {
  const { t, isRTL } = useLanguage()

  const stats = [
    {
      title: "Active Cases",
      value: "24",
      icon: FileText,
      trend: "+12%",
      color: "text-blue-600",
    },
    {
      title: "Clients Served",
      value: "156",
      icon: Users,
      trend: "+8%",
      color: "text-green-600",
    },
    {
      title: "Consultations",
      value: "89",
      icon: Calendar,
      trend: "+15%",
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "$2.4M",
      icon: DollarSign,
      trend: "+22%",
      color: "text-accent",
    },
  ]

  const recentCases = [
    {
      id: "001",
      client: "ABC Corporation",
      type: "Corporate Law",
      status: "In Progress",
      priority: "High",
      deadline: "2024-01-15",
    },
    {
      id: "002",
      client: "XYZ Real Estate",
      type: "Real Estate",
      status: "Completed",
      priority: "Medium",
      deadline: "2024-01-10",
    },
    {
      id: "003",
      client: "Tech Innovations Ltd",
      type: "Intellectual Property",
      status: "Review",
      priority: "High",
      deadline: "2024-01-20",
    },
  ]

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your law firm's performance.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.trend}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Cases */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Cases
              </CardTitle>
              <CardDescription>Overview of your most recent legal cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCases.map((case_item) => (
                  <div key={case_item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{case_item.client}</span>
                        <Badge variant="outline">{case_item.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Case #{case_item.id}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={case_item.status === "Completed" ? "default" : "secondary"}
                          className={case_item.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                        >
                          {case_item.status}
                        </Badge>
                        <Badge variant={case_item.priority === "High" ? "destructive" : "outline"}>
                          {case_item.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Due: {case_item.deadline}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Cases
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Frequently used actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Create New Case
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Add New Client
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                Time Tracking
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Tasks */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Upcoming Tasks & Deadlines
            </CardTitle>
            <CardDescription>Important tasks and deadlines for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <div className="flex-1">
                  <p className="font-medium">Court hearing preparation</p>
                  <p className="text-sm text-muted-foreground">ABC Corporation case - Due tomorrow</p>
                </div>
                <Badge variant="destructive">Urgent</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div className="flex-1">
                  <p className="font-medium">Client contract review</p>
                  <p className="text-sm text-muted-foreground">XYZ Real Estate - Due in 3 days</p>
                </div>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="font-medium">Patent application filing</p>
                  <p className="text-sm text-muted-foreground">Tech Innovations Ltd - Due next week</p>
                </div>
                <Badge variant="outline">Low</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
