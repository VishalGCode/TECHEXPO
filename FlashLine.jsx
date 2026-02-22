import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useFlash } from './FlashContext'

// Example flash line component — shows a short flash and clears the flash state after animation.
export default function FlashLine({ text = 'Flash!' }) {
  const { setShowFlash } = useFlash()

  useEffect(() => {
    // when mounted, enable blur on background
    setShowFlash(true)
    const t = setTimeout(() => setShowFlash(false), 1400)
    return () => clearTimeout(t)
  }, [setShowFlash])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 shadow-lg"
      >
        <span className="font-bold tracking-wider">{text}</span>
      </motion.div>
    </div>
  )
}
