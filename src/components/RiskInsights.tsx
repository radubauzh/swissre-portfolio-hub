'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, AlertTriangle, Shield, Target, Activity } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, Cell } from 'recharts'

const riskTrends = [
  { month: 'Jan', mortality: 1.2, morbidity: 2.1, lapse: 3.5, expense: 1.8 },
  { month: 'Feb', mortality: 1.3, morbidity: 2.0, lapse: 3.3, expense: 1.9 },
  { month: 'Mar', mortality: 1.1, morbidity: 2.2, lapse: 3.4, expense: 1.7 },
  { month: 'Apr', mortality: 1.4, morbidity: 2.3, lapse: 3.2, expense: 2.0 },
  { month: 'May', mortality: 1.3, morbidity: 2.4, lapse: 3.1, expense: 1.9 },
  { month: 'Jun', mortality: 1.5, morbidity: 2.5, lapse: 3.3, expense: 2.1 },
]

const concentrationData = [
  { x: 25, y: 68, z: 120, name: 'Germany Life', risk: 'low' },
  { x: 45, y: 72, z: 85, name: 'France Health', risk: 'medium' },
  { x: 68, y: 78, z: 95, name: 'Italy Disability', risk: 'high' },
  { x: 32, y: 65, z: 65, name: 'Swiss Critical', risk: 'low' },
  { x: 58, y: 75, z: 45, name: 'Austria Life', risk: 'medium' },
]

const predictions = [
  { metric: 'Mortality Risk', current: 68, predicted: 72, confidence: 85 },
  { metric: 'Lapse Rate', current: 12, predicted: 15, confidence: 78 },
  { metric: 'Claim Frequency', current: 45, predicted: 48, confidence: 92 },
  { metric: 'Expense Ratio', current: 28, predicted: 26, confidence: 88 },
]

export default function RiskInsights() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return '#ef4444'
      case 'medium':
        return '#f59e0b'
      default:
        return '#10b981'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Risk Insights & Predictions</h2>
        <p className="text-gray-600 mt-1">AI-powered risk analysis and predictive insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-swiss-re-600 to-swiss-re-700 rounded-xl p-6 text-white"
        >
          <Shield className="h-8 w-8 mb-3" />
          <p className="text-2xl font-bold">92.5%</p>
          <p className="text-sm opacity-90">Risk Score</p>
          <p className="text-xs mt-2 opacity-75">+2.3% from last month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white"
        >
          <Target className="h-8 w-8 mb-3" />
          <p className="text-2xl font-bold">85%</p>
          <p className="text-sm opacity-90">Prediction Accuracy</p>
          <p className="text-xs mt-2 opacity-75">Above target</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white"
        >
          <AlertTriangle className="h-8 w-8 mb-3" />
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm opacity-90">High Risk Treaties</p>
          <p className="text-xs mt-2 opacity-75">Requires attention</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white"
        >
          <Activity className="h-8 w-8 mb-3" />
          <p className="text-2xl font-bold">24/7</p>
          <p className="text-sm opacity-90">Real-time Monitoring</p>
          <p className="text-xs mt-2 opacity-75">All portfolios</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Factor Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="mortality" stroke="#4a6d6a" strokeWidth={2} name="Mortality" />
              <Line type="monotone" dataKey="morbidity" stroke="#00a1b0" strokeWidth={2} name="Morbidity" />
              <Line type="monotone" dataKey="lapse" stroke="#f59e0b" strokeWidth={2} name="Lapse" />
              <Line type="monotone" dataKey="expense" stroke="#8b5cf6" strokeWidth={2} name="Expense" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Concentration Map</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" dataKey="x" name="Exposure" fontSize={12} />
              <YAxis type="number" dataKey="y" name="Loss Ratio" fontSize={12} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Treaties" data={concentrationData} fill="#8884d8">
                {concentrationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getRiskColor(entry.risk)} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Predictions & Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Risk Predictions (Next Quarter)</h4>
            <div className="space-y-3">
              {predictions.map((pred) => (
                <div key={pred.metric} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{pred.metric}</p>
                    <p className="text-sm text-gray-600">
                      Current: {pred.current}% → Predicted: {pred.predicted}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700">{pred.confidence}%</p>
                    <p className="text-xs text-gray-500">confidence</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-3">AI-Driven Actions</h4>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Immediate Action Required</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Italy Disability portfolio showing 15% higher morbidity trend. Recommend pricing review.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Optimization Opportunity</p>
                    <p className="text-sm text-gray-600 mt-1">
                      German Life portfolio has 20% lower risk than priced. Consider competitive repricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Risk Mitigation Success</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Swiss portfolio interventions reduced lapse rate by 12%. Continue current strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}