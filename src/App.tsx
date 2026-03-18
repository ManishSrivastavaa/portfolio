import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

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
    <div className="min-h-screen transition-colors duration-300 dark:bg-navy-dark">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <CaseStudies />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
