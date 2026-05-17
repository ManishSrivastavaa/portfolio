import { useState, useEffect, useCallback } from 'react'

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [isMobileMenuOpen])

  const handleMobileLinkClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false)
    // Small delay to let body scroll unlock before scrolling to section
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 no-print 
        ${isScrolled 
          ? 'bg-ivory/90 backdrop-blur-md border-b border-border-warm py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-8'
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Editorial Logo Treatment */}
          <a href="#home" className="text-xl font-medium tracking-tight text-charcoal flex items-baseline gap-2 relative z-[60]">
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
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal p-2 relative z-[60]"
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
      </nav>

      {/* Full-screen Mobile Menu Overlay — above everything */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div className="absolute inset-0" style={{ backgroundColor: '#faf9f6' }} />
          
          {/* Close button at top right */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 z-[60] p-2 text-charcoal hover:text-teal transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Nav Links — centered */}
          <div className="relative z-[55] flex flex-col items-center justify-center h-full space-y-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileLinkClick(link.href)
                }}
                className="mobile-nav-link text-3xl font-light text-ink hover:text-teal transition-colors tracking-wide"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {link.name}
              </a>
            ))}
            
            {/* Subtle decorative line */}
            <div className="w-12 h-px bg-charcoal/15 mt-4" />
            
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault()
                handleMobileLinkClick('#home')
              }}
              className="text-xs tracking-[0.25em] text-charcoal/40 uppercase font-medium"
            >
              M. Srivastava
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
