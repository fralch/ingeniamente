# Nueva Arquitectura del Proyecto

Hemos migrado tu sitio web estático a una aplicación dinámica usando **Node.js**, **Express** y **SQLite**. Esto te permite gestionar el contenido de manera más eficiente y escalable.

## Estructura de Archivos

- **`server.js`**: El punto de entrada de la aplicación. Configura el servidor, las rutas y la conexión a la base de datos.
- **`views/`**: Aquí están las plantillas HTML (ahora `.ejs`).
  - **`index.ejs`**: La página de inicio.
  - **`page.ejs`**: La plantilla para todas las páginas dinámicas.
  - **`partials/`**: Componentes reutilizables (`header`, `footer`, `sidebar`).
- **`public/`**: Archivos estáticos (`css`, `js`, `img`).
  - **`pages/`**: Tus páginas HTML antiguas siguen aquí por compatibilidad.
- **`database/`**:
  - **`ingeniamente.db`**: Tu base de datos SQLite (donde se guarda el texto de las páginas).
  - **`index.js`**: Funciones para leer y escribir en la base de datos.

## Cómo funciona

1.  **Página de Inicio (`/`)**: Renderiza `views/index.ejs`.
2.  **Páginas Dinámicas (`/p/:slug`)**:
    - Cuando visitas `/p/ejemplo-dinamico`, el servidor busca en la base de datos una página con ese "slug".
    - Si la encuentra, inyecta el contenido en la plantilla `views/page.ejs`.
3.  **Páginas Estáticas (`/pages/...`)**: Tus archivos HTML antiguos siguen funcionando tal cual.

## Cómo agregar una nueva página

Por ahora, puedes usar el script `seed.js` como ejemplo para insertar contenido en la base de datos. En el futuro, podemos crear un panel de administración visual (`/admin`) para que lo hagas desde el navegador.

### Ejemplo de uso:
1.  Abre `seed.js`.
2.  Cambia los datos (`slug`, `title`, `content`).
3.  Ejecuta `node seed.js` en la terminal.
4.  Visita `http://localhost:3000/p/tu-nuevo-slug`.

## Comandos

- **Iniciar servidor**: `node server.js`
- **Agregar datos de prueba**: `node seed.js`
