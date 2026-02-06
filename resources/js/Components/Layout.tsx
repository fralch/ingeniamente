import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex">
      {/* Sidebar Container */}
      <div 
        id="sidebar-container" 
        className={`fixed inset-y-0 left-0 z-50 w-72 h-screen transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 shadow-2xl md:shadow-none`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Mobile Overlay */}
      <div 
        id="mobile-overlay" 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 ${sidebarOpen ? 'block' : 'hidden'} md:hidden opacity-100 transition-opacity duration-300`} 
        onClick={toggleSidebar}
      ></div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden relative z-0">
        {/* Background Blobs */}
        <div className="blob -top-20 -right-20 opacity-50"></div>
        <div className="blob top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 opacity-30"></div>

        {/* Header Container */}
        <div id="header-container" className="sticky top-0 z-40">
          <Header toggleSidebar={toggleSidebar} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-8 md:p-8 relative z-10 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Layout