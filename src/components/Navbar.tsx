import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface NavbarProps {
  isDarkMode: boolean
  setIsDarkMode: (val: boolean) => void
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Skills', href: '#skills' },
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
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 no-print ${
      isScrolled ? 'bg-white/80 dark:bg-navy/80 backdrop-blur-md shadow-lg py-12' : 'bg-transparent py-24'
    }`}>
      <div className="max-w-7xl mx-auto px-16 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-navy dark:text-white flex items-center gap-8">
          <span className="bg-teal text-white px-8 py-2 rounded">MS</span>
          <span className="hidden sm:inline">Manish Srivastava</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-32">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-navy dark:text-gray-300 hover:text-teal dark:hover:text-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-8 rounded-full hover:bg-gray-200 dark:hover:bg-navy-dark transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>

          <a href="/portfolio/assets/Mannish Srivastava - Operations Leader.pdf" target="_blank" className="btn-primary py-8 text-sm">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-16">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-8 rounded-full hover:bg-gray-200 dark:hover:bg-navy-dark transition-colors"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          
          <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button className="p-8 text-navy dark:text-white" aria-label="Open menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </Dialog.Trigger>
            
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
              <Dialog.Content className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-navy z-50 p-32 shadow-2xl">
                <div className="flex justify-end mb-32">
                  <Dialog.Close asChild>
                    <button className="p-8" aria-label="Close menu">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Dialog.Close>
                </div>
                
                <div className="flex flex-col gap-24">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-navy dark:text-gray-200 hover:text-teal"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a 
                    href="/portfolio/assets/Mannish Srivastava - Operations Leader.pdf" 
                    target="_blank"
                    className="btn-primary text-center mt-16"
                  >
                    Download Resume
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
