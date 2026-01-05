CREATE DATABASE IF NOT EXISTS ingeniamente;
USE ingeniamente;

CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS temas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    resumen TEXT,
    contenido TEXT,
    categoria_id INT,
    imagen_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, slug) VALUES 
('Tribología', 'tribologia'),
('Mantenimiento', 'mantenimiento'),
('Diseño Mecánico', 'diseno-mecanico'),
('Hidráulica', 'hidraulica');

-- Ejemplo de tema
INSERT INTO temas (titulo, slug, resumen, contenido, categoria_id) VALUES 
('Introducción a la Tribología', 'introduccion-tribologia', 'Conceptos básicos de fricción, desgaste y lubricación.', 'Contenido completo aquí...', 1);
