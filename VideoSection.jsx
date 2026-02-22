import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0
    }
  }
}

const videoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Simple video embed list with section-specific content
export default function VideoSection({ theme }){
  // Section-specific videos
  const videosBySection = {
    kids: [
      { id: 'science1', title: 'Science Basics for Kids', url: 'https://www.youtube.com/watch?v=hlIeBax4IgM' },
      { id: 'math1', title: 'Fun Math for Kids', url: 'https://www.youtube.com/watch?v=mjlsSYLLOSE' },
      { id: 'gk1', title: 'General Knowledge for Kids', url: 'https://www.youtube.com/watch?v=3G2vDWqPZSU' }
    ],
    women: [
      { id: 'women1', title: 'Women Empowerment', url: 'https://www.youtube.com/watch?v=VF4ZyJRUxk8' },
      { id: 'women2', title: 'Daily Skills for Women', url: 'https://www.youtube.com/watch?v=Kd964HY2htQ' },
      { id: 'women3', title: 'Financial Independence', url: 'https://www.youtube.com/watch?v=XlAF_ucMk_o' }
    ],
    men: [
      { id: 'men1', title: 'Modern Agriculture Techniques', url: 'https://www.youtube.com/watch?v=ZdxD_1aNI-c' },
      { id: 'men2', title: 'Entrepreneurship Basics', url: 'https://www.youtube.com/watch?v=nNP4o1wE6Vo' },
      { id: 'men3', title: 'Health & Wellness for Men', url: 'https://www.youtube.com/watch?v=xFqecEtdGZ0' }
    ],
    health: [
      { id: 'health1', title: 'Physical Fitness Basics', url: 'https://www.youtube.com/watch?v=N_s4PjCRTsc' },
      { id: 'health2', title: 'Healthy Eating Tips', url: 'https://www.youtube.com/watch?v=F8IQQad0lTA' },
      { id: 'health3', title: 'Mental Health Awareness', url: 'https://www.youtube.com/watch?v=lImS1Cpju_A' }
    ],
    resources: [
      { id: 'resources1', title: 'Traffic Guide', url: 'https://www.youtube.com/watch?v=I1mdFGeuAo0' },
      { id: 'resources2', title: 'Basic Indian Rights', url: 'https://www.youtube.com/watch?v=K65DEXrR9As' },
      { id: 'resources3', title: 'Education In India', url: 'https://www.youtube.com/watch?v=KHvnzVxLRYQ' }
    ]
  }

  // Get videos based on current section (theme)
  const getCurrentSection = () => {
    if (theme && theme.title) {
      const title = theme.title.toLowerCase()
      if (title === 'kids') return 'kids'
      if (title === 'women') return 'women'
      if (title === 'men') return 'men'
      if (title === 'health') return 'health'
      if (title === 'resources') return 'resources'
    }
    return 'kids' // default
  }

  const currentSection = getCurrentSection()
  const videos = videosBySection[currentSection] || videosBySection.kids

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {videos.map((v) => (
        <motion.div 
          key={v.id} 
          className="card-neon rounded-xl overflow-hidden"
          variants={videoVariants}
          whileHover={{ 
            y: -10,
            boxShadow: '0 20px 40px rgba(0, 255, 213, 0.2)'
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-full aspect-video bg-black relative overflow-hidden cursor-pointer" onClick={() => window.open(v.url, '_blank')}>
            <iframe
              className="w-full h-full"
              src={v.url.replace('watch?v=', 'embed/')}
              title={v.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Play button overlay indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-10 transition-opacity">
              <div className="text-4xl">▶️</div>
            </div>
          </div>
          
          <div className="p-3">
            <div className="font-medium text-cyan-300">{v.title}</div>
            <div className="text-xs text-slate-300 mt-1">Source: curated educational channels</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
