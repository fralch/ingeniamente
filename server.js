const express = require('express');
const path = require('path');
const db = require('./database/index');
const app = express();
const port = 3000;

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use('/components', express.static(path.join(__dirname, 'components')));

// Ruta Principal
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Ingeniamente.com - Ingeniería Premium',
        page: 'home'
    });
});

// Ruta Dinámica para Páginas
app.get('/p/:slug', (req, res) => {
    try {
        const page = db.getPage(req.params.slug);
        if (page) {
            res.render('page', { 
                title: page.title, 
                content: page.content,
                page: 'dynamic'
            });
        } else {
            res.status(404).render('page', {
                title: 'Página no encontrada',
                content: '<div class="text-center py-10"><h1 class="text-4xl font-bold text-slate-800 mb-4">404</h1><p class="text-slate-500">La página que buscas no existe.</p><a href="/" class="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl">Volver al Inicio</a></div>',
                page: 'error'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error del servidor');
    }
});

// --- ADMIN ROUTES ---

// Admin Dashboard
app.get('/admin', (req, res) => {
    const pages = db.getAllPages();
    res.render('admin', { 
        title: 'Panel de Administración',
        page: 'admin',
        pages: pages
    });
});

// Crear Página
app.post('/admin/create', (req, res) => {
    const { title, slug, category, content } = req.body;
    
    try {
        db.createPage(slug, title, content, category);
        res.redirect('/p/' + slug);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear la página: ' + err.message);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
