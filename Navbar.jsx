import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: 'spring', stiffness: 300 }
  }
}

const buttonHoverVariants = {
  idle: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(0, 255, 213, 0.3)',
    transition: { type: 'spring', stiffness: 300 }
  },
  tap: { scale: 0.95 }
}

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <motion.nav 
      className="w-full py-3 px-6 bg-transparent header-glow sticky top-0 z-40"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.div 
            className="flex items-center gap-3"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center text-black font-bold text-lg"
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(0, 255, 213, 0.2)',
                  '0 0 20px rgba(0, 255, 213, 0.4)',
                  '0 0 10px rgba(0, 255, 213, 0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              G
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-sm font-semibold">Gamingfied</div>
              <div className="text-xs text-slate-400">Learning Platform</div>
            </motion.div>
          </motion.div>
        </Link>

        <motion.div 
          className="flex items-center gap-4"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          <motion.button 
            className="glow-btn text-xs px-3 py-2 rounded-md"
            variants={buttonHoverVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
          >
            HOME
          </motion.button>

          <motion.a 
            href="https://www.education.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-2 rounded-md border border-white/6 hover:border-white/20 transition-colors"
            variants={buttonHoverVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
          >
            GOV Website
          </motion.a>

          <motion.button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="text-xs px-3 py-2 rounded-md border border-white/6 hover:border-white/20 transition-colors"
            variants={buttonHoverVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              animate={{ rotate: dark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {dark ? '🌙 Dark' : '☀️ Light'}
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  )
}
