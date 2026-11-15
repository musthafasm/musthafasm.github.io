// Theme toggle
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch (e) {}
});

// Mobile menu
const menuToggle = document.getElementById('menu-toggle')
const navLinks = document.getElementById('nav-links')

if (menuToggle && navLinks) {
  const setMenu = (open) => {
    navLinks.classList.toggle('hidden', !open)
    navLinks.classList.toggle('flex', open)
    menuToggle.setAttribute('aria-expanded', String(open))
  }
  menuToggle.addEventListener('click', () => {
    setMenu(navLinks.classList.contains('hidden'))
  })
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false))
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false)
  })
}
