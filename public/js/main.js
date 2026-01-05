
document.addEventListener('DOMContentLoaded', () => {
    const basePath = window.appBasePath || '';



    // Initialize logic
    highlightActiveLink();
    // updateSidebarLinks(basePath); // Links are now handled by EJS routes

    // Initialize Filters
    initializeFilters();


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
window.calculateTemp = function () {
    const val = parseFloat(document.getElementById('temp-input').value);
    const unit = document.getElementById('temp-unit').value;
    const resultDiv = document.getElementById('temp-result');

    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    let c, f, k, re, ra;

    if (unit === 'c') {
        c = val;
        f = (val * 9 / 5) + 32;
        k = val + 273.15;
        re = val * 0.8;
        ra = (val + 273.15) * 1.8;
    } else if (unit === 'f') {
        c = (val - 32) * 5 / 9;
        f = val;
        k = (val - 32) * 5 / 9 + 273.15;
        re = (val - 32) * 4 / 9;
        ra = val + 459.67;
    } else if (unit === 'k') {
        c = val - 273.15;
        f = (val - 273.15) * 9 / 5 + 32;
        k = val;
        re = (val - 273.15) * 0.8;
        ra = val * 1.8;
    } else if (unit === 're') {
        c = val * 1.25;
        f = (val * 2.25) + 32;
        k = (val * 1.25) + 273.15;
        re = val;
        ra = (val * 2.25) + 491.67;
    } else if (unit === 'ra') {
        c = (val - 491.67) * 5 / 9;
        f = val - 459.67;
        k = val * 5 / 9;
        re = (val - 491.67) * 4 / 9;
        ra = val;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Celsius', c.toFixed(2) + ' °C')}
        ${formatResultItem('Fahrenheit', f.toFixed(2) + ' °F')}
        ${formatResultItem('Kelvin', k.toFixed(2) + ' K')}
        ${formatResultItem('Réaumur', re.toFixed(2) + ' °R')}
        ${formatResultItem('Rankine', ra.toFixed(2) + ' °Ra')}
    `;
    resultDiv.classList.remove('hidden');
};

// Longitud
window.calculateLength = function () {
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
    switch (unit) {
        case 'm': m = val; break;
        case 'cm': m = val / 100; break;
        case 'km': m = val * 1000; break;
        case 'pulg': m = val * 0.0254; break;
        case 'ft': m = val * 0.3048; break;
        case 'yd': m = val * 0.9144; break;
        case 'mi': m = val * 1609.344; break;
        case 'um': m = val / 1000000; break;
        case 'nm': m = val / 1000000000; break;
        case 'ang': m = val / 10000000000; break;
        case 'nmi': m = val * 1852; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Metros', m.toFixed(4) + ' m')}
        ${formatResultItem('Centímetros', (m * 100).toFixed(2) + ' cm')}
        ${formatResultItem('Kilómetros', (m / 1000).toFixed(6) + ' km')}
        ${formatResultItem('Pulgadas', (m / 0.0254).toFixed(2) + ' pulg')}
        ${formatResultItem('Pies', (m / 0.3048).toFixed(2) + ' ft')}
        ${formatResultItem('Yardas', (m / 0.9144).toFixed(2) + ' yd')}
        ${formatResultItem('Millas', (m / 1609.344).toFixed(6) + ' mi')}
        ${formatResultItem('Micrómetros', (m * 1000000).toExponential(2) + ' µm')}
        ${formatResultItem('Nanómetros', (m * 1000000000).toExponential(2) + ' nm')}
        ${formatResultItem('Angstroms', (m * 10000000000).toExponential(2) + ' Å')}
        ${formatResultItem('Millas Náuticas', (m / 1852).toFixed(6) + ' nmi')}
    `;
    resultDiv.classList.remove('hidden');
};

// Área
window.calculateArea = function () {
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
    switch (unit) {
        case 'm2': m2 = val; break;
        case 'km2': m2 = val * 1000000; break;
        case 'cm2': m2 = val / 10000; break;
        case 'in2': m2 = val * 0.00064516; break;
        case 'ft2': m2 = val * 0.09290304; break;
        case 'yd2': m2 = val * 0.83612736; break;
        case 'mi2': m2 = val * 2589988.110336; break;
        case 'ac': m2 = val * 4046.8564224; break;
        case 'ha': m2 = val * 10000; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Metros²', m2.toFixed(4) + ' m²')}
        ${formatResultItem('Kilómetros²', (m2 / 1000000).toFixed(6) + ' km²')}
        ${formatResultItem('Centímetros²', (m2 * 10000).toFixed(2) + ' cm²')}
        ${formatResultItem('Pulgadas²', (m2 / 0.00064516).toFixed(2) + ' in²')}
        ${formatResultItem('Pies²', (m2 / 0.09290304).toFixed(2) + ' ft²')}
        ${formatResultItem('Yardas²', (m2 / 0.83612736).toFixed(2) + ' yd²')}
        ${formatResultItem('Millas²', (m2 / 2589988.110336).toFixed(6) + ' mi²')}
        ${formatResultItem('Acres', (m2 / 4046.8564224).toFixed(6) + ' ac')}
        ${formatResultItem('Hectáreas', (m2 / 10000).toFixed(6) + ' ha')}
    `;
    resultDiv.classList.remove('hidden');
};

// Volumen
window.calculateVolume = function () {
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
    switch (unit) {
        case 'm3': m3 = val; break;
        case 'l': m3 = val / 1000; break;
        case 'in3': m3 = val * 0.000016387064; break;
        case 'ft3': m3 = val * 0.028316846592; break;
        case 'gal_us': m3 = val * 0.003785411784; break;
        case 'gal_imp': m3 = val * 0.00454609; break;
        case 'cm3': m3 = val / 1000000; break;
        case 'ml': m3 = val / 1000000; break;
        case 'yd3': m3 = val * 0.764554857984; break;
        case 'oz': m3 = val * 0.0000295735295625; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Metros³', m3.toFixed(6) + ' m³')}
        ${formatResultItem('Litros', (m3 * 1000).toFixed(4) + ' L')}
        ${formatResultItem('Pulgadas³', (m3 / 0.000016387064).toFixed(4) + ' in³')}
        ${formatResultItem('Pies³', (m3 / 0.028316846592).toFixed(4) + ' ft³')}
        ${formatResultItem('Galones US', (m3 / 0.003785411784).toFixed(4) + ' US gal')}
        ${formatResultItem('Galones Imp.', (m3 / 0.00454609).toFixed(4) + ' imp gal')}
        ${formatResultItem('Centím.³', (m3 * 1000000).toFixed(2) + ' cm³')}
        ${formatResultItem('Mililitros', (m3 * 1000000).toFixed(2) + ' ml')}
        ${formatResultItem('Yardas³', (m3 / 0.764554857984).toFixed(4) + ' yd³')}
        ${formatResultItem('Onzas', (m3 / 0.0000295735295625).toFixed(4) + ' oz')}
    `;
    resultDiv.classList.remove('hidden');
};

// Peso
window.calculateWeight = function () {
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
    switch (unit) {
        case 'kg': kg = val; break;
        case 'lb': kg = val * 0.45359237; break;
        case 'oz': kg = val * 0.028349523125; break;
        case 'uk_ton': kg = val * 1016.0469088; break;
        case 'us_ton': kg = val * 907.18474; break;
        case 'ton': kg = val * 1000; break;
        case 'g': kg = val / 1000; break;
        case 'mg': kg = val / 1000000; break;
        case 'ng': kg = val / 1000000000000; break;
        case 'pg': kg = val / 1000000000000000; break;
        case 'ug': kg = val / 1000000000; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Kilogramos', kg.toFixed(4) + ' kg')}
        ${formatResultItem('Libras', (kg / 0.45359237).toFixed(4) + ' lbs')}
        ${formatResultItem('Onzas', (kg / 0.028349523125).toFixed(4) + ' oz')}
        ${formatResultItem('Ton. UK', (kg / 1016.0469088).toFixed(6) + ' uk ton')}
        ${formatResultItem('Ton. US', (kg / 907.18474).toFixed(6) + ' us ton')}
        ${formatResultItem('Ton. Métricas', (kg / 1000).toFixed(6) + ' ton')}
        ${formatResultItem('Gramos', (kg * 1000).toFixed(2) + ' g')}
        ${formatResultItem('Miligramos', (kg * 1000000).toFixed(2) + ' mg')}
        ${formatResultItem('Nanogramos', (kg * 1000000000000).toExponential(2) + ' ng')}
        ${formatResultItem('Picogramos', (kg * 1000000000000000).toExponential(2) + ' pg')}
        ${formatResultItem('Microgramos', (kg * 1000000000).toExponential(2) + ' µg')}
    `;
    resultDiv.classList.remove('hidden');
};

// Velocidad
window.calculateSpeed = function () {
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
    switch (unit) {
        case 'ms': ms = val; break;
        case 'kmh': ms = val / 3.6; break;
        case 'ft_min': ms = val * 0.00508; break;
        case 'ft_s': ms = val * 0.3048; break;
        case 'mph': ms = val * 0.44704; break;
        case 'kn': ms = val * 0.514444444; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('m/s', ms.toFixed(2))}
        ${formatResultItem('km/h', (ms * 3.6).toFixed(2))}
        ${formatResultItem('ft/min', (ms / 0.00508).toFixed(2))}
        ${formatResultItem('ft/s', (ms / 0.3048).toFixed(2))}
        ${formatResultItem('mph', (ms / 0.44704).toFixed(2))}
        ${formatResultItem('Nudos', (ms / 0.514444444).toFixed(2) + ' kt')}
    `;
    resultDiv.classList.remove('hidden');
};

// Presión
window.calculatePressure = function () {
    const val = parseFloat(document.getElementById('pressure-input').value);
    const unit = document.getElementById('pressure-unit').value;
    const resultDiv = document.getElementById('pressure-result');

    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to Pascal (Pa)
    let pa;
    switch (unit) {
        case 'pa': pa = val; break;
        case 'bar': pa = val * 100000; break;
        case 'mmh2o': pa = val * 9.80665; break;
        case 'kgcm2': pa = val * 98066.5; break;
        case 'psi': pa = val * 6894.76; break;
        case 'psf': pa = val * 47.88025898; break;
        case 'inh2o': pa = val * 249.08891; break;
        case 'fth2o': pa = val * 2989.06692; break;
        case 'atm': pa = val * 101325; break;
        case 'kgfm2': pa = val * 9.80665; break;
        case 'kgfcm2': pa = val * 98066.5; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('Pascales', pa.toFixed(2) + ' Pa')}
        ${formatResultItem('Bar', (pa / 100000).toFixed(6) + ' bar')}
        ${formatResultItem('mm H2O', (pa / 9.80665).toFixed(2) + ' mm H2O')}
        ${formatResultItem('kg/cm²', (pa / 98066.5).toFixed(6) + ' kg/cm²')}
        ${formatResultItem('PSI', (pa / 6894.76).toFixed(4) + ' psi')}
        ${formatResultItem('PSF', (pa / 47.88025898).toFixed(4) + ' psf')}
        ${formatResultItem('Inches H2O', (pa / 249.08891).toFixed(4) + ' in H2O')}
        ${formatResultItem('ft H2O', (pa / 2989.06692).toFixed(4) + ' ft H2O')}
        ${formatResultItem('Atmósferas', (pa / 101325).toFixed(6) + ' atm')}
        ${formatResultItem('kgf/m²', (pa / 9.80665).toFixed(2) + ' kgf/m²')}
        ${formatResultItem('kgf/cm²', (pa / 98066.5).toFixed(6) + ' kgf/cm²')}
    `;
    resultDiv.classList.remove('hidden');
};

// Flujo
window.calculateFlow = function () {
    const val = parseFloat(document.getElementById('flow-input').value);
    const unit = document.getElementById('flow-unit').value;
    const resultDiv = document.getElementById('flow-result');

    if (isNaN(val)) {
        resultDiv.innerHTML = '<span class="text-red-400 text-xs col-span-2 text-center">Ingrese un valor válido</span>';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Convert to Litros por minuto (L/min)
    let lmin;
    switch (unit) {
        case 'm3s': lmin = val * 60000; break;
        case 'm3m': lmin = val * 1000; break;
        case 'm3h': lmin = val * 16.6666667; break;
        case 'ls': lmin = val * 60; break;
        case 'lmin': lmin = val; break;
        case 'lh': lmin = val / 60; break;
        case 'gpm': lmin = val * 3.78541178; break;
        case 'gpd': lmin = val * 0.002628758; break;
        case 'cfm': lmin = val * 28.3168466; break;
        case 'gpm_imp': lmin = val * 4.54609; break;
        case 'gpd_imp': lmin = val * 0.0031570069; break;
    }

    resultDiv.innerHTML = `
        ${formatResultItem('m³/s', (lmin / 60000).toFixed(6))}
        ${formatResultItem('m³/min', (lmin / 1000).toFixed(4))}
        ${formatResultItem('m³/h', (lmin / 16.6666667).toFixed(4))}
        ${formatResultItem('L/s', (lmin / 60).toFixed(4))}
        ${formatResultItem('L/min', lmin.toFixed(4))}
        ${formatResultItem('L/h', (lmin * 60).toFixed(2))}
        ${formatResultItem('GPM (US)', (lmin / 3.78541178).toFixed(4))}
        ${formatResultItem('GPD (US)', (lmin / 0.002628758).toFixed(2))}
        ${formatResultItem('CFM', (lmin / 28.3168466).toFixed(4))}
        ${formatResultItem('GPM (Imp)', (lmin / 4.54609).toFixed(4))}
        ${formatResultItem('GPD (Imp)', (lmin / 0.0031570069).toFixed(2))}
    `;
    resultDiv.classList.remove('hidden');
};
