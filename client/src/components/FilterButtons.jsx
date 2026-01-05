import React from 'react';

export default function FilterButtons({ currentFilter, setFilter }) {
    const filters = ['Todos', 'Mecánica', 'Termodinámica', 'Fluidos', 'Control'];

    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setFilter(filter)}
                    className={`filter-button px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                        currentFilter === filter
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 border-transparent'
                            : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
