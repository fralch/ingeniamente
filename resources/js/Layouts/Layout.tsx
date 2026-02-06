import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Ingeniamente.com - Ingeniería Premium' }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <Head title={title} />
            <div className="bg-slate-50 text-slate-800 h-screen overflow-hidden flex selection:bg-blue-500 selection:text-white">
                {/* Sidebar Container */}
                <div id="sidebar-container" className={`fixed inset-y-0 left-0 z-50 w-72 h-full transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 shadow-2xl md:shadow-none`}>
                    <Sidebar />
                </div>

                {/* Mobile Overlay */}
                {sidebarOpen && (
                    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300" onClick={toggleSidebar}></div>
                )}

                {/* Main Content */}
                <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-0">
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
        </>
    );
};

export default Layout;
