import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" className="bg-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-48 text-center text-navy">Achievements & Certifications</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24">
        {content.achievements.map((award, idx) => (
          <div 
            key={idx}
            className="group bg-sand/20 p-24 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:border-teal hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-64 h-64 bg-teal rounded-full flex items-center justify-center text-white text-2xl mb-16 shadow-lg group-hover:scale-110 transition-transform">
              {award.title.includes('Award') ? '🏆' : award.title.includes('Certificate') ? '📜' : '🎖️'}
            </div>
            <h3 className="font-bold text-navy mb-8">{award.title}</h3>
            {award.org && <div className="text-xs font-bold text-teal uppercase tracking-widest">{award.org}</div>}
            {award.date && <div className="text-xs text-gray-500 mt-4">{award.date}</div>}
            {award.status && <div className="text-sm font-medium text-navy bg-navy/5 px-8 py-2 rounded mt-8">{award.status}</div>}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Achievements
