import { AlertCircle, AlertTriangle, Info } from 'lucide-react'

const alerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Data Gap Detected',
    message: 'Missing claims data for Germany Q4',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Anomaly Detected',
    message: 'Unusual spike in claims ratio - Switzerland',
    time: '5 hours ago',
  },
  {
    id: 3,
    type: 'info',
    title: 'Portfolio Update',
    message: 'New treaty added: Italy Life Insurance',
    time: '1 day ago',
  },
  {
    id: 4,
    type: 'warning',
    title: 'Performance Alert',
    message: 'Loss ratio exceeding threshold - France',
    time: '2 days ago',
  },
]

export default function AlertsPanel() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-red-200 bg-red-50'
      case 'warning':
        return 'border-amber-200 bg-amber-50'
      default:
        return 'border-blue-200 bg-blue-50'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
      <div className="space-y-3 max-h-[320px] overflow-y-auto scrollbar-thin">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${getAlertColor(alert.type)} transition-all hover:shadow-sm`}
          >
            <div className="flex items-start gap-3">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{alert.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{alert.message}</p>
                <p className="text-gray-500 text-xs mt-2">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}