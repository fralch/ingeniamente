import React from 'react'

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="h-16 bg-slate-900 border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-40 sticky top-0 transition-all duration-300 shadow-md">
      <div className="flex items-center gap-4">
        <button 
          className="text-slate-400 hover:text-white text-xl md:hidden transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5" 
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="hidden md:block">
          <h2 className="text-lg font-bold text-white tracking-tight">Biblioteca de Contenido</h2>
          <p className="text-xs text-slate-400 font-medium">Recursos educativos de ingeniería</p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-all group relative">
            <i className="fa-regular fa-bell text-slate-400 group-hover:text-blue-400 transition-colors"></i>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-slate-900"></span>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-all group">
            <i className="fa-solid fa-gear text-slate-400 group-hover:text-blue-400 transition-colors"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header