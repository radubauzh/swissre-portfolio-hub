'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, AlertCircle, CheckCircle, XCircle, Search, Filter } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts'

const anomalyData = [
  { date: '2024-10-01', value: 68, expected: 67, anomaly: false },
  { date: '2024-10-15', value: 69, expected: 68, anomaly: false },
  { date: '2024-11-01', value: 71, expected: 69, anomaly: false },
  { date: '2024-11-15', value: 85, expected: 70, anomaly: true },
  { date: '2024-12-01', value: 82, expected: 71, anomaly: true },
  { date: '2024-12-15', value: 73, expected: 70, anomaly: false },
  { date: '2025-01-01', value: 72, expected: 71, anomaly: false },
]

const detectedAnomalies = [
  {
    id: 1,
    type: 'Claims Spike',
    severity: 'high',
    portfolio: 'Switzerland Health',
    detection: '2024-11-15',
    status: 'investigating',
    impact: '$2.3M excess claims',
    confidence: 95,
  },
  {
    id: 2,
    type: 'Premium Drop',
    severity: 'medium',
    portfolio: 'France Life',
    detection: '2024-12-01',
    status: 'resolved',
    impact: '$450K revenue impact',
    confidence: 87,
  },
  {
    id: 3,
    type: 'Lapse Rate Increase',
    severity: 'medium',
    portfolio: 'Germany Disability',
    detection: '2024-12-10',
    status: 'monitoring',
    impact: '8% above expected',
    confidence: 92,
  },
  {
    id: 4,
    type: 'Data Quality Issue',
    severity: 'low',
    portfolio: 'Italy Critical Illness',
    detection: '2025-01-02',
    status: 'pending',
    impact: 'Missing 1,200 records',
    confidence: 78,
  },
]

export default function AnomalyDetection() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200'
      case 'medium':
        return 'text-amber-600 bg-amber-50 border-amber-200'
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'investigating':
        return <AlertCircle className="h-5 w-5 text-amber-500" />
      case 'monitoring':
        return <TrendingUp className="h-5 w-5 text-blue-500" />
      default:
        return <XCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const filteredAnomalies = selectedFilter === 'all' 
    ? detectedAnomalies 
    : detectedAnomalies.filter(a => a.severity === selectedFilter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Anomaly Detection</h2>
          <p className="text-gray-600 mt-1">AI-powered detection of unusual patterns and outliers</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anomalies..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swiss-re-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swiss-re-500 text-gray-900 bg-white"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 rounded-lg p-4 border border-red-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-red-600">3</p>
              <p className="text-sm text-gray-700">Critical Anomalies</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-amber-50 rounded-lg p-4 border border-amber-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-amber-600">8</p>
              <p className="text-sm text-gray-700">Under Investigation</p>
            </div>
            <AlertCircle className="h-8 w-8 text-amber-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-green-50 rounded-lg p-4 border border-green-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-green-600">15</p>
              <p className="text-sm text-gray-700">Resolved (30d)</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-swiss-re-50 rounded-lg p-4 border border-swiss-re-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-swiss-re-600">92%</p>
              <p className="text-sm text-gray-700">Detection Accuracy</p>
            </div>
            <TrendingUp className="h-8 w-8 text-swiss-re-500" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="chart-container"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Anomaly Detection Timeline</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={anomalyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <ReferenceLine y={75} stroke="#ef4444" strokeDasharray="5 5" label="Threshold" />
            <ReferenceArea x1="2024-11-15" x2="2024-12-01" fill="#fee2e2" fillOpacity={0.3} />
            <Line type="monotone" dataKey="value" stroke="#4a6d6a" strokeWidth={2} name="Actual" />
            <Line type="monotone" dataKey="expected" stroke="#00a1b0" strokeWidth={2} strokeDasharray="5 5" name="Expected" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detected Anomalies</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Portfolio</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Severity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Impact</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Confidence</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Detection</th>
              </tr>
            </thead>
            <tbody>
              {filteredAnomalies.map((anomaly) => (
                <tr key={anomaly.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{anomaly.type}</td>
                  <td className="py-3 px-4 text-gray-900">{anomaly.portfolio}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(anomaly.severity)}`}>
                      {anomaly.severity}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(anomaly.status)}
                      <span className="text-sm text-gray-900">{anomaly.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{anomaly.impact}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-swiss-re-600 h-2 rounded-full"
                          style={{ width: `${anomaly.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{anomaly.confidence}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{anomaly.detection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-swiss-re-600 to-swiss-re-700 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">AI Model Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold">98.5%</p>
            <p className="text-sm opacity-90">Model Uptime</p>
            <p className="text-xs mt-2 opacity-75">Processing 2.5M records/hour</p>
          </div>
          <div>
            <p className="text-3xl font-bold">0.03s</p>
            <p className="text-sm opacity-90">Average Detection Time</p>
            <p className="text-xs mt-2 opacity-75">Real-time processing</p>
          </div>
          <div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm opacity-90">Patterns Monitored</p>
            <p className="text-xs mt-2 opacity-75">Across all portfolios</p>
          </div>
        </div>
      </div>
    </div>
  )
}