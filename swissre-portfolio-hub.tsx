import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, ComposedChart } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Globe, DollarSign, Activity, Users, Shield, Target, Calendar, FileText, Download, Settings, Bell, BarChart3 } from 'lucide-react';

const SwissRePortfolioHub = () => {
  const [selectedRegion, setSelectedRegion] = useState('EMEA');
  const [timeRange, setTimeRange] = useState('12M');
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute for real-time feel
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced portfolio data with more metrics
  const portfolioData = {
    EMEA: {
      totalPremium: 2847000000,
      lossRatio: 0.68,
      combinedRatio: 0.94,
      premiumGrowth: 0.08,
      claimsCount: 15678,
      reserveAdequacy: 1.12,
      solvencyRatio: 2.34,
      roe: 0.089,
      clientCount: 847,
      avgPolicySize: 3365000
    },
    Americas: {
      totalPremium: 4235000000,
      lossRatio: 0.72,
      combinedRatio: 0.98,
      premiumGrowth: 0.05,
      claimsCount: 23401,
      reserveAdequacy: 1.08,
      solvencyRatio: 2.12,
      roe: 0.067,
      clientCount: 1204,
      avgPolicySize: 3518000
    },
    'Asia-Pacific': {
      totalPremium: 1892000000,
      lossRatio: 0.65,
      combinedRatio: 0.91,
      premiumGrowth: 0.12,
      claimsCount: 9876,
      reserveAdequacy: 1.15,
      solvencyRatio: 2.45,
      roe: 0.112,
      clientCount: 523,
      avgPolicySize: 3617000
    }
  };

  // Enhanced loss ratio trends with predictions
  const lossRatioTrends = [
    { month: 'Jan', EMEA: 0.72, Americas: 0.75, 'Asia-Pacific': 0.68, predicted_EMEA: null },
    { month: 'Feb', EMEA: 0.70, Americas: 0.74, 'Asia-Pacific': 0.66, predicted_EMEA: null },
    { month: 'Mar', EMEA: 0.69, Americas: 0.73, 'Asia-Pacific': 0.67, predicted_EMEA: null },
    { month: 'Apr', EMEA: 0.71, Americas: 0.72, 'Asia-Pacific': 0.65, predicted_EMEA: null },
    { month: 'May', EMEA: 0.68, Americas: 0.71, 'Asia-Pacific': 0.64, predicted_EMEA: null },
    { month: 'Jun', EMEA: 0.67, Americas: 0.70, 'Asia-Pacific': 0.63, predicted_EMEA: null },
    { month: 'Jul', EMEA: 0.69, Americas: 0.72, 'Asia-Pacific': 0.65, predicted_EMEA: null },
    { month: 'Aug', EMEA: 0.68, Americas: 0.71, 'Asia-Pacific': 0.64, predicted_EMEA: null },
    { month: 'Sep', EMEA: 0.66, Americas: 0.70, 'Asia-Pacific': 0.62, predicted_EMEA: null },
    { month: 'Oct', EMEA: 0.67, Americas: 0.71, 'Asia-Pacific': 0.64, predicted_EMEA: null },
    { month: 'Nov', EMEA: 0.68, Americas: 0.72, 'Asia-Pacific': 0.65, predicted_EMEA: null },
    { month: 'Dec', EMEA: 0.68, Americas: 0.72, 'Asia-Pacific': 0.65, predicted_EMEA: null },
    { month: 'Jan+1', EMEA: null, Americas: null, 'Asia-Pacific': null, predicted_EMEA: 0.67 },
    { month: 'Feb+1', EMEA: null, Americas: null, 'Asia-Pacific': null, predicted_EMEA: 0.66 },
    { month: 'Mar+1', EMEA: null, Americas: null, 'Asia-Pacific': null, predicted_EMEA: 0.65 }
  ];

  // Premium growth by market segment
  const marketSegments = [
    { segment: 'Large Corporate', premium: 1680000000, growth: 0.06, margin: 0.14, clientSatisfaction: 4.3 },
    { segment: 'Mid-Market', premium: 789000000, growth: 0.11, margin: 0.18, clientSatisfaction: 4.5 },
    { segment: 'Specialty Lines', premium: 378000000, growth: 0.15, margin: 0.22, clientSatisfaction: 4.2 }
  ];

  // Enhanced line of business data
  const lineOfBusinessData = [
    { lob: 'Life & Health', premium: 1200000000, lossRatio: 0.65, growth: 0.09, marketShare: 0.18, profitability: 'high' },
    { lob: 'Property', premium: 890000000, lossRatio: 0.71, growth: 0.06, marketShare: 0.14, profitability: 'medium' },
    { lob: 'Casualty', premium: 567000000, lossRatio: 0.69, growth: 0.12, marketShare: 0.22, profitability: 'high' },
    { lob: 'Motor', premium: 190000000, lossRatio: 0.74, growth: 0.03, marketShare: 0.08, profitability: 'low' }
  ];

  // Client portfolio analysis
  const clientPortfolios = [
    { 
      client: 'Global Insurance Partner A', 
      premium: 485000000, 
      lossRatio: 0.63, 
      dataQuality: 0.96,
      relationship: 'excellent',
      renewalProb: 0.95,
      trendscore: 8.7
    },
    { 
      client: 'European Reinsurer B', 
      premium: 312000000, 
      lossRatio: 0.71, 
      dataQuality: 0.89,
      relationship: 'good',
      renewalProb: 0.87,
      trendscore: 7.2
    },
    { 
      client: 'Regional Insurer C', 
      premium: 156000000, 
      lossRatio: 0.68, 
      dataQuality: 0.92,
      relationship: 'stable',
      renewalProb: 0.78,
      trendscore: 6.8
    },
    { 
      client: 'Specialty Line Provider D', 
      premium: 98000000, 
      lossRatio: 0.59, 
      dataQuality: 0.84,
      relationship: 'growing',
      renewalProb: 0.92,
      trendscore: 9.1
    }
  ];

  // Data ingestion monitoring
  const dataIngestionMetrics = [
    { source: 'Lloyd\'s Market Data', status: 'active', lastUpdate: '2 min ago', volume: '2.3M records', quality: 0.98 },
    { source: 'European Solvency Data', status: 'active', lastUpdate: '15 min ago', volume: '890K records', quality: 0.94 },
    { source: 'Claims Processing System', status: 'warning', lastUpdate: '45 min ago', volume: '1.7M records', quality: 0.87 },
    { source: 'Legacy Portfolio System', status: 'error', lastUpdate: '3 hours ago', volume: '450K records', quality: 0.72 }
  ];

  // Predictive analytics insights
  const predictiveInsights = [
    {
      metric: 'Q1 Loss Ratio Forecast',
      predicted: 0.67,
      confidence: 0.89,
      trend: 'improving',
      impact: 'positive'
    },
    {
      metric: 'Premium Growth Outlook',
      predicted: 0.094,
      confidence: 0.84,
      trend: 'stable',
      impact: 'neutral'
    },
    {
      metric: 'Client Retention Rate',
      predicted: 0.91,
      confidence: 0.92,
      trend: 'strong',
      impact: 'positive'
    }
  ];

  // Key alerts and insights (enhanced)
  const alerts = [
    {
      type: 'warning',
      title: 'Loss Ratio Deterioration - Americas',
      message: 'Americas region showing 3% increase in loss ratio over Q4, driven by property claims',
      priority: 'high',
      action: 'Schedule review with underwriting team for property portfolio pricing',
      impact: '$12M estimated',
      timeline: 'Next 2 weeks'
    },
    {
      type: 'opportunity',
      title: 'Asia-Pacific Expansion Potential',
      message: 'Strong premium growth (12%) with improving loss ratios and high client satisfaction',
      priority: 'medium',
      action: 'Prepare business case for increased capacity allocation',
      impact: '+$45M potential',
      timeline: 'Q2 planning'
    },
    {
      type: 'data',
      title: 'Data Pipeline Degradation',
      message: 'Legacy Portfolio System showing 35% data completeness gap affecting 15 client portfolios',
      priority: 'high',
      action: 'Escalate to IT for immediate remediation - client impact analysis required',
      impact: 'Operational risk',
      timeline: 'Immediate'
    },
    {
      type: 'regulatory',
      title: 'Solvency II Reporting Deadline',
      message: 'Q4 regulatory submissions due in 5 days - data validation in progress',
      priority: 'medium',
      action: 'Final quality checks and submission preparation',
      impact: 'Compliance',
      timeline: '5 days'
    }
  ];

  const currentData = portfolioData[selectedRegion];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  const formatPercentage = (value) => {
    return (value * 100).toFixed(1) + '%';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'good': return 'text-teal-700 bg-teal-50 border-teal-200';
      case 'stable': return 'text-gray-700 bg-gray-50 border-gray-200';
      case 'growing': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'active': return 'text-emerald-600';
      case 'warning': return 'text-amber-600';
      case 'error': return 'text-red-600';
      case 'high': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'medium': return 'text-teal-700 bg-teal-50 border-teal-200';
      case 'low': return 'text-amber-700 bg-amber-50 border-amber-200';
      default: return 'text-gray-600';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'opportunity': return <TrendingUp className="h-5 w-5 text-emerald-500" />;
      case 'data': return <Activity className="h-5 w-5 text-teal-500" />;
      case 'regulatory': return <Shield className="h-5 w-5 text-indigo-500" />;
      default: return <CheckCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const COLORS = ['#047857', '#0d9488', '#059669', '#10b981', '#34d399'];

  // Swiss Re Logo Component
  const SwissReLogo = () => (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-0.5 mb-0.5">
            <div className="w-1 h-2 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-2.5 bg-white rounded-sm"></div>
          </div>
          <div className="flex space-x-0.5">
            <div className="w-1 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
            <div className="w-1 h-1 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="border-l border-slate-300 pl-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-slate-900">Swiss Re</h1>
          <span className="text-lg text-teal-600 font-semibold">Portfolio Intelligence</span>
        </div>
        <p className="text-slate-600 text-sm">Portfolio Monitoring & Insights • Continental Europe</p>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm font-medium">Total Premium</p>
                    <p className="text-2xl font-bold text-slate-900">{formatCurrency(currentData.totalPremium)}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" />
                      <span className="text-emerald-600 text-sm">{formatPercentage(currentData.premiumGrowth)} YoY</span>
                    </div>
                  </div>
                  <DollarSign className="h-8 w-8 text-teal-500" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm font-medium">Loss Ratio</p>
                    <p className="text-2xl font-bold text-slate-900">{formatPercentage(currentData.lossRatio)}</p>
                    <div className="flex items-center mt-2">
                      {currentData.lossRatio > 0.70 ? 
                        <TrendingUp className="h-4 w-4 text-red-500 mr-1" /> : 
                        <TrendingDown className="h-4 w-4 text-emerald-500 mr-1" />
                      }
                      <span className={currentData.lossRatio > 0.70 ? "text-red-600 text-sm" : "text-emerald-600 text-sm"}>
                        Target: 65%
                      </span>
                    </div>
                  </div>
                  <Activity className="h-8 w-8 text-red-500" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm font-medium">ROE</p>
                    <p className="text-2xl font-bold text-slate-900">{formatPercentage(currentData.roe)}</p>
                    <div className="flex items-center mt-2">
                      <Target className="h-4 w-4 text-teal-500 mr-1" />
                      <span className="text-teal-600 text-sm">vs 8% target</span>
                    </div>
                  </div>
                  <Target className="h-8 w-8 text-emerald-500" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm font-medium">Solvency Ratio</p>
                    <p className="text-2xl font-bold text-slate-900">{currentData.solvencyRatio.toFixed(2)}x</p>
                    <div className="flex items-center mt-2">
                      <Shield className="h-4 w-4 text-emerald-500 mr-1" />
                      <span className="text-emerald-600 text-sm">Strong capital</span>
                    </div>
                  </div>
                  <Shield className="h-8 w-8 text-indigo-500" />
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              
              {/* Loss Ratio Trends with Prediction */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Loss Ratio Trends & Forecast</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={lossRatioTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis domain={[0.6, 0.8]} tickFormatter={formatPercentage} stroke="#64748b" />
                    <Tooltip formatter={(value) => value ? formatPercentage(value) : 'N/A'} />
                    <Legend />
                    <Line type="monotone" dataKey="EMEA" stroke="#047857" strokeWidth={3} dot={{ fill: '#047857', strokeWidth: 2, r: 4 }} />
                    <Line type="monotone" dataKey="Americas" stroke="#0d9488" strokeWidth={3} dot={{ fill: '#0d9488', strokeWidth: 2, r: 4 }} />
                    <Line type="monotone" dataKey="Asia-Pacific" stroke="#059669" strokeWidth={3} dot={{ fill: '#059669', strokeWidth: 2, r: 4 }} />
                    <Line type="monotone" dataKey="predicted_EMEA" stroke="#047857" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#047857', strokeWidth: 2, r: 3 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Market Segment Performance */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Market Segment Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={marketSegments}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="segment" stroke="#64748b" />
                    <YAxis yAxisId="left" tickFormatter={(value) => formatCurrency(value)} stroke="#64748b" />
                    <YAxis yAxisId="right" orientation="right" tickFormatter={formatPercentage} stroke="#64748b" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="premium" fill="#0d9488" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#059669" strokeWidth={3} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Line of Business Analysis */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Line of Business Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {lineOfBusinessData.map((lob, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-slate-900">{lob.lob}</h4>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-slate-600">Premium: {formatCurrency(lob.premium)}</p>
                      <p className="text-sm text-slate-600">Loss Ratio: {formatPercentage(lob.lossRatio)}</p>
                      <p className="text-sm text-slate-600">Growth: {formatPercentage(lob.growth)}</p>
                      <p className="text-sm text-slate-600">Market Share: {formatPercentage(lob.marketShare)}</p>
                    </div>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getStatusColor(lob.profitability)}`}>
                        {lob.profitability.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'clients':
        return (
          <>
            {/* Client Portfolio Analysis */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Client Portfolio Performance</h3>
              <div className="space-y-4">
                {clientPortfolios.map((client, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">{client.client}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-slate-500">Premium</p>
                            <p className="font-medium">{formatCurrency(client.premium)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Loss Ratio</p>
                            <p className={`font-medium ${client.lossRatio > 0.70 ? 'text-red-600' : 'text-emerald-600'}`}>
                              {formatPercentage(client.lossRatio)}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Data Quality</p>
                            <p className="font-medium">{formatPercentage(client.dataQuality)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Relationship</p>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getStatusColor(client.relationship)}`}>
                              {client.relationship}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Renewal Prob.</p>
                            <p className="font-medium">{formatPercentage(client.renewalProb)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Trend Score</p>
                            <p className="font-medium">{client.trendscore}/10</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'data':
        return (
          <>
            {/* Data Ingestion Monitoring */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Data Ingestion Monitoring</h3>
              <div className="space-y-4">
                {dataIngestionMetrics.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{source.source}</p>
                      <div className="flex space-x-6 mt-1">
                        <span className="text-sm text-slate-600">Last Update: {source.lastUpdate}</span>
                        <span className="text-sm text-slate-600">Volume: {source.volume}</span>
                        <span className="text-sm text-slate-600">Quality: {formatPercentage(source.quality)}</span>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-2`}>
                      <div className={`w-3 h-3 rounded-full ${
                        source.status === 'active' ? 'bg-emerald-500' : 
                        source.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        source.status === 'active' ? 'text-emerald-600' : 
                        source.status === 'warning' ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {source.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Predictive Analytics Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {predictiveInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-slate-900">{insight.metric}</h4>
                    <div className="mt-2">
                      <p className="text-2xl font-bold text-teal-600">
                        {typeof insight.predicted === 'number' && insight.predicted < 1 ? 
                          formatPercentage(insight.predicted) : 
                          insight.predicted
                        }
                      </p>
                      <p className="text-sm text-slate-600">Confidence: {formatPercentage(insight.confidence)}</p>
                      <div className="flex items-center mt-2">
                        {insight.trend === 'improving' || insight.trend === 'strong' ? 
                          <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" /> :
                          <Activity className="h-4 w-4 text-teal-500 mr-1" />
                        }
                        <span className={`text-sm ${
                          insight.impact === 'positive' ? 'text-emerald-600' : 
                          insight.impact === 'negative' ? 'text-red-600' : 'text-teal-600'
                        }`}>
                          {insight.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <SwissReLogo />
            <div className="flex items-center space-x-4">
              <select 
                value={selectedRegion} 
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="EMEA">EMEA</option>
                <option value="Americas">Americas</option>
                <option value="Asia-Pacific">Asia-Pacific</option>
              </select>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-slate-500" />
                <span className="bg-teal-500 text-white text-xs rounded-full px-2 py-1">{alerts.length}</span>
              </div>
              <div className="text-sm text-slate-600 flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>Live • {currentTime.toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-slate-100 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Portfolio Overview', icon: Globe },
            { id: 'clients', label: 'Client Management', icon: Users },
            { id: 'data', label: 'Data & Analytics', icon: Activity }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-teal-600 shadow-sm font-medium' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Strategic Alerts & Insights */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Strategic Alerts & Action Items</h3>
            <div className="flex items-center space-x-2">
              <Download className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-500">Export Report</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alerts.map((alert, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900">{alert.title}</h4>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        alert.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {alert.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{alert.message}</p>
                    <div className="mt-3 p-3 bg-slate-50 rounded-md">
                      <p className="text-xs font-medium text-slate-700">Recommended Action:</p>
                      <p className="text-sm text-slate-600">{alert.action}</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-500">Impact: {alert.impact}</span>
                        <span className="text-xs text-slate-500">Timeline: {alert.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm py-6 border-t border-slate-200">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                <BarChart3 className="h-3 w-3 text-white" />
              </div>
              <span className="font-semibold">Swiss Re</span>
            </div>
            <span>•</span>
            <span>Portfolio Monitoring & Insights EMEA</span>
            <span>•</span>
            <span>Confidential & Proprietary</span>
          </div>
          <p>Advanced Analytics Platform | Built with React, Recharts, and Tailwind CSS</p>
          <p>Data refreshed every 15 minutes • Real-time monitoring • Predictive insights</p>
        </div>
      </div>
    </div>
  );
};

export default SwissRePortfolioHub;