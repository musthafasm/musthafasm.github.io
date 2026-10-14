// Theme toggle
const root = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
root.classList.toggle('dark', saved ? saved === 'dark' : prefersDark)

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

// Mobile menu
const menuToggle = document.getElementById('menu-toggle')
const navLinks = document.getElementById('nav-links')

function setMenu(open) {
  navLinks.classList.toggle('hidden', !open)
  navLinks.classList.toggle('flex', open)
  menuToggle.setAttribute('aria-expanded', String(open))
}

menuToggle?.addEventListener('click', () => {
  setMenu(navLinks.classList.contains('hidden'))
})

// Close the menu after tapping a link
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false))
})
