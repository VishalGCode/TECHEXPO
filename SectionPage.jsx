import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import VideoSection from '/VideoSection'
import QuizSection from '/QuizSection'
import BadgeDisplay from '/BadgeDisplay'

const themeMap = {
  kids: { title: 'Kids', color: 'from-pink-500 to-purple-600' },
  women: { title: 'Women', color: 'from-rose-500 to-orange-400' },
  men: { title: 'Men', color: 'from-blue-500 to-cyan-400' },
  health: { title: 'Health', color: 'from-green-400 to-teal-500' },
  resources: { title: 'Resources', color: 'from-yellow-400 to-amber-500' }
  ,faqs: { title: 'FAQs', color: 'from-indigo-500 to-violet-500' }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export default function SectionPage() {
  const { id } = useParams()
  const theme = themeMap[id] || themeMap.resources
  const [earnedBadges, setEarnedBadges] = useState([])

  const onBadgeEarn = (badge) => {
    setEarnedBadges((p) => (p.includes(badge) ? p : [...p, badge]))
  }

  // If the user opened the FAQs section, render a dedicated FAQ layout
  if (id === 'faqs') {
    return (
      <motion.div
        className="max-w-4xl mx-auto bg-gradient-to-br p-6 rounded-xl card-neon"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-6"
        >
          <motion.h2 className="text-2xl font-futuristic font-bold mb-2 text-gradient-animate">
            FAQs — Frequently Asked Questions
          </motion.h2>
          <motion.p className="text-sm text-slate-300">
            Learn more about SmartPlay and how it helps you grow.
          </motion.p>
        </motion.header>

        <div className="space-y-4">
          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">1. What is SmartPlay?</summary>
            <div className="mt-2 text-sm text-slate-300">SmartPlay is a gamified learning platform that makes education fun, interactive, and practical. It helps learners in rural areas develop essential life and professional skills through engaging games and learning missions.</div>
          </details>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">2. How does gamified learning work?</summary>
            <div className="mt-2 text-sm text-slate-300">Instead of traditional lessons, SmartPlay uses games, quizzes, and challenges to teach real-world skills — such as modern farming, financial literacy, health awareness, digital education, and more.</div>
          </details>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">3. Who can use SmartPlay?</summary>
            <div className="mt-2 text-sm text-slate-300">SmartPlay is open to students, teachers, and community members who want to learn in a simple and engaging way. No prior gaming experience is needed!</div>
          </details>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">4. Is SmartPlay free to use?</summary>
            <div className="mt-2 text-sm text-slate-300">Yes! Most of our learning games and resources are completely free. Some advanced modules or certification programs may require a small registration fee.</div>
          </details>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">5. How are the games designed for rural learners?</summary>
            <div className="mt-2 text-sm text-slate-300">Our games are created using simple language, locally relevant examples, and culturally familiar stories. Many activities can also be accessed offline, ensuring everyone can learn — even with limited internet connectivity.</div>
          </details>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <h3 className="text-lg font-semibold text-gradient-animate mb-4">🌾 Learning & Progress</h3>
          </div>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">6. How do I track my learning progress?</summary>
            <div className="mt-2 text-sm text-slate-300">As you complete lessons and challenges, you earn points, badges, and ranks. You can view your learning journey and achievements on your personal dashboard.</div>
          </details>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">7. Can I learn at my own pace?</summary>
            <div className="mt-2 text-sm text-slate-300">Yes! SmartPlay is completely self-paced. You can learn anytime, anywhere, and revisit lessons whenever you need.</div>
          </details>

          <details className="p-4 rounded-lg bg-transparent border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <summary className="font-semibold cursor-pointer">8. Do I get a certificate after completing a course?</summary>
            <div className="mt-2 text-sm text-slate-300">Absolutely! Many SmartPlay learning modules offer digital certificates that recognize your hard work and achievement. These certificates can be shared with employers, schools, or organizations.</div>
          </details>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="mb-8"
      >
        <motion.h2 
          className="text-3xl font-futuristic font-bold mb-2 text-gradient-animate"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {theme.title} Learning Hub
        </motion.h2>
        <motion.p 
          className="text-sm text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Curated videos and interactive quizzes for {theme.title}.
        </motion.p>

        {/* Animated underline */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-3"
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.header>

      <motion.div variants={itemVariants}>
        <VideoSection theme={theme} />
      </motion.div>

      <motion.div 
        className="mt-8"
        variants={itemVariants}
      >
        <QuizSection category={id} onBadgeEarn={onBadgeEarn} />
        {/* Games CTA for Kids and other sections */}
        {['kids','men','women','resources','health'].includes(id) && (
          <motion.div
            className="mt-6 p-4 rounded-xl border border-white/6 bg-white/5 flex flex-col items-start gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold text-md">Want to play more games? Click here</h4>
            <p className="text-xs text-slate-400">Open standalone games for extra practice.</p>
            <a
              href="/button.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-4 py-2 bg-cyan-400 text-black rounded-md font-semibold hover:brightness-95"
            >
              Play Games
            </a>
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className="mt-8"
        variants={itemVariants}
      >
        <BadgeDisplay badges={earnedBadges} />
      </motion.div>
    </motion.div>
  )
}
