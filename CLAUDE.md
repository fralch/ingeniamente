# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ingeniamente is a static educational web application for mechanical engineering learning, built with vanilla HTML/CSS/JavaScript. All content is in Spanish.

## Development Commands

**Running locally** (required due to fetch-based component loading):
```bash
# Python 3
python -m http.server 8000

# Or with Node.js
npx http-server
```

No build tools, package.json, or test framework - this is a pure static site.

## Architecture

### Component-Based Loading System

The application uses a custom component loading pattern in `js/main.js`:

```
index.html / pages/*.html
├── #sidebar-container → components/sidebar.html
├── #header-container → components/header.html
└── #footer-container → components/footer.html
```

Components are loaded via `fetch()` on DOMContentLoaded. This requires an HTTP server (won't work with `file://` protocol).

### Key Files

- **js/main.js** - Core logic: component loading, sidebar toggle, filter system, and all unit conversion calculators (temperature, length, area, volume, mass, force, pressure, power, density, energy, torque, velocity)
- **js/trivia.js** - Interactive engineering trivia game with hardcoded question bank
- **css/style.css** - Custom animations (`fade-in`, `blob-bounce`) and overrides for Tailwind
- **pages/calculadora_MTBF.html** - MTBF (Mean Time Between Failures) calculator

### External Dependencies (CDN)

- Tailwind CSS (utility classes)
- FontAwesome 6.4.0 (icons)
- Google Fonts (Outfit, Inter)
- MathJax 3 (mathematical formulas)

## Code Patterns

### JavaScript Functions

Global functions are attached to `window` for HTML onclick handlers:
```javascript
window.toggleSidebar = function() { ... }
window.calculateTemp = function() { ... }
window.toggleDropdown = function(id, button) { ... }
```

### HTML Page Structure

All pages follow this template:
```html
<body class="bg-gray-100">
    <div id="sidebar-container"></div>
    <div class="flex-1 flex flex-col md:ml-64">
        <div id="header-container"></div>
        <!-- Page content -->
        <div id="footer-container"></div>
    </div>
</body>
```

### Responsive Design

- Mobile-first approach using Tailwind breakpoints
- Sidebar: fixed on desktop (`md:ml-64`), overlay on mobile with hamburger toggle
- Key breakpoint: `md:` (768px)

## Commit Convention

Uses conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`
