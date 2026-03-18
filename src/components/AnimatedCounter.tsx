import { useEffect, useState } from 'react'
import { useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  value: string
  label: string
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  
  // Extract number from string (e.g., "300+" -> 300)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [inView, numericValue, count])

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest))
  }, [rounded])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-teal mb-2">
        <span>{displayValue}</span>{suffix}
      </div>
      <div className="text-gray-custom dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  )
}

export default AnimatedCounter
