import { useState } from 'react'
import { motion } from 'framer-motion'
import content from '../data/content.json'
import AnimatedCounter from './AnimatedCounter'
import SectionWrapper from './SectionWrapper'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <SectionWrapper id="home" className="pt-120 pb-64 lg:pt-160">
      <div className="flex flex-col lg:flex-row items-center gap-64">
        {/* Left: Portrait */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <motion.div
            className="relative w-256 h-256 md:w-320 md:h-320 rounded-full overflow-hidden border-8 border-white shadow-2xl cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/portfolio/assets/1.jpg"
              alt="Manish Mohan Srivastava — Operations Head"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src="/portfolio/assets/2.jpg"
              alt="Manish Mohan Srivastava — Alternate Profile"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center lg:justify-start gap-8 mb-16"
          >
            <span className="text-teal font-bold tracking-widest uppercase text-sm">Based in {content.personalInfo.location}</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-16 text-navy"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {content.personalInfo.name}
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-teal mb-32"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {content.personalInfo.title}
          </motion.h2>

          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-16 mb-32"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <a href={`mailto:${content.personalInfo.email}`} className="flex items-center gap-8 text-sm font-medium text-gray-custom hover:text-teal transition-colors">
              <span className="bg-sand p-8 rounded-full">✉️</span> {content.personalInfo.email}
            </a>
            <a href={`tel:${content.personalInfo.phone}`} className="flex items-center gap-8 text-sm font-medium text-gray-custom hover:text-teal transition-colors">
              <span className="bg-sand p-8 rounded-full">📞</span> {content.personalInfo.phone}
            </a>
            <a href={content.personalInfo.linkedin} target="_blank" rel="noopener" className="flex items-center gap-8 text-sm font-medium text-gray-custom hover:text-teal transition-colors">
              <span className="bg-sand p-8 rounded-full">🔗</span> LinkedIn
            </a>
          </motion.div>

          <motion.p 
            className="text-lg text-gray-custom mb-40 max-w-2xl leading-relaxed"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {content.personalInfo.summary}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-16 mb-48"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="/portfolio/assets/Mannish Srivastava - Operations Leader.pdf" target="_blank" className="btn-primary">
              Download Resume (PDF)
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Manish
            </a>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-24 py-24 border-y border-gray-200">
            {content.metrics.map((metric, idx) => (
              <AnimatedCounter key={idx} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
