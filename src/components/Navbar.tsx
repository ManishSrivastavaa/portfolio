import { useState, useEffect } from 'react'

interface NavbarProps {
  isDarkMode: boolean
  setIsDarkMode: (val: boolean) => void
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Summary', href: '#about' },
  { name: 'Journey', href: '#experience' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 no-print border-b
      ${isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-gray-100 dark:border-slate-800 py-4' 
        : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border-transparent py-6'
      }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-xl font-medium tracking-tight text-navy dark:text-white flex items-center gap-3">
          <span className="w-8 h-8 flex items-center justify-center bg-navy text-white dark:bg-white dark:text-navy text-xs font-bold rounded-sm">
            MS
          </span>
          <span className="hidden sm:inline">Manish Srivastava</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal dark:hover:text-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-navy dark:text-white"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-teal py-2 border-b border-gray-50 dark:border-slate-800/50 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
