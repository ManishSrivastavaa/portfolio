import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Summary', href: '#summary' },
  { name: 'Journey', href: '#journey' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 no-print 
      ${isScrolled 
        ? 'bg-ivory/90 backdrop-blur-md border-b border-border-warm py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-8'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Editorial Logo Treatment */}
        <a href="#home" className="text-xl font-medium tracking-tight text-charcoal flex items-baseline gap-2">
          <span className="font-semibold text-teal">M.</span>
          <span className="hidden sm:inline">Srivastava</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 hover:text-teal transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center pr-2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal p-2 z-50 relative"
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

      {/* Full-screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-light text-ink hover:text-teal transition-colors"
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
