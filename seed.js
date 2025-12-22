const db = require('./database/index');

console.log('Seeding database...');

try {
    db.createPage(
        'ejemplo-dinamico',
        'Página de Ejemplo Dinámica',
        `
        <h2 class="text-2xl font-bold mb-4">¡Bienvenido a tu primera página dinámica!</h2>
        <p class="mb-4">Este contenido está almacenado en la base de datos SQLite y se renderiza a través de Node.js y EJS.</p>
        <p class="mb-4">Puedes agregar más contenido HTML aquí y se mostrará automáticamente con el estilo de tu sitio.</p>
        <ul class="list-disc pl-5 space-y-2">
            <li>Fácil de editar</li>
            <li>Centralizado</li>
            <li>Rápido</li>
        </ul>
        <div class="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p class="text-blue-800 font-medium">Prueba creando más páginas en la base de datos.</p>
        </div>
        `,
        'General'
    );
    console.log('Page created successfully: /p/ejemplo-dinamico');
} catch (err) {
    console.error('Error creating page:', err.message);
}
