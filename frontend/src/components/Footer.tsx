import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-10 pb-8 border-t border-gray-100 text-center bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-6">
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Sobre Nosotros</a>
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Contacto</a>
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Términos</a>
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">Privacidad</a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a href="#" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <p className="text-slate-400 text-xs font-medium">
          &copy; 2026 Ingeniamente.com <span className="mx-1">•</span> Ingeniería para todos v2.5
        </p>
      </div>
    </footer>
  )
}

export default Footer