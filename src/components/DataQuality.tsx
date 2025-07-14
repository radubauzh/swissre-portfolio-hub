'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Clock, Database, FileSearch, GitBranch, Shield } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const dataQualityMetrics = [
  { category: 'Completeness', score: 94, status: 'good' },
  { category: 'Accuracy', score: 92, status: 'good' },
  { category: 'Timeliness', score: 88, status: 'warning' },
  { category: 'Consistency', score: 96, status: 'good' },
  { category: 'Validity', score: 90, status: 'good' },
]

const dataGaps = [
  {
    id: 1,
    source: 'Germany Life Portfolio',
    field: 'Claims Data Q4',
    severity: 'critical',
    impact: 'High',
    records: 1250,
    lastUpdate: '2 days ago',
  },
  {
    id: 2,
    source: 'Switzerland Health',
    field: 'Premium Adjustments',
    severity: 'warning',
    impact: 'Medium',
    records: 450,
    lastUpdate: '5 hours ago',
  },
  {
    id: 3,
    source: 'France Disability',
    field: 'Policy Renewals',
    severity: 'info',
    impact: 'Low',
    records: 125,
    lastUpdate: '1 day ago',
  },
]

const ingestionStatus = [
  { name: 'Client Data Feed A', status: 'active', lastSync: '5 min ago', records: '125,432' },
  { name: 'Client Data Feed B', status: 'active', lastSync: '12 min ago', records: '89,231' },
  { name: 'Client Data Feed C', status: 'error', lastSync: '2 hours ago', records: '0' },
  { name: 'Client Data Feed D', status: 'active', lastSync: '30 min ago', records: '67,890' },
]

export default function DataQuality() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-amber-500" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-50'
      case 'warning':
        return 'text-amber-600 bg-amber-50'
      default:
        return 'text-blue-600 bg-blue-50'
    }
  }

  const getBarColor = (score: number) => {
    if (score >= 90) return '#4a6d6a'
    if (score >= 80) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Data Quality Monitoring</h2>
        <p className="text-gray-600 mt-1">Monitor data integrity and identify gaps across portfolios</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Scores by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataQualityMetrics} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" domain={[0, 100]} fontSize={12} stroke="#6b7280" />
              <YAxis type="category" dataKey="category" fontSize={12} stroke="#6b7280" width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {dataQualityMetrics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.score)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Ingestion Status</h3>
          <div className="space-y-3">
            {ingestionStatus.map((feed) => (
              <div key={feed.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(feed.status)}
                  <div>
                    <p className="font-medium text-gray-900">{feed.name}</p>
                    <p className="text-sm text-gray-600">Last sync: {feed.lastSync}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{feed.records}</p>
                  <p className="text-sm text-gray-600">records</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Identified Data Gaps</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Source</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Missing Field</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Severity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Impact</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Records</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {dataGaps.map((gap) => (
                <tr key={gap.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900">{gap.source}</td>
                  <td className="py-3 px-4 text-gray-900">{gap.field}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(gap.severity)}`}>
                      {gap.severity}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{gap.impact}</td>
                  <td className="py-3 px-4 text-gray-900">{gap.records.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{gap.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-swiss-re-50 rounded-lg p-4 flex items-center gap-3"
        >
          <Database className="h-8 w-8 text-swiss-re-600" />
          <div>
            <p className="text-2xl font-bold text-gray-900">12.5M</p>
            <p className="text-sm text-gray-600">Total Records</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 rounded-lg p-4 flex items-center gap-3"
        >
          <CheckCircle className="h-8 w-8 text-green-600" />
          <div>
            <p className="text-2xl font-bold text-gray-900">94.2%</p>
            <p className="text-sm text-gray-600">Quality Score</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-50 rounded-lg p-4 flex items-center gap-3"
        >
          <Clock className="h-8 w-8 text-amber-600" />
          <div>
            <p className="text-2xl font-bold text-gray-900">15 min</p>
            <p className="text-sm text-gray-600">Avg Sync Time</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-red-50 rounded-lg p-4 flex items-center gap-3"
        >
          <AlertCircle className="h-8 w-8 text-red-600" />
          <div>
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-600">Critical Gaps</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}