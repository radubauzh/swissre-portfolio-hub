'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const portfolioData = [
  { treaty: 'DE-LIFE-001', premium: 120, claims: 78, ratio: 65, retention: 95 },
  { treaty: 'CH-HEALTH-002', premium: 85, claims: 52, ratio: 61, retention: 92 },
  { treaty: 'FR-LIFE-003', premium: 95, claims: 68, ratio: 72, retention: 88 },
  { treaty: 'IT-DISABILITY-004', premium: 65, claims: 45, ratio: 69, retention: 85 },
  { treaty: 'AT-CRITICAL-005', premium: 45, claims: 28, ratio: 62, retention: 90 },
]

const riskMetrics = [
  { metric: 'Mortality', A: 85, B: 78, fullMark: 100 },
  { metric: 'Morbidity', A: 92, B: 85, fullMark: 100 },
  { metric: 'Persistency', A: 88, B: 82, fullMark: 100 },
  { metric: 'Expense', A: 78, B: 72, fullMark: 100 },
  { metric: 'Catastrophe', A: 82, B: 88, fullMark: 100 },
]

const trendData = [
  { quarter: 'Q1 2024', actual: 68, projected: 66, target: 65 },
  { quarter: 'Q2 2024', actual: 69, projected: 67, target: 65 },
  { quarter: 'Q3 2024', actual: 67, projected: 66, target: 65 },
  { quarter: 'Q4 2024', actual: 68, projected: 68, target: 65 },
  { quarter: 'Q1 2025', actual: null, projected: 67, target: 65 },
  { quarter: 'Q2 2025', actual: null, projected: 66, target: 65 },
]

export default function PortfolioAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Portfolio Analytics</h2>
          <p className="text-gray-600 mt-1">Deep dive into portfolio performance metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Treaty Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="treaty" angle={-45} textAnchor="end" height={80} fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="premium" fill="#4a6d6a" name="Premium (M$)" />
              <Bar dataKey="claims" fill="#00a1b0" name="Claims (M$)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Profile Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={riskMetrics}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="metric" fontSize={12} tick={{ fill: '#374151' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} fontSize={12} tick={{ fill: '#6b7280' }} />
              <Radar name="Current" dataKey="A" stroke="#4a6d6a" fill="#4a6d6a" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="Target" dataKey="B" stroke="#00a1b0" fill="#00a1b0" fillOpacity={0.2} strokeWidth={2} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="chart-container"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Loss Ratio Trends & Projections</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="quarter" fontSize={12} />
            <YAxis domain={[60, 75]} fontSize={12} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#4a6d6a" strokeWidth={2} name="Actual" />
            <Line type="monotone" dataKey="projected" stroke="#00a1b0" strokeWidth={2} strokeDasharray="5 5" name="Projected" />
            <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeWidth={2} name="Target" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="bg-swiss-re-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-swiss-re-700">Performance Drivers</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Strong retention rates in Germany & Switzerland</li>
              <li>• Improved claims management in Q4</li>
              <li>• Premium growth exceeding targets by 8%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-swiss-re-700">Areas of Concern</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• France loss ratio above threshold</li>
              <li>• Increasing morbidity trends in Italy</li>
              <li>• Expense ratios need optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-swiss-re-700">Recommendations</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Review pricing for French treaties</li>
              <li>• Enhance predictive models for Italy</li>
              <li>• Implement automated claims processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}