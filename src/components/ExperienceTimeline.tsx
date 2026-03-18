import { useState } from 'react'
import { motion } from 'framer-motion'
import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const ExperienceTimeline = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedItems = showAll ? content.experience : content.experience.slice(0, 3)

  return (
    <SectionWrapper id="experience" className="bg-sand/30">
      <h2 className="text-3xl font-bold mb-48 text-center text-navy">Professional Experience</h2>

      <div className="relative border-l-4 border-teal ml-8 md:ml-32 md:pl-48 pl-24 space-y-48">
        {displayedItems.map((item, idx) => (
          <motion.div
            key={`${item.company}-${item.title}`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[32px] md:-left-[64px] top-0 w-24 h-24 bg-teal rounded-full border-4 border-white shadow-lg" />

            <div className="bg-white p-32 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between mb-16 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                  <div className="text-teal font-semibold text-lg">{item.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-custom uppercase tracking-wider">{item.range}</div>
                  <div className="text-sm text-gray-500 italic">{item.location}</div>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-12 text-gray-custom dark:text-gray-300">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed marker:text-teal" 
                      dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {content.experience.length > 3 && (
        <div className="text-center mt-48 no-print">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary px-40"
          >
            {showAll ? 'See Less' : 'View Full Career Timeline'}
          </button>
        </div>
      )}
    </SectionWrapper>
  )
}

export default ExperienceTimeline
