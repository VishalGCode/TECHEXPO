import React from 'react'
import { motion } from 'framer-motion'

const linkVariants = {
  idle: { color: '#cbd5e1' },
  hover: {
    color: '#00ffd5',
    x: 5,
    transition: { duration: 0.2 }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function Footer(){
  return (
    <motion.footer 
      className="mt-8 py-6 border-t border-white/6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-slate-400" variants={itemVariants}>
        <motion.div
          animate={{ 
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © {new Date().getFullYear()} 
          <motion.span 
            className="text-gradient-animate font-semibold ml-1"
          >
            Gamingfied Learning
          </motion.span>
        </motion.div>
        <motion.div className="space-x-4 flex" variants={containerVariants}>
          {['Contact', 'About', 'Privacy'].map((link) => (
            <motion.a 
              key={link}
              className="hover:underline cursor-pointer"
              href="#"
              variants={linkVariants}
              initial="idle"
              whileHover="hover"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
