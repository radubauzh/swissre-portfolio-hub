'use client'

import {
  LayoutDashboard,
  TrendingUp,
  Database,
  Brain,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'portfolio', name: 'Portfolio Analytics', icon: TrendingUp },
  { id: 'data-quality', name: 'Data Quality', icon: Database },
  { id: 'risk-insights', name: 'Risk Insights', icon: Brain },
  { id: 'anomalies', name: 'Anomaly Detection', icon: AlertTriangle },
]

const secondaryNavigation = [
  { id: 'help', name: 'Help & Support', icon: HelpCircle },
]

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="flex flex-col h-full">
        <div className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                  activeView === item.id
                    ? 'bg-swiss-re-50 text-swiss-re-700'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </button>
            )
          })}
        </div>

        <div className="px-2 py-4 space-y-1 border-t border-gray-200">
          {secondaryNavigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'help') {
                    window.location.href = 'mailto:raduba@mit.edu?subject=ReInsight Support Request&body=Hello,%0D%0A%0D%0AI need help with the ReInsight Portfolio Analytics Platform.%0D%0A%0D%0APlease describe your issue below:%0D%0A'
                  }
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}