import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 dark:bg-slate-900 dark:text-gray-200 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
