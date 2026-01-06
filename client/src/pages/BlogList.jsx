import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/topics')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching posts');
                return res.json();
            })
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-10">Cargando artículos...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">Blog de Ingeniería</h1>
                <p className="text-slate-600">Artículos técnicos, tutoriales y novedades.</p>
                <Link to="/admin" className="text-blue-600 hover:underline mt-2 inline-block">
                    Ir al Panel de Admin (Crear Post)
                </Link>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                        {post.image_url && (
                            <img 
                                src={post.image_url} 
                                alt={post.title} 
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">
                                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                                {post.summary || 'Sin resumen disponible.'}
                            </p>
                            <Link 
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                            >
                                Leer más 
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {posts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-100">
                    <p className="text-slate-500">No hay artículos publicados todavía.</p>
                </div>
            )}
        </div>
    );
}
