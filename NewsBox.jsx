import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchNews } from '/mockApi'

const newsItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  }),
  hover: {
    scale: 1.02,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    x: 5
  }
}

const badgeVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
}

export default function NewsBox() {
  const [news, setNews] = useState([])

  useEffect(() => {
    let mounted = true
    fetchNews().then((n) => mounted && setNews(n))
    const iv = setInterval(() => fetchNews().then((n) => mounted && setNews(n)), 8000)
    return () => { mounted = false; clearInterval(iv) }
  }, [])

  return (
    <motion.div 
      className="card-neon p-5 rounded-xl h-64 md:h-80 lg:h-[500px] flex flex-col bg-slate-900/50 backdrop-blur overflow-hidden relative border border-green-400/40 shadow-[0_0_10px_#22c55e]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ boxShadow: '0 0 20px #22c55e' }}
    >
      
      {/* 📰 Live News Badge — fixed position above title */}
      <motion.div 
        className="flex justify-center mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 text-black font-semibold px-4 py-1 rounded-full text-sm shadow-lg flex items-center gap-2"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            boxShadow: [
              '0 0 10px rgba(34, 197, 94, 0.3)',
              '0 0 20px rgba(34, 197, 94, 0.6)',
              '0 0 10px rgba(34, 197, 94, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span 
            className="h-2 w-2 rounded-full bg-red-600"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          📰 Live News
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.h3 
        className="font-semibold text-lg text-white text-center mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <b><u>Gamified India 🇮🇳</u></b>
      </motion.h3>

      {/* Divider Line */}
      <motion.div 
        className="border border-green-400/40 shadow-[0_0_10px_#22c55e] mb-3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ originX: 0 }}
      />

      {/* News Scroller */}
      <motion.div 
        className="overflow-hidden flex-1 relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute flex flex-col animate-scroll-up group-hover:paused w-full">
          {[...news, ...news].map((n, i) => (
            <motion.div 
              key={i} 
              className="p-3 rounded-md bg-white/10 text-white mb-3 transition-all cursor-pointer"
              custom={i}
              variants={newsItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div 
                className="font-medium text-cyan-300"
                animate={{ color: ['#06b6d4', '#00ffd5', '#06b6d4'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {n.headline}
              </motion.div>
              <motion.div 
                className="text-xs text-slate-300 mt-1"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                {n.summary}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fading edges for smooth scroll effect */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-slate-900/80 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
      </motion.div>
    </motion.div>
  )
}
