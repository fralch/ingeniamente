<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Ingeniamente.com - Ingeniería Premium' }}</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Outfit & Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Outfit', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    @stack('styles')
</head>
<body class="bg-slate-50 text-slate-800 h-screen overflow-hidden flex selection:bg-blue-500 selection:text-white">

    <!-- Sidebar Container -->
    <div id="sidebar-container" class="fixed inset-y-0 left-0 z-50 w-72 h-full transform -translate-x-full md:relative md:translate-x-0 transition-transform duration-300 shadow-2xl md:shadow-none">
        <x-sidebar />
    </div>

    <!-- Mobile Overlay -->
    <div id="mobile-overlay" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 hidden md:hidden opacity-0 transition-opacity duration-300" onclick="toggleSidebar()"></div>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col h-screen overflow-hidden relative z-0">
        <!-- Background Blobs -->
        <div class="blob -top-20 -right-20 opacity-50"></div>
        <div class="blob top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 opacity-30"></div>

        <!-- Header Container -->
        <div id="header-container" class="sticky top-0 z-40">
            <x-header />
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto px-4 py-8 md:p-8 relative z-10 scroll-smooth">
            <div class="max-w-7xl mx-auto">
                {{ $slot }}
            </div>
            
            <x-footer />
        </div>
    </main>

    <script src="{{ asset('js/main.js') }}"></script>
    @stack('scripts')
</body>
</html>