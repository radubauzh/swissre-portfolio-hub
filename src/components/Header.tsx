'use client'

import { Bell, Search, User, ExternalLink, BookOpen, Briefcase } from 'lucide-react'
import SwissReLogo from './SwissReLogo'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <SwissReLogo />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-gray-900">ReInsight</h1>
              <p className="text-xs text-gray-500">Portfolio Analytics Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search portfolios..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swiss-re-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div> */}

            {/* About Me Section */}
            <div className="relative group">
              <button className="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <BookOpen className="h-5 w-5" />
                <span className="hidden lg:inline text-sm font-medium">About Me</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">About Rafael Dubach</h3>
                  <div className="space-y-2">
                    <a
                      href="https://www.linkedin.com/in/rafael-dubach/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-swiss-re-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <Briefcase className="h-4 w-4" />
                      LinkedIn Profile
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                    <a
                      href="https://rafaeldubach.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-swiss-re-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <User className="h-4 w-4" />
                      Portfolio Website
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=HX_O1rAAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-swiss-re-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      Google Scholar
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => alert('3 new notifications:\n• Claims spike detected in Switzerland Health\n• Data quality issue resolved\n• Weekly report available')}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-5 w-5" />
              <span className="hidden md:inline text-sm font-medium">PM&I Analyst</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}