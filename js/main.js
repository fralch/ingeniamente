
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

        // Auto-collapse Entradas dropdown after delay
        setTimeout(() => {
            const dropdown = document.getElementById('entradas-dropdown');
            const button = dropdown?.previousElementSibling;
            if (dropdown && button) {
                toggleDropdown('entradas-dropdown', button);
            }
        }, 2000);
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
