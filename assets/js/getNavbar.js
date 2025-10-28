function getNavbarHTML() {
  return `
  <header
    class="bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-red-100/30 dark:border-gray-800/70 fixed w-full z-50 shadow-sm transition-colors duration-300"
    role="navigation" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <!-- Brand / Logo -->
        <a
          class="flex items-center gap-1.5 sm:gap-2 text-xl sm:text-2xl font-extrabold text-red-600 hover:text-red-700 transition tracking-tight select-none"
          aria-label="Go to homepage">
          <span>NORGINSA</span>
        </a>
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-3 font-medium text-sm sm:text-base" aria-label="Primary navigation">
          <a href="index.html"
            class="px-2 py-1 rounded transition hover:text-red-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-red-400 text-gray-700 dark:text-gray-100">Hjem</a>
          <a href="arkiv.html"
            class="px-2 py-1 rounded transition hover:text-red-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-red-400 text-gray-700 dark:text-gray-100">Arkiv</a>
          <a href="about.html"
            class="px-2 py-1 rounded transition hover:text-red-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-red-400 text-gray-700 dark:text-gray-100">Om NORGINSA</a>
          <a href="https://wiki.etud.insa-toulouse.fr/books/1a/page/besta-ditt-forste-norginsa-ar-starter-pack"  rel="noopener"
            class="px-2 py-1 rounded transition hover:text-red-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-red-400 text-gray-700 dark:text-gray-100 flex items-center gap-1 text-sm sm:text-base">
            Wiki
          </a>
          <a href="kontakt.html" rel="noopener"
            class="px-2 py-1 rounded transition hover:text-red-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-red-400 text-gray-700 dark:text-gray-100 flex items-center gap-1 text-sm sm:text-base">
            Kontakt Oss
          </a>
          <a href="https://utdanning.no/tema/utdanning_i_utlandet/ingeniorstudier_i_toulouse"  rel="noopener"
            class="ml-2 bg-gradient-to-r from-red-600 to-rose-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg shadow hover:from-red-700 hover:to-rose-600 font-semibold transition duration-200 flex items-center gap-1 sm:gap-2 focus:outline-none focus:ring-2 focus:ring-red-300 text-sm sm:text-base">
            SØK HER
          </a>
          <button id="themeToggleNav"
            class="ml-2 p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 transition"
            title="Toggle Theme" aria-label="Toggle Theme" type="button">
            <svg id="nav-sun" class="w-4 h-4 sm:w-5 sm:h-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
            </svg>
            <svg id="nav-moon" class="w-4 h-4 sm:w-5 sm:h-5 block" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3c.03 0 .06.01.09.01a7 7 0 0010.7 9.78z" />
            </svg>
          </button>
        </nav>
        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center">
          <button id="sidebarOpenBtn" aria-label="Open Menu"
            class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Sidebar Overlay -->
    <div id="sidebarOverlay"
      class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity md:hidden">
    </div>

    <!-- Mobile Sidebar -->
    <nav id="mobileSidebar" class="fixed top-0 left-0 h-full w-[90vw] max-w-xs min-w-[240px] bg-white/60 dark:bg-gray-900/60 border-r border-red-100/30 dark:border-gray-800/70 shadow-lg z-50
    transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col md:hidden
    backdrop-blur-md" aria-label="Mobile sidebar navigation" tabindex="-1" style="padding:0.75rem 0.9rem;">
      <div class="flex items-center justify-between mb-3">
        <span class="text-lg sm:text-xl font-bold text-red-600">NORGINSA</span>
        <button id="sidebarCloseBtn" aria-label="Close Menu"
          class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
          <svg class="w-5 h-5 text-gray-900 dark:text-gray-200" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex flex-col gap-1.5 sm:gap-2 py-2">
        <a href="index.html" class="block px-3 py-1.5 rounded hover:bg-red-100 dark:hover:bg-gray-700 text-sm">Home</a>
        <a href="arkiv.html"
          class="block px-3 py-1.5 rounded hover:bg-red-100 dark:hover:bg-gray-700 text-sm">Templates</a>
        <a href="about.html"
          class="block px-3 py-1.5 rounded hover:bg-red-100 dark:hover:bg-gray-700 text-sm">About</a>
        <a href="https://utdanning.no/tema/utdanning_i_utlandet/ingeniorstudier_i_toulouse"  rel="noopener"
          class="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-red-100 dark:hover:bg-gray-700 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            aria-hidden="true">
            <path
              d="M12 2C6.5 2 2 6.485 2 12.058c0 4.448 2.87 8.222 6.839 9.553.5.091.683-.216.683-.48 0-.236-.009-.863-.013-1.694-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.627.069-.614.069-.614 1 .071 1.527 1.026 1.527 1.026.892 1.527 2.341 1.086 2.91.832.09-.647.349-1.086.636-1.336-2.22-.255-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.687-.104-.254-.447-1.275.098-2.656 0 0 .841-.27 2.75 1.025A9.495 9.495 0 0112 6.875c.851.004 1.707.115 2.507.338 1.908-1.296 2.748-1.025 2.748-1.025.546 1.381.203 2.402.1 2.656.64.699 1.028 1.594 1.028 2.687 0 3.847-2.338 4.694-4.566 4.945.356.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.75 0 .267.18.575.688.478C19.13 20.276 22 16.504 22 12.058 22 6.485 17.523 2 12 2z" />
          </svg>
          GitHub
        </a>
        <a href="https://utdanning.no/tema/utdanning_i_utlandet/ingeniorstudier_i_toulouse"  rel="noopener"
          class="block bg-gradient-to-r from-red-600 to-rose-500 text-white px-4 py-1.5 rounded-lg shadow hover:from-red-700 hover:to-rose-600 font-semibold transition duration-200 mt-2 text-sm">
          <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          SØK HER
        </a>
        <button id="sidebarThemeToggle"
          class="mt-auto mb-3 p-2 flex items-center justify-center gap-1 sm:gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 transition text-sm"
          type="button" aria-label="Toggle Theme">
          <svg id="sidebar-sun" class="w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke-width="2" />
            <path stroke-linecap="round" stroke-width="2"
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
          </svg>
          <svg id="sidebar-moon" class="w-5 h-5 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3c.03 0 .06.01.09.01a7 7 0 0010.7 9.78z" />
          </svg>
          Toggle Theme
        </button>
      </div>
    </nav>
  </header>
  `}