'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import PortfolioAnalytics from '@/components/PortfolioAnalytics'
import DataQuality from '@/components/DataQuality'
import RiskInsights from '@/components/RiskInsights'
import AnomalyDetection from '@/components/AnomalyDetection'

export default function Home() {
  const [activeView, setActiveView] = useState('dashboard')

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'portfolio':
        return <PortfolioAnalytics />
      case 'data-quality':
        return <DataQuality />
      case 'risk-insights':
        return <RiskInsights />
      case 'anomalies':
        return <AnomalyDetection />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}