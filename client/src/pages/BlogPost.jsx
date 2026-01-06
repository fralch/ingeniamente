import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/pages/${slug}`)
            .then(res => {
                if (!res.ok) throw new Error('Post not found');
                return res.json();
            })
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div className="text-center py-10">Cargando...</div>;
    if (error) return (
            <div className="text-center py-10">
                <p className="text-red-500 mb-4">Error: {error}</p>
                <Link to="/blog" className="text-blue-600 hover:underline">Volver al blog</Link>
            </div>
        );

    return (
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {post.image_url && (
                <div className="w-full h-64 md:h-96 overflow-hidden">
                    <img 
                        src={post.image_url} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            
            <div className="p-8 md:p-12">
                <header className="mb-8 border-b border-slate-100 pb-8">
                    <Link to="/blog" className="text-sm text-slate-500 hover:text-blue-600 mb-4 inline-block">
                        &larr; Volver al Blog
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    {/* If we had date or author, we'd put it here */}
                </header>

                <div 
                    className="prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    );
}
