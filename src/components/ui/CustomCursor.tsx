'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseOut = () => setIsVisible(false)

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseout', handleMouseOut)

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseout', handleMouseOut)
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        <motion.div
          className="w-10 h-10 border border-white/30 rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.3,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-evalx-blue/20 to-evalx-purple/20 rounded-full blur-sm"
          animate={{
            scale: isHovering ? 1.2 : 0.8,
            opacity: isHovering ? 0.6 : 0.2,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </motion.div>
    </>
  )
}
