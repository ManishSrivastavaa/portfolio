import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`section-container ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper
