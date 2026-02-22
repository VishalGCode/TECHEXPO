import React, { useState } from 'react'
import NewsBox from '/NewsBox'
import Card from '/Card'
import { motion } from 'framer-motion'

const categories = [
  { id: 'kids', title: 'Kids', color: 'from-pink-500 to-purple-600', icon: '🧒' },
  { id: 'women', title: 'Women', color: 'from-rose-500 to-orange-400', icon: '👩' },
  { id: 'men', title: 'Men', color: 'from-blue-500 to-cyan-400', icon: '🧑' },
  { id: 'health', title: 'Health', color: 'from-green-400 to-teal-500', icon: '💚' },
  { id: 'resources', title: 'Resources', color: 'from-yellow-400 to-amber-500', icon: '📚' }
  ,{ id: 'faqs', title: 'FAQs', color: 'from-indigo-500 to-violet-500', icon: '❓' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="max-w-7xl mx-auto">
      <motion.header 
        className="mb-6 text-center"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-futuristic font-bold text-gradient-animate"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          🏛️ "सबका साथ, सबका विकास" 🏛️
        </motion.h2>
        <motion.p 
          className="text-sm text-slate-300 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A Platform for fun, challenge-based learning.
        </motion.p>
      </motion.header>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.aside className="md:col-span-3 h-full" variants={itemVariants}>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="h-full"
          >
            <NewsBox />
          </motion.div>
        </motion.aside>

        <motion.section className="md:col-span-6 h-full flex flex-col" variants={itemVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((c, i) => (
              <motion.div 
                key={c.id} 
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredCard(c.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card category={c} index={i} isHovered={hoveredCard === c.id} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.aside className="md:col-span-3 h-full" variants={itemVariants}>
          <motion.div
            className="card-neon p-4 rounded-xl animate-glow-pulse h-full flex flex-col justify-between"
            whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(0, 255, 213, 0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div>
              <motion.h3 
                className="font-semibold text-lg text-gradient-animate"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆 Leaderboard
              </motion.h3>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                {['1. PlayerOne — 4200 pts', '2. PixelHero — 3850 pts', '3. QuizQueen — 3620 pts', '4. CodeMaster — 3480 pts', '5. LearnLion — 3250 pts', '6. SkillSmith — 3100 pts', '7. VictoryVibe — 2950 pts', '8. BrainBoss — 2800 pts'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 5, color: '#00ffd5' }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ol>
            </div>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-medium text-cyan-300">📅 Upcoming Events</h4>
              <ul className="mt-2 text-sm text-slate-300 space-y-2">
                {['Weekly Challenge — Sat 6pm', 'Science Sprint — Next Tue', 'Farming Quest — Thu 4pm', 'Health Trivia Night — Fri 7pm', 'Digital Literacy Bootcamp — Mon 10am', 'Financial Literacy Workshop — Wed 3pm'].map((event, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    whileHover={{ x: 5, color: '#00ffd5' }}
                  >
                    {event}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.aside>
      </motion.div>
    </div>
  )
}
