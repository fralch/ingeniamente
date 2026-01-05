import React from 'react';
import { Link } from 'react-router-dom';

export default function CardGrid({ cards }) {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12">
            {cards.map((card, index) => (
                <Link
                    key={index} 
                    to={card.href} 
                    className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in"
                    data-category={card.category}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-${card.color}-50 rounded-xl flex items-center justify-center text-${card.color}-500 group-hover:scale-110 transition-transform duration-300`}>
                            <i className={`${card.icon} text-xl`}></i>
                        </div>
                        <span className={`category-badge bg-${card.color}-50 text-${card.color}-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide`}>
                            {card.category}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {card.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                        {card.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
                        {card.cta} <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </Link>
            ))}
        </div>
    );
}
