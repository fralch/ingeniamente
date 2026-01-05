# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ingeniamente.com is a static educational website focused on mechanical engineering topics. The site provides educational content, interactive calculators, and resources covering topics like maintenance management, tribology, mechanical design, hydraulics, pneumatics, and machine elements.

## Technology Stack

- **Frontend**: Pure HTML, CSS, and vanilla JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: FontAwesome 6.4.0
- **Typography**: Google Fonts (Inter for body, Outfit for headings)
- **Math Rendering**: MathJax 3 (for pages with formulas)
- **No Build Process**: This is a static site with no build step or package manager

## Project Structure

```
/
├── index.html              # Main landing page with topic cards
├── components/             # Reusable HTML components
│   ├── sidebar.html        # Navigation sidebar with calculators
│   ├── header.html         # Top header bar
│   └── footer.html         # Footer with links
├── pages/                  # Content pages
│   ├── *.html             # Topic pages (tribologia.html, etc.)
│   ├── calculadora_MTBF.html
│   └── mantenimiento/     # Maintenance subcategory
├── js/
│   └── main.js            # Core JavaScript for component loading & calculators
├── css/
│   └── style.css          # Custom styles (animations, nav, etc.)
├── asset/                 # Static assets
└── database/              # Currently empty
```

## Architecture

### Component Loading System

The site uses a component-based architecture without a framework:

1. **Dynamic Component Loading**: `main.js` loads HTML components via fetch API into container divs
2. **Base Path Handling**: Pages in subdirectories set `window.appBasePath` to adjust relative paths
   - Root pages: no basePath needed
   - Pages in `/pages/`: `window.appBasePath = '../'`
   - Pages in `/pages/mantenimiento/`: `window.appBasePath = '../../'`

3. **Component Containers**: Each page has these divs that get populated:
   - `sidebar-container`: Navigation sidebar
   - `header-container`: Top header
   - `footer-container`: Footer content

### Page Templates

All pages follow this structure:
- Full-height layout with sidebar + main content
- Mobile-responsive with collapsible sidebar
- Background "blob" animations
- Sticky header
- Scrollable content area with max-width container

### Sidebar Calculators

The sidebar (`components/sidebar.html`) contains embedded unit conversion calculators:
- Temperature (Celsius, Fahrenheit, Kelvin, Réaumur, Rankine)
- Length (meters, feet, inches, etc.)
- Area, Volume, Weight, Speed, Pressure, Flow

All calculator functions are in `js/main.js` with naming pattern `calculateX()` where X is the measurement type.

### Navigation System

- `setActive(element)`: Highlights active navigation item
- `toggleDropdown(id, button)`: Expands/collapses dropdown sections
- `toggleSidebar()`: Mobile sidebar toggle
- Active link highlighting based on URL (handled in `highlightActiveLink()`)

## Development Workflow

### Running Locally

This site **requires a local web server** due to CORS restrictions when loading components via fetch.

**Recommended local server options:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server installed)
npx http-server -p 8000

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit: `http://localhost:8000`

### Creating New Pages

1. **Copy an existing page template** (e.g., `pages/tribologia.html`)
2. **Update the basePath** if in subdirectory
3. **Keep the same structure**: sidebar-container, header-container, main content area
4. **Use MathJax** if page contains formulas: include the MathJax script tags
5. **Add navigation link** in `components/sidebar.html` under appropriate section

### Adding Calculators

All calculator logic lives in `js/main.js`:
1. Add HTML form in sidebar with pattern: `calc-[type]` as dropdown ID
2. Create input field: `[type]-input`, unit selector: `[type]-unit`, result div: `[type]-result`
3. Add `calculateX()` function following existing patterns
4. Convert all inputs to a base unit, then convert to all target units
5. Use `formatResultItem(label, value)` helper for consistent result formatting

### Styling Conventions

- Use Tailwind utility classes for all styling
- Custom CSS in `style.css` limited to:
  - Animations (`fade-in`, `blob-bounce`)
  - Nav item active states
  - Scrollbar hiding
  - Font imports

- Color scheme:
  - Primary: Blue gradient (#2563eb to #7c3aed)
  - Background: slate-50
  - Sidebar: slate-900 (dark)
  - Text: slate-800
  - Accent colors per category (blue, amber, cyan, etc.)

## Git Workflow

Current branch: `Automatizarlo`

**Modified files** (per git status):
- LICENSE, HTML files, CSS files

When committing changes related to calculators, content pages, or UI components, ensure all related files are included (HTML, component partials, and JS if applicable).

## Important Patterns

### Mobile Responsiveness
- Sidebar: Fixed on mobile, visible on desktop
- Mobile overlay: `mobile-overlay` div with blur backdrop
- Breakpoint: `md:` prefix for desktop styles

### Link Path Updates
When a component loads, `updateSidebarLinks()` prepends `basePath` to all relative links in the sidebar so navigation works from subdirectories.

### Dropdown State Management
All dropdowns in sidebar start with `rotate-180` on chevron icon to indicate they're initially expanded. `toggleDropdown()` toggles `hidden` class and `rotate-180` on icon.

### Category Filtering
Home page has filter buttons that show/hide cards based on `data-category` attribute using vanilla JS in `initializeFilters()`.

## Content Guidelines

- All content is in Spanish
- Educational content targets mechanical engineering students and professionals
- Topics include: tribology, maintenance (preventivo, predictivo, correctivo, modificativo), machine elements (bearings, belts, pulleys, shafts), hydraulics, pneumatics, mechanical design, FMEA
- Use professional technical language while remaining accessible
