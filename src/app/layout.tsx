import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReInsight - Portfolio Analytics | Swiss Re',
  description: 'Advanced portfolio monitoring and insights platform for reinsurance analytics',
  keywords: 'reinsurance, portfolio analytics, risk management, Swiss Re, L&H insurance',
  authors: [{ name: 'ReInsight Team' }],
  openGraph: {
    title: 'ReInsight - Portfolio Analytics',
    description: 'Advanced portfolio monitoring and insights platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}