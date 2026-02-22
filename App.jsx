import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import SectionPage from './SectionPage'
import Navbar from './Navbar'
import Footer from './Footer'
import { AnimatePresence, motion } from 'framer-motion'
import { useFlash } from './FlashContext'


// Simple intro splash component
function Intro({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish(), 2600)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#000000] via-transparent to-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.8 }}
        className="text-center p-6 rounded-lg relative"
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-20 -z-10"
          style={{
            background: 'radial-gradient(circle, #00ffd5 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.h1 
          className="text-3xl md:text-5xl font-futuristic font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] to-[#66f0ff] drop-shadow-lg"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Level Up Your Learning — Play, Learn, and Conquer!
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#66f0ff] mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </div>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const { showFlash } = useFlash()
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatLanguage, setChatLanguage] = useState('english') // 'english', 'hindi', 'hinglish'
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi! I\'m the SmartPlay Assistant. I\'m here to help you learn about our gamified platform and guide you through your learning journey. What would you like to know?' }
  ])

  // SmartPlay knowledge base in multiple languages
  const knowledgeBase = {
    english: {
      'what is smartplay': 'SmartPlay is a gamified learning platform that makes education fun, interactive, and practical! It helps learners—especially in rural areas—develop essential skills like modern farming, financial literacy, health awareness, and digital education through engaging games and challenges.',
      'what is smartplay?': 'SmartPlay is a gamified learning platform that makes education fun, interactive, and practical! It helps learners—especially in rural areas—develop essential skills like modern farming, financial literacy, health awareness, and digital education through engaging games and challenges.',
      'how does it work': 'SmartPlay uses games, quizzes, and interactive challenges instead of boring traditional lessons. You learn real-world skills by playing and completing missions. As you progress, you earn points, badges, and ranks on your dashboard!',
      'how does gamified learning work': 'SmartPlay uses games, quizzes, and interactive challenges instead of boring traditional lessons. You learn real-world skills by playing and completing missions. As you progress, you earn points, badges, and ranks on your dashboard!',
      'who can use smartplay': 'Anyone can use SmartPlay! Students, teachers, farmers, entrepreneurs, and community members of all ages. No prior gaming experience is needed—it\'s designed for everyone, especially rural learners.',
      'is it free': 'Yes! Most of SmartPlay\'s games and resources are completely free. Some advanced certification modules may require a small registration fee, but the core learning is always free.',
      'free to use': 'Yes! Most of SmartPlay\'s games and resources are completely free. Some advanced certification modules may require a small registration fee, but the core learning is always free.',
      'offline': 'Absolutely! Many SmartPlay lessons and games can be used without internet. Our content is designed for learners in areas with limited connectivity. Download lessons and learn anytime, anywhere!',
      'offline access': 'Absolutely! Many SmartPlay lessons and games can be used without internet. Our content is designed for learners in areas with limited connectivity. Download lessons and learn anytime, anywhere!',
      'certificate': 'Yes! After completing courses, you get digital certificates that prove your skills. These can be shared with employers, schools, or organizations. It\'s a great way to showcase what you\'ve learned!',
      'certificates': 'Yes! After completing courses, you get digital certificates that prove your skills. These can be shared with employers, schools, or organizations. It\'s a great way to showcase what you\'ve learned!',
      'earn badges': 'You earn badges by completing challenges, missions, and quizzes! Each badge represents a skill you\'ve mastered. Collect badges to unlock new levels and advance on the leaderboard.',
      'badges': 'You earn badges by completing challenges, missions, and quizzes! Each badge represents a skill you\'ve mastered. Collect badges to unlock new levels and advance on the leaderboard.',
      'points': 'Every time you complete a lesson, quiz, or challenge, you earn points! Points help you level up and compete on the leaderboard. More points = higher rank!',
      'track progress': 'Your personal dashboard shows all your achievements! You can see points earned, badges collected, courses completed, and your current rank. Track your learning journey anytime.',
      'progress': 'Your personal dashboard shows all your achievements! You can see points earned, badges collected, courses completed, and your current rank. Track your learning journey anytime.',
      'rural learners': 'SmartPlay is specially designed for rural learners! Our games use simple language, locally relevant examples, and culturally familiar stories. Plus, offline access means everyone can learn—even with limited internet.',
      'school partner': 'Great question! Schools, NGOs, and communities can partner with SmartPlay to bring gamified learning to their students. Contact our support team for partnership opportunities and bulk access!',
      'partner': 'Great question! Schools, NGOs, and communities can partner with SmartPlay to bring gamified learning to their students. Contact our support team for partnership opportunities and bulk access!',
      'login': 'To login, use your email and password on the SmartPlay homepage. If you forgot your password, click "Forgot Password" to reset it. If you\'re new, sign up with your email!',
      'sign up': 'Click "Sign Up" on the homepage, enter your email, create a password, and choose your interests (farming, health, finance, etc.). You\'re ready to start learning!',
      'slow loading': 'If SmartPlay is loading slowly, try refreshing the page. If that doesn\'t help, check your internet connection. For offline lessons, download content when you have good connection and use it anytime!',
      'default': 'Great question! 😊 I\'m here to help. You can ask me about:\n- How SmartPlay works\n- Earning certificates and badges\n- Learning offline\n- Whether it\'s free\n- Partner opportunities\n- Technical help\n\nWhat interests you most?'
    },
    hindi: {
      'smartplay क्या है': 'SmartPlay एक गेमिफाइड लर्निंग प्लेटफॉर्म है जो शिक्षा को मजेदार और व्यावहारिक बनाता है! यह विशेषकर ग्रामीण क्षेत्रों के शिक्षार्थियों को आधुनिक खेती, वित्तीय साक्षरता, स्वास्थ्य जागरूकता और डिजिटल शिक्षा जैसे आवश्यक कौशल विकसित करने में मदद करता है।',
      'यह कैसे काम करता है': 'SmartPlay पारंपरिक सबक की जगह गेम्स, क्विज़ और इंटरेक्टिव चुनौतियों का उपयोग करता है। आप मिशन पूरा करके वास्तविक कौशल सीखते हैं और बिंदु, बैज तथा रैंक अर्जित करते हैं।',
      'कौन इस्तेमाल कर सकता है': 'कोई भी SmartPlay का उपयोग कर सकता है! छात्र, शिक्षक, किसान, उद्यमी - सभी उम्र के लोग। गेमिंग का अनुभव होना आवश्यक नहीं है।',
      'क्या यह मुफ्त है': 'हाँ! SmartPlay के अधिकांश गेम्स और संसाधन पूरी तरह से मुफ्त हैं। कुछ उन्नत प्रमाणपत्र कार्यक्रमों के लिए छोटा पंजीकरण शुल्क हो सकता है।',
      'ऑफलाइन': 'बिल्कुल! कई SmartPlay सबक और गेम्स बिना इंटरनेट के उपयोग किए जा सकते हैं। सीमित कनेक्टिविटी वाले क्षेत्रों के शिक्षार्थियों के लिए डिज़ाइन किया गया है।',
      'प्रमाणपत्र': 'हाँ! कोर्स पूरा करने के बाद आपको डिजिटल प्रमाणपत्र मिलते हैं जो आपके कौशल को प्रमाणित करते हैं।',
      'बैज': 'चुनौतियों, मिशन और क्विज़ को पूरा करके आप बैज अर्जित करते हैं! प्रत्येक बैज एक कौशल का प्रतिनिधित्व करता है।',
      'अंक': 'हर बार जब आप सबक, क्विज़ या चुनौती पूरी करते हैं, तो आप अंक अर्जित करते हैं! अंक आपको आगे बढ़ाने में मदद करते हैं।',
      'प्रगति': 'आपका व्यक्तिगत डैशबोर्ड सभी उपलब्धियां दिखाता है! अंक, बैज, पूर्ण कोर्स और रैंक देख सकते हैं।',
      'default': 'बढ़िया सवाल! 😊 मैं आपकी मदद करने के लिए यहाँ हूँ। आप मुझसे पूछ सकते हैं:\n- SmartPlay कैसे काम करता है\n- प्रमाणपत्र और बैज\n- ऑफलाइन सीखना\n- क्या यह मुफ्त है\nआपको सबसे अधिक क्या दिलचस्प है?'
    },
    hinglish: {
      'smartplay kya hai': 'SmartPlay ek gamified learning platform hai jo education ko maza deta hai! Ye rural areas ke students ko modern farming, financial literacy, health awareness aur digital skills sikhata hai engaging games ke through.',
      'kaise kaam karta hai': 'SmartPlay games, quizzes aur challenges use karta hai traditional lessons ki jagah. Aap missions complete karke real skills seekhte ho aur points, badges, ranks earn karte ho!',
      'kaun use kar sakta hai': 'Koi bhi SmartPlay use kar sakta hai! Students, teachers, farmers, entrepreneurs - sabhi age ke log. Gaming experience hona zaroori nahi hai.',
      'kya free hai': 'Haan! SmartPlay ke zyada se zyada games aur resources puri tarah free hain. Kuch advanced certificates ke liye chota fee ho sakta hai.',
      'offline': 'Bilkul! Aap SmartPlay ko internet ke bina bhi use kar sakte ho. Limited internet wale areas ke liye perfect hai!',
      'certificate': 'Haan! Course complete karne ke baad digital certificates milte hain jo aapke skills ko prove karte hain.',
      'badges': 'Challenges, missions aur quizzes complete karke badges earn hote hain! Har badge ek naya skill represent karta hai.',
      'points': 'Har lesson, quiz ya challenge complete karne pe points milte hain! Points se aap level up kar sakte ho.',
      'progress': 'Aapka dashboard sab achievements dikhata hai! Points, badges, completed courses aur rank sab dekh sakte ho.',
      'help': 'Mein aapki madad karne ke liye hoon! 💪 SmartPlay ke features, badges, certificates, offline learning ya kuch aur puch sakte ho!',
      'default': 'Bahut acha sawal! 😊 Mein aapki madad kar sakta hoon. Aap mujhse pooch sakte ho:\n- SmartPlay kaise kaam karta hai\n- Badges aur certificates\n- Offline learning\n- Free hai ya nahi\nAapko sabse zyada kya interesting lag raha hai?'
    }
  }

  const getSmartPlayReply = (userText) => {
    const lowerText = userText.toLowerCase()
    const langBase = knowledgeBase[chatLanguage] || knowledgeBase.english
    
    // Check for exact or partial matches in knowledge base
    for (const [key, answer] of Object.entries(langBase)) {
      if (lowerText.includes(key)) {
        return answer
      }
    }
    
    // Fallback for common keywords
    if (chatLanguage === 'hindi') {
      if (lowerText.includes('धन्यवाद') || lowerText.includes('शुक्रिया')) {
        return 'आपका स्वागत है! 😊 अगर आपके पास और सवाल हों तो पूछ सकते हैं।'
      }
      if (lowerText.includes('नमस्ते') || lowerText.includes('हाय') || lowerText.includes('हेलो')) {
        return 'नमस्ते! 👋 आज मैं आपकी कैसे मदद कर सकता हूँ?'
      }
      if (lowerText.includes('मदद')) {
        return 'मैं यहाँ आपकी मदद के लिए हूँ! 💪 SmartPlay के किसी भी सवाल पूछें।'
      }
    } else if (chatLanguage === 'hinglish') {
      if (lowerText.includes('shukriya') || lowerText.includes('dhanyavaad')) {
        return 'Aapka swagat hai! 😊 Aur questions ho to pooch sakte ho.'
      }
      if (lowerText.includes('namaste') || lowerText.includes('hi') || lowerText.includes('hello')) {
        return 'Namaste! 👋 Aaj main aapki kaise madad kar sakta hoon?'
      }
      if (lowerText.includes('madad') || lowerText.includes('help')) {
        return 'Main yaha aapki madad ke liye hoon! 💪 SmartPlay ke bare me kuch bhi pooch sakte ho.'
      }
    } else {
      if (lowerText.includes('thank') || lowerText.includes('thanks')) {
        return 'You\'re welcome! 😊 Feel free to ask if you have more questions about SmartPlay!'
      }
      if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
        return 'Hello! 👋 How can I help you learn more about SmartPlay today?'
      }
      if (lowerText.includes('help')) {
        return 'I\'m here to help! 💪 Ask me about SmartPlay\'s features, how to earn badges, certificates, offline learning, or anything else!'
      }
    }
    
    return langBase['default'] || knowledgeBase.english['default']
  }

  const sendMessage = () => {
    if (!chatInput.trim()) return
    setMessages((m) => [...m, { from: 'user', text: chatInput.trim() }])
    const userText = chatInput.trim()
    setChatInput('')
    
    setTimeout(() => {
      const reply = getSmartPlayReply(userText)
      setMessages((m) => [...m, { from: 'bot', text: reply }])
    }, 800)
  }

  return (
    <>
      {/* animated background + particles */}
      <div className="animated-bg fixed inset-0 -z-20 pointer-events-none" aria-hidden="true">
        <div className="gradient-animate absolute inset-0 opacity-40" />
        <div className="absolute inset-0">
          {/* Decorative particles — purely CSS animated */}
          <span className="particle" style={{left: '8%', top: '12%', width: 18, height: 18, background: 'radial-gradient(circle,#00ffd5,transparent)'}} />
          <span className="particle" style={{left: '28%', top: '32%', width: 24, height: 24, background: 'radial-gradient(circle,#66f0ff,transparent)'}} />
          <span className="particle" style={{left: '60%', top: '8%', width: 12, height: 12, background: 'radial-gradient(circle,#00d4ff,transparent)'}} />
          <span className="particle" style={{left: '82%', top: '36%', width: 20, height: 20, background: 'radial-gradient(circle,#a78bfa,transparent)'}} />
          <span className="particle" style={{left: '12%', top: '72%', width: 14, height: 14, background: 'radial-gradient(circle,#00ffd5,transparent)'}} />
          <span className="particle" style={{left: '46%', top: '62%', width: 22, height: 22, background: 'radial-gradient(circle,#00d4ff,transparent)'}} />
        </div>
      </div>

      {/* Page content — this will be blurred when `showFlash` is true */}
      <motion.div 
        className={`min-h-screen flex flex-col ${showFlash ? 'filter blur-sm pointer-events-none' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />

        <AnimatePresence mode="wait">
          {showIntro && <Intro key="intro" onFinish={() => setShowIntro(false)} />}
        </AnimatePresence>

        <motion.main 
          className="flex-1 py-8 px-4 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: showIntro ? 0.5 : 0, duration: 0.6 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/section/:id" element={<SectionPage />} />
          </Routes>
        </motion.main>

        <Footer />
      </motion.div>

      {/* Full-width bottom chat bar */}
      <div className="chatbot-container fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className={`chatbot-bar card-neon rounded-t-xl shadow-xl w-full max-w-5xl bg-gradient-to-r from-slate-900/95 to-slate-800/95`}>
          {/* header / toggle */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-lg">🤖</span>
              <div>
                <div className="font-semibold text-sm text-gradient-animate">SmartPlay Assistant</div>
                <div className="text-xs text-slate-400">Always here to help</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Language selector */}
              {chatOpen && (
                <div className="flex gap-1 text-xs">
                  <button 
                    onClick={() => setChatLanguage('english')}
                    className={`px-2 py-1 rounded ${chatLanguage === 'english' ? 'bg-cyan-600 text-white' : 'bg-slate-700/40 text-slate-300 hover:bg-slate-700'} transition`}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => setChatLanguage('hindi')}
                    className={`px-2 py-1 rounded ${chatLanguage === 'hindi' ? 'bg-cyan-600 text-white' : 'bg-slate-700/40 text-slate-300 hover:bg-slate-700'} transition`}
                  >
                    HI
                  </button>
                  <button 
                    onClick={() => setChatLanguage('hinglish')}
                    className={`px-2 py-1 rounded ${chatLanguage === 'hinglish' ? 'bg-cyan-600 text-white' : 'bg-slate-700/40 text-slate-300 hover:bg-slate-700'} transition`}
                  >
                    HG
                  </button>
                </div>
              )}
              <button className="text-sm text-slate-300 hover:text-cyan-300 transition-colors" onClick={() => setChatOpen((s) => !s)}>
                {chatOpen ? '▼ Hide' : '▲ Show'}
              </button>
            </div>
          </div>

          {/* messages panel */}
          {chatOpen && (
            <div className="px-4 pb-3 pt-3">
              <div className="chatbot-messages max-h-48 overflow-y-auto text-sm space-y-3 mb-3">
                {messages.map((m, i) => (
                  <motion.div 
                    key={i} 
                    className={m.from === 'bot' ? 'text-left' : 'text-right'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={m.from === 'bot' 
                      ? 'inline-block bg-slate-700/60 px-4 py-2 rounded-lg max-w-xs text-slate-200' 
                      : 'inline-block bg-cyan-600/30 px-4 py-2 rounded-lg max-w-xs text-cyan-100'
                    }>
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="chatbot-input flex-1 rounded px-3 py-2 bg-slate-700/40 border border-slate-600 text-sm text-white placeholder-slate-400"
                  placeholder={chatLanguage === 'hindi' ? 'SmartPlay के बारे में पूछें...' : chatLanguage === 'hinglish' ? 'SmartPlay ke bare me poochein...' : 'Ask about SmartPlay...'}
                />
                <button onClick={sendMessage} className="chatbot-send glow-btn rounded px-4 py-2 text-sm font-medium hover:bg-cyan-600/40 transition-colors">Send</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* global flash root: render your flash UI as fixed/z-high element so it's above the blurred content.
          Components that trigger the flash should render their UI with a high z-index (e.g. z-50 or higher)
          and set `setShowFlash(true)` while the flash is visible. */}
      <div id="global-flash-root" className="pointer-events-none" />
    </>
  )
}
