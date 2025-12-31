
document.addEventListener('DOMContentLoaded', () => {
    const basePath = window.appBasePath || '';

    // Load Components
    Promise.all([
        loadComponent('sidebar-container', basePath + 'components/sidebar.html'),
        loadComponent('header-container', basePath + 'components/header.html'),
        loadComponent('footer-container', basePath + 'components/footer.html')
    ]).then(() => {
        // Initialize logic that depends on loaded components
        highlightActiveLink();
        updateSidebarLinks(basePath);
    });

    // Initialize Filters
    initializeFilters();
});

async function loadComponent(elementId, filePath) {
    const container = document.getElementById(elementId);
    if (!container) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
        container.innerHTML = `<div class="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
            <strong>Error loading ${filePath}</strong><br>
            Please run this project on a local server.
        </div>`;
    }
}

// Toggle Sidebar for Mobile
window.toggleSidebar = function () {
    const sidebarContainer = document.getElementById('sidebar-container');
    const overlay = document.getElementById('mobile-overlay');

    if (sidebarContainer) {
        sidebarContainer.classList.toggle('-translate-x-full');

        if (overlay) {
            if (overlay.classList.contains('hidden')) {
                overlay.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }
    }
};

// Set Active Nav Item
window.setActive = function (element) {
    // Remove active state from all items
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('active');
        // Reset specific styling if any, dependent on CSS
        // In our HTML we rely on 'active' class and CSS or specific classes
        // The HTML has: nav-item active group ...
        // We might want to toggle the specific colors if they are hardcoded classes

        // Reset colors to default
        const icon = el.querySelector('i');
        if (icon) {
            icon.classList.remove('text-blue-400');
            icon.classList.add('text-slate-500'); // default
        }
    });

    // Add active state
    element.classList.add('active');

    // Set active colors
    const icon = element.querySelector('i');
    if (icon) {
        icon.classList.remove('text-slate-500');
        icon.classList.add('text-blue-400');
    }
};

function highlightActiveLink() {
    // Optional: Auto-highlight based on URL or default to first
    // For now, the sidebar.html has "Inicio" set as active by default.
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update Active Button State
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
                btn.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-50');
            });
            button.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-50');
            button.classList.add('bg-blue-600', 'text-white', 'shadow-lg');

            const category = button.textContent.trim();

            cards.forEach(card => {
                // Reset animation
                card.classList.remove('fade-in');
                void card.offsetWidth; // trigger reflow
                card.classList.add('fade-in');

                if (category === 'Todos' || card.dataset.category === category) {
                    card.style.display = 'flex'; // Changed to flex because cards are flex-col
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Toggle Dropdown
window.toggleDropdown = function (id, button) {
    const dropdown = document.getElementById(id);
    const arrow = button.querySelector('.fa-chevron-down');

    if (dropdown) {
        dropdown.classList.toggle('hidden');
        if (arrow) {
            arrow.classList.toggle('rotate-180');
        }
    }
};

// Update Sidebar Links based on basePath
function updateSidebarLinks(basePath) {
    if (!basePath) return;

    const sidebar = document.getElementById('sidebar-container');
    if (!sidebar) return;

    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Only update relative paths that are not anchors or absolute URLs
        if (href && href !== '#' && !href.startsWith('http') && !href.startsWith('//') && !href.startsWith('#')) {
            link.setAttribute('href', basePath + href);
        }
    });
}

// Calculator Functions

// Helper to format results nicely
function formatResultItem(label, value) {
    return `
    <div class="bg-slate-800/50 p-2 rounded border border-white/5 flex flex-col items-center text-center">
        <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-1">${label}</div>
        <div class="text-xs font-semibold text-white break-all">${value}</div>
    </div>`;
}

// Temperatura
window.calculateTemp = function() {
    const val = parseFloat(document.getElementById('temp-input').value);
    const unit = document.getElementById('temp-unit').value;
    const resultDiv = document.getElementById('temp-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    let c, f, k, r;

    if (unit === 'c') {
        c = val;
        f = (val * 9/5) + 32;
        k = val + 273.15;
        r = (val + 273.15) * 9/5;
    } else if (unit === 'f') {
        c = (val - 32) * 5/9;
        f = val;
        k = (val - 32) * 5/9 + 273.15;
        r = val + 459.67;
    } else if (unit === 'k') {
        c = val - 273.15;
        f = (val - 273.15) * 9/5 + 32;
        k = val;
        r = val * 1.8;
    } else if (unit === 'r') {
        c = (val - 491.67) * 5/9;
        f = val - 459.67;
        k = val * 5/9;
        r = val;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Celsius', c.toFixed(2) + ' °C')}
        ${formatResultItem('Fahrenheit', f.toFixed(2) + ' °F')}
        ${formatResultItem('Kelvin', k.toFixed(2) + ' K')}
        ${formatResultItem('Rankine', r.toFixed(2) + ' °R')}
    `;
    resultDiv.classList.remove('hidden');
};

// Longitud
window.calculateLength = function() {
    const val = parseFloat(document.getElementById('length-input').value);
    const unit = document.getElementById('length-unit').value;
    const resultDiv = document.getElementById('length-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to meters first
    let m;
    switch(unit) {
        case 'm': m = val; break;
        case 'cm': m = val / 100; break;
        case 'mm': m = val / 1000; break;
        case 'km': m = val * 1000; break;
        case 'in': m = val * 0.0254; break;
        case 'ft': m = val * 0.3048; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Metros', m.toFixed(4) + ' m')}
        ${formatResultItem('Centímetros', (m * 100).toFixed(2) + ' cm')}
        ${formatResultItem('Milímetros', (m * 1000).toFixed(2) + ' mm')}
        ${formatResultItem('Kilómetros', (m / 1000).toFixed(6) + ' km')}
        ${formatResultItem('Pulgadas', (m / 0.0254).toFixed(2) + ' in')}
        ${formatResultItem('Pies', (m / 0.3048).toFixed(2) + ' ft')}
    `;
    resultDiv.classList.remove('hidden');
};

// Área
window.calculateArea = function() {
    const val = parseFloat(document.getElementById('area-input').value);
    const unit = document.getElementById('area-unit').value;
    const resultDiv = document.getElementById('area-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to m2
    let m2;
    switch(unit) {
        case 'm2': m2 = val; break;
        case 'cm2': m2 = val / 10000; break;
        case 'ft2': m2 = val * 0.092903; break;
        case 'ha': m2 = val * 10000; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Metros²', m2.toFixed(4) + ' m²')}
        ${formatResultItem('Centím.²', (m2 * 10000).toFixed(2) + ' cm²')}
        ${formatResultItem('Pies²', (m2 / 0.092903).toFixed(2) + ' ft²')}
        ${formatResultItem('Hectáreas', (m2 / 10000).toFixed(6) + ' ha')}
    `;
    resultDiv.classList.remove('hidden');
};

// Volumen
window.calculateVolume = function() {
    const val = parseFloat(document.getElementById('volume-input').value);
    const unit = document.getElementById('volume-unit').value;
    const resultDiv = document.getElementById('volume-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to m3
    let m3;
    switch(unit) {
        case 'm3': m3 = val; break;
        case 'l': m3 = val / 1000; break;
        case 'gal': m3 = val * 0.00378541; break;
        case 'ml': m3 = val / 1000000; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Metros³', m3.toFixed(6) + ' m³')}
        ${formatResultItem('Litros', (m3 * 1000).toFixed(3) + ' L')}
        ${formatResultItem('Galones', (m3 / 0.00378541).toFixed(3) + ' gal')}
        ${formatResultItem('Mililitros', (m3 * 1000000).toFixed(2) + ' mL')}
    `;
    resultDiv.classList.remove('hidden');
};

// Peso
window.calculateWeight = function() {
    const val = parseFloat(document.getElementById('weight-input').value);
    const unit = document.getElementById('weight-unit').value;
    const resultDiv = document.getElementById('weight-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to kg
    let kg;
    switch(unit) {
        case 'kg': kg = val; break;
        case 'g': kg = val / 1000; break;
        case 'lb': kg = val * 0.453592; break;
        case 'oz': kg = val * 0.0283495; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Kilogramos', kg.toFixed(4) + ' kg')}
        ${formatResultItem('Gramos', (kg * 1000).toFixed(2) + ' g')}
        ${formatResultItem('Libras', (kg / 0.453592).toFixed(3) + ' lb')}
        ${formatResultItem('Onzas', (kg / 0.0283495).toFixed(2) + ' oz')}
    `;
    resultDiv.classList.remove('hidden');
};

// Velocidad
window.calculateSpeed = function() {
    const val = parseFloat(document.getElementById('speed-input').value);
    const unit = document.getElementById('speed-unit').value;
    const resultDiv = document.getElementById('speed-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to m/s
    let ms;
    switch(unit) {
        case 'ms': ms = val; break;
        case 'kmh': ms = val / 3.6; break;
        case 'mph': ms = val * 0.44704; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('m/s', ms.toFixed(2))}
        ${formatResultItem('km/h', (ms * 3.6).toFixed(2))}
        ${formatResultItem('mph', (ms / 0.44704).toFixed(2))}
    `;
    resultDiv.classList.remove('hidden');
};

// Presión
window.calculatePressure = function() {
    const val = parseFloat(document.getElementById('pressure-input').value);
    const unit = document.getElementById('pressure-unit').value;
    const resultDiv = document.getElementById('pressure-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to bar
    let bar;
    switch(unit) {
        case 'bar': bar = val; break;
        case 'psi': bar = val * 0.0689476; break;
        case 'pa': bar = val / 100000; break;
        case 'atm': bar = val * 1.01325; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Bar', bar.toFixed(4))}
        ${formatResultItem('PSI', (bar / 0.0689476).toFixed(2))}
        ${formatResultItem('Pascal', (bar * 100000).toFixed(0))}
        ${formatResultItem('Atm', (bar / 1.01325).toFixed(4))}
    `;
    resultDiv.classList.remove('hidden');
};

// Flujo
window.calculateFlow = function() {
    const val = parseFloat(document.getElementById('flow-input').value);
    const unit = document.getElementById('flow-unit').value;
    const resultDiv = document.getElementById('flow-result');
    
    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to L/min
    let lmin;
    switch(unit) {
        case 'lmin': lmin = val; break;
        case 'gpm': lmin = val * 3.78541; break;
        case 'm3h': lmin = val * 16.6667; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('L/min', lmin.toFixed(2))}
        ${formatResultItem('GPM', (lmin / 3.78541).toFixed(2))}
        ${formatResultItem('m³/h', (lmin / 16.6667).toFixed(4))}
    `;
    resultDiv.classList.remove('hidden');
};
