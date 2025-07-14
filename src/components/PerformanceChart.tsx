'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', premium: 42, claims: 28, ratio: 66.7 },
  { month: 'Feb', premium: 45, claims: 31, ratio: 68.9 },
  { month: 'Mar', premium: 48, claims: 30, ratio: 62.5 },
  { month: 'Apr', premium: 52, claims: 35, ratio: 67.3 },
  { month: 'May', premium: 55, claims: 38, ratio: 69.1 },
  { month: 'Jun', premium: 58, claims: 40, ratio: 69.0 },
  { month: 'Jul', premium: 62, claims: 42, ratio: 67.7 },
  { month: 'Aug', premium: 65, claims: 45, ratio: 69.2 },
  { month: 'Sep', premium: 68, claims: 46, ratio: 67.6 },
  { month: 'Oct', premium: 72, claims: 49, ratio: 68.1 },
  { month: 'Nov', premium: 75, claims: 51, ratio: 68.0 },
  { month: 'Dec', premium: 78, claims: 53, ratio: 67.9 },
]

export default function PerformanceChart() {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <YAxis yAxisId="right" orientation="right" stroke="#f59e0b" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="premium"
            stroke="#4a6d6a"
            strokeWidth={2}
            dot={{ fill: '#4a6d6a', r: 4 }}
            name="Premium (M$)"
          />
          <Line
            type="monotone"
            dataKey="claims"
            stroke="#00a1b0"
            strokeWidth={2}
            dot={{ fill: '#00a1b0', r: 4 }}
            name="Claims (M$)"
          />
          <Line
            type="monotone"
            dataKey="ratio"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: '#f59e0b', r: 4 }}
            name="Loss Ratio (%)"
            yAxisId="right"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}