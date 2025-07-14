'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Life Insurance', value: 45, color: '#4a6d6a' },
  { name: 'Health Insurance', value: 30, color: '#00a1b0' },
  { name: 'Disability', value: 15, color: '#f59e0b' },
  { name: 'Critical Illness', value: 10, color: '#8b5cf6' },
]

export default function PortfolioOverview() {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Distribution by Line</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry: any) => (
              <span style={{ color: entry.color }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}