import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const iconVariants = {
  idle: { rotate: 0, y: 0 },
  hover: { 
    rotate: 12,
    y: -8,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
}

const cardVariants = {
  idle: {
    boxShadow: '0 0 18px rgba(0, 255, 213, 0.12), 0 0 48px rgba(0, 183, 255, 0.06)'
  },
  hover: {
    boxShadow: '0 0 30px rgba(0, 255, 213, 0.3), 0 0 60px rgba(0, 183, 255, 0.15)'
  }
}

const textVariants = {
  idle: { opacity: 0.7 },
  hover: { 
    opacity: 1,
    x: 5,
    transition: { duration: 0.2 }
  }
}

export default function Card({ category, isHovered }){
  return (
    <Link to={`/section/${category.id}`}>
      <motion.div
        layout
        initial="idle"
        whileHover="hover"
        variants={cardVariants}
        className={`card-neon rounded-xl p-6 flex items-center gap-4 cursor-pointer relative overflow-hidden group h-36`}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 -z-10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,126,179,0.12), rgba(101,214,255,0.10))`
          }}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div 
          className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl relative`}
          variants={iconVariants}
          animate={isHovered ? 'hover' : 'idle'}
        >
          <motion.div
            className="text-3xl"
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              filter: isHovered ? 'drop-shadow(0 0 8px rgba(0, 255, 213, 0.6))' : 'drop-shadow(none)'
            }}
            transition={{ duration: 0.3 }}
          >
            {category.icon}
          </motion.div>
        </motion.div>

        <motion.div className="flex-1">
          <motion.h4 
            className="font-semibold text-lg text-gradient-animate"
            animate={{ 
              color: isHovered ? '#00ffd5' : '#f1f5f9'
            }}
            transition={{ duration: 0.3 }}
          >
            {category.title}
          </motion.h4>
          <motion.p 
            className="text-xs text-slate-300 mt-1"
            variants={textVariants}
            animate={isHovered ? 'hover' : 'idle'}
          >
            Explore {category.title} challenges & quizzes
          </motion.p>
        </motion.div>

        {/* Animated arrow indicator */}
        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-cyan-400 text-xl opacity-0 group-hover:opacity-100"
        >
          →
        </motion.div>
      </motion.div>
    </Link>
  )
}
