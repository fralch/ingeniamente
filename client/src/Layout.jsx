import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="bg-slate-50 text-slate-800 h-screen overflow-hidden flex selection:bg-blue-500 selection:text-white">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-0">
                {/* Background Blobs */}
                <div className="blob -top-20 -right-20 opacity-50"></div>
                <div className="blob top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 opacity-30"></div>

                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                
                <div className="flex-1 overflow-y-auto px-4 py-8 md:p-8 relative z-10 scroll-smooth">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
