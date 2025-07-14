import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { formatPercentage } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string
  change: number
  icon: LucideIcon
  trend: 'up' | 'down'
}

export default function MetricCard({ title, value, change, icon: Icon, trend }: MetricCardProps) {
  const isPositive = trend === 'up'
  const TrendIcon = isPositive ? TrendingUp : TrendingDown

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-swiss-re-50 rounded-lg">
          <Icon className="h-6 w-6 text-swiss-re-600" />
        </div>
        <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          <TrendIcon className="h-4 w-4" />
          <span>{formatPercentage(Math.abs(change))}</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  )
}