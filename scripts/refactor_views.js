const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, '../views');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Replace Containers with Includes (if they match the pattern)
    // Note: The indentation might vary, so we use regex with whitespace

    // Sidebar
    const sidebarRegex = /<div id="sidebar-container"[^>]*>(\s*)<\/div>/g;
    content = content.replace(sidebarRegex, (match, indent) => {
        // We keep the container div wrapping the include because of the classes
        const containerTag = match.replace('</div>', '');
        return `${containerTag}
    <%- include('${filePath.includes('pages' + path.sep) ? '../../partials/sidebar' : 'partials/sidebar'}') %>
</div>`;
    });
    // Wait, the partial path depends on depth if we use relative paths in include?
    // EJS includes are relative to the file OR absolute from views if we configure it?
    // Express 'views' setting: includes are relative to the current file usually. 
    // IF we use absolute path like '/partials/sidebar' it might work if configured.
    // Standard EJS in Express: <%- include('../partials/sidebar') %> for pages/foo.ejs

    // Let's refine the include path logic.
    // If we are in views/pages/foo.ejs -> include('../partials/sidebar')
    // If we are in views/pages/sub/foo.ejs -> include('../../partials/sidebar')
    // If we are in views/index.ejs -> include('partials/sidebar')

    // I need to calculate relative path to partials.

    // Header
    const headerRegex = /<div id="header-container"[^>]*>(\s*)<\/div>/g;
    content = content.replace(headerRegex, (match, indent) => {
        const containerTag = match.replace('</div>', '');
        return `${containerTag}
    <%- include('${getRelativePath(filePath, 'partials/header')}') %>
</div>`;
    });

    // Footer
    const footerRegex = /<div id="footer-container"[^>]*>(\s*)<\/div>/g;
    content = content.replace(footerRegex, (match, indent) => {
        const containerTag = match.replace('</div>', '');
        return `${containerTag}
    <%- include('${getRelativePath(filePath, 'partials/footer')}') %>
</div>`;
    });

    // 2. Fix Links to be Absolute and remove .html
    // href="pages/foo.html" -> href="/pages/foo"
    // href="../pages/foo.html" -> href="/pages/foo"
    // href="../../pages/foo.html" -> href="/pages/foo"
    // href="index.html" -> href="/"
    // href="../index.html" -> href="/"

    content = content.replace(/href="[^"]*index\.html"/g, 'href="/"');
    content = content.replace(/href=".*pages\/([^"]+)\.html"/g, 'href="/pages/$1"');

    // Handle cases where replacement was already partially done (e.g. pages/foo without .html)
    // We want to make sure they start with /
    // This is tricky without breaking external links.
    // Safest is to target known internal paths.

    content = content.replace(/href="pages\/([^"]+)"/g, 'href="/pages/$1"');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function getRelativePath(currentFile, targetPartial) {
    const rel = path.relative(path.dirname(currentFile), path.join(viewsDir, targetPartial));
    return rel.replace(/\\/g, '/');
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.ejs')) {
            processFile(filePath);
        }
    }
}

walkDir(viewsDir);
