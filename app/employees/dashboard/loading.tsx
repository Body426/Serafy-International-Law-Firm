import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-br from-[#002060] to-[#001040] text-white py-8 px-6 lg:px-8 animate-pulse">
        <div className="max-w-7xl mx-auto">
          <div className="h-8 bg-white/20 rounded w-48 mb-4"></div>
          <div className="h-4 bg-white/10 rounded w-64"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-24 mb-4"></div>
              <div className="h-8 bg-muted rounded w-16"></div>
            </Card>
          ))}
        </div>

        {/* Documents Table Skeleton */}
        <Card className="p-6 animate-pulse">
          <div className="h-6 bg-muted rounded w-32 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </Card>

        {/* Loading Indicator */}
        <div className="fixed bottom-8 right-8 bg-white rounded-full p-4 shadow-xl">
          <Loader2 className="h-6 w-6 animate-spin text-accent" />
        </div>
      </div>
    </div>
  )
}
