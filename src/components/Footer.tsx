import content from '../data/content.json'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <footer className="bg-navy text-sand py-48 no-print">
      <div className="max-w-7xl mx-auto px-16 text-center">
        <div className="mb-24 flex justify-center gap-24">
          <a href={content.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${content.personalInfo.email}`} className="hover:text-teal transition-colors">
            Email
          </a>
        </div>
        
        <p className="text-gray-400 mb-12">
          &copy; {currentYear} {content.personalInfo.name}. All rights reserved.
        </p>
        
        <div className="text-xs text-gray-500">
          Last updated: {lastUpdated} | Focused on Operational Excellence
        </div>
        
        <div className="mt-24 text-[10px] text-gray-600 uppercase tracking-widest">
          Built with React • Tailwind • Framer Motion
        </div>
      </div>
    </footer>
  )
}

export default Footer
