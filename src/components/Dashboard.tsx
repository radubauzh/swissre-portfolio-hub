'use client'

import { motion } from 'framer-motion'
import MetricCard from './MetricCard'
import PerformanceChart from './PerformanceChart'
import PortfolioOverview from './PortfolioOverview'
import AlertsPanel from './AlertsPanel'
import RegionalHeatmap from './RegionalHeatmap'
import { TrendingUp, TrendingDown, DollarSign, Shield, AlertCircle, Activity, LucideIcon } from 'lucide-react'

const metrics: Array<{
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  trend: 'up' | 'down';
}> = [
  {
    title: 'Total Portfolio Value',
    value: '$2.3B',
    change: 12.5,
    icon: DollarSign,
    trend: 'up',
  },
  {
    title: 'Premium Income',
    value: '$485M',
    change: 8.2,
    icon: TrendingUp,
    trend: 'up',
  },
  {
    title: 'Loss Ratio',
    value: '68.4%',
    change: -2.1,
    icon: Shield,
    trend: 'down',
  },
  {
    title: 'Data Quality Score',
    value: '94.2%',
    change: 3.1,
    icon: Activity,
    trend: 'up',
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Portfolio Dashboard</h2>
        <p className="text-gray-600 mt-1">Continental Europe L&amp;H Portfolio Overview</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <PerformanceChart />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AlertsPanel />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <PortfolioOverview />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <RegionalHeatmap />
        </motion.div>
      </div>
    </div>
  )
}