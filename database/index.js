const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'ingeniamente.db')); // verbose removed for cleaner logs

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS pages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

function getPage(slug) {
  const stmt = db.prepare('SELECT * FROM pages WHERE slug = ?');
  return stmt.get(slug);
}

function createPage(slug, title, content, category) {
  const stmt = db.prepare('INSERT INTO pages (slug, title, content, category) VALUES (?, ?, ?, ?)');
  return stmt.run(slug, title, content, category);
}

function getAllPages() {
  const stmt = db.prepare('SELECT slug, title, category FROM pages');
  return stmt.all();
}

module.exports = {
  getPage,
  createPage,
  getAllPages
};
