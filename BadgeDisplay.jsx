import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
    transition: { type: 'spring', stiffness: 400 }
  }
}

export default function BadgeDisplay({ badges = [] }){
  const all = ['Science Star','Math Master','GK Guru','Health Hero']
  
  return (
    <motion.div 
      className="card-neon p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3 
        className="font-semibold text-lg text-gradient-animate flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        🏅 Achievement Badges
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ⭐
        </motion.span>
      </motion.h3>

      <motion.div 
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {all.map((b, idx) => {
          const got = badges.includes(b)
          return (
            <motion.div
              key={b}
              variants={badgeVariants}
              whileHover={got ? "hover" : {}}
              className={`p-4 rounded-lg font-semibold text-center cursor-pointer relative overflow-hidden group ${
                got 
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-black shadow-lg shadow-emerald-500/30' 
                  : 'bg-white/5 text-slate-300 border border-white/10'
              }`}
            >
              {/* Shine effect for unlocked badges */}
              {got && (
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, white, transparent)'
                  }}
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              <motion.div
                animate={got ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {got ? '🏅' : '🔒'} {b}
              </motion.div>

              {/* Pulse effect for unlocked badges */}
              {got && (
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-white"
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Stats section */}
      <motion.div 
        className="mt-6 pt-4 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-sm text-slate-300">
          Badges Earned: <span className="text-emerald-400 font-bold text-lg">{badges.length}</span> / {all.length}
        </div>
        
        <motion.div 
          className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${(badges.length / all.length) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
