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
  return (
    <div className="min-h-screen font-sans text-charcoal bg-ivory antialiased selection:bg-teal selection:text-white">
      <Navbar />
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
