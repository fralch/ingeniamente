import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPost() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        summary: '',
        content: '',
        image_url: '',
        categoryId: 1 // Default to 1 (General or whatever exists)
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Auto-generate slug from title
        if (name === 'title') {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, slug: slug }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Error creating post');

            const data = await res.json();
            setMessage('Post creado exitosamente!');
            setTimeout(() => {
                navigate(`/blog/${data.slug}`);
            }, 1500);
        } catch (error) {
            console.error(error);
            setMessage('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">Crear Nuevo Artículo</h1>
            
            {message && (
                <div className={`p-4 rounded-lg mb-6 ${message.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Slug (URL)</label>
                    <input 
                        type="text" 
                        name="slug" 
                        value={formData.slug} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Resumen</label>
                    <textarea 
                        name="summary" 
                        value={formData.summary} 
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Contenido (HTML o Texto)</label>
                    <textarea 
                        name="content" 
                        value={formData.content} 
                        onChange={handleChange}
                        rows="10"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-mono text-sm"
                        required
                    ></textarea>
                    <p className="text-xs text-slate-500 mt-1">Puedes usar etiquetas HTML básicas.</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">URL de Imagen</label>
                    <input 
                        type="text" 
                        name="image_url" 
                        value={formData.image_url} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">ID Categoría</label>
                    <input 
                        type="number" 
                        name="categoryId" 
                        value={formData.categoryId} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-50"
                >
                    {loading ? 'Creando...' : 'Publicar Artículo'}
                </button>
            </form>
        </div>
    );
}
