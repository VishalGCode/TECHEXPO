import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react' // optional — use emoji if you prefer ☀️🌙

export default function ThemeToggle() {
  // Initialize from localStorage if present, otherwise use system preference
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    } catch (e) {
      // ignore (e.g. SSR or localStorage blocked)
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      // default (light) styles first, then dark: variants
      className="p-2 rounded-full bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-yellow-400 shadow-md hover:scale-105 transition"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
