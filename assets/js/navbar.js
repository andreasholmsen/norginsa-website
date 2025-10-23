
const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebar = document.getElementById('mobileSidebar');
const themeToggleNav = document.getElementById('themeToggleNav');
const navSun = document.getElementById('nav-sun');
const navMoon = document.getElementById('nav-moon');
const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');
const sidebarSun = document.getElementById('sidebar-sun');
const sidebarMoon = document.getElementById('sidebar-moon');

// Sidebar open/close with body scroll lock
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
    sidebarOverlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('sidebar-open');
    sidebar && sidebar.focus();
}
function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');
    sidebarOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.classList.remove('sidebar-open');
}
sidebarOpenBtn && sidebarOpenBtn.addEventListener('click', openSidebar);
sidebarCloseBtn && sidebarCloseBtn.addEventListener('click', closeSidebar);
sidebarOverlay && sidebarOverlay.addEventListener('click', closeSidebar);
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

// Theme icon switching
function updateThemeIcons() {
    const isDark = root.classList.contains('dark');
    navSun && navSun.classList.toggle('hidden', !isDark);
    navMoon && navMoon.classList.toggle('hidden', isDark);
    sidebarSun && sidebarSun.classList.toggle('hidden', !isDark);
    sidebarMoon && sidebarMoon.classList.toggle('hidden', isDark);
}
function toggleTheme() {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
}
themeToggleNav && themeToggleNav.addEventListener('click', toggleTheme);
sidebarThemeToggle && sidebarThemeToggle.addEventListener('click', toggleTheme);

(function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') root.classList.add('dark');
    else if (saved === 'light') root.classList.remove('dark');
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.classList.add('dark');
    else root.classList.remove('dark');
    updateThemeIcons();
})();
