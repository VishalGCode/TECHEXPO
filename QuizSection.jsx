import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import quizzes from '/quizzes'

const questionVariants = {
  enter: { opacity: 0, y: 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const optionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
}

export default function QuizSection({ category = 'kids', onBadgeEarn = ()=>{} }){
  const data = quizzes[category] || quizzes['resources']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState(null)

  const q = data[currentIndex]

  const answer = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === q.answer
    setFeedback(correct ? 'Correct!' : 'Oops, try next time.')
    if (correct) {
      onBadgeEarn(q.badge)
    }
    // auto move after short delay
    setTimeout(() => {
      setSelected(null)
      setFeedback(null)
      setCurrentIndex((i) => (i + 1) % data.length)
    }, 1400)
  }

  return (
    <>
    <motion.div 
      className="card-neon p-6 rounded-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3 
        className="font-semibold text-lg text-gradient-animate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🎯 Interactive Quiz
      </motion.h3>
      
      <motion.div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={questionVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.div 
              className="font-medium text-lg mb-4 text-white"
              animate={{ color: ['#f1f5f9', '#00ffd5', '#f1f5f9'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {q.question}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate="visible"
        >
          {q.options.map((opt, i) => (
            <motion.button
              key={i}
              onClick={() => answer(i)}
              custom={i}
              variants={optionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(0, 255, 213, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg text-left border-2 transition-all ${
                selected === i 
                  ? selected === i && i === q.answer
                    ? 'border-emerald-400 bg-emerald-400/10'
                    : 'border-red-500 bg-red-500/10'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
              disabled={selected !== null}
            >
              <motion.span 
                animate={{ opacity: selected === i ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {opt}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {feedback && (
            <motion.div 
              className={`mt-4 p-3 rounded-lg text-center font-semibold text-sm ${
                feedback === 'Correct!' 
                  ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-200' 
                  : 'bg-red-500/20 border border-red-400 text-red-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 0.6 }}
              >
                {feedback === 'Correct!' ? '✅' : '❌'} {feedback}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="mt-6 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-xs text-slate-400">
          Question <span className="text-cyan-300 font-semibold">{currentIndex + 1}</span> of <span className="text-cyan-300 font-semibold">{data.length}</span>
        </div>

        {/* Progress bar */}
        <motion.div 
          className="flex-1 mx-4 h-1 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>

    </>
  )
}
