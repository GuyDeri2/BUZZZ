"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { BeeLogo } from "./bee-logo"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createHoneycomb = () => {
      if (!containerRef.current) return

      const honeycomb = document.createElement("div")
      honeycomb.className = "absolute w-8 h-8 bg-primary/30 rounded-full"

      // Random position
      const top = Math.random() * 100
      const left = Math.random() * 100
      honeycomb.style.top = `${top}%`
      honeycomb.style.left = `${left}%`

      // Add to container
      containerRef.current.appendChild(honeycomb)

      // Animate and remove
      setTimeout(() => {
        honeycomb.style.opacity = "0"
        setTimeout(() => {
          if (containerRef.current?.contains(honeycomb)) {
            containerRef.current.removeChild(honeycomb)
          }
        }, 1000)
      }, 2000)
    }

    // Create honeycombs periodically
    const interval = setInterval(createHoneycomb, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md mb-10 aspect-square">
      <div ref={containerRef} className="absolute inset-0">
        {/* Honeycombs will be added here dynamically */}
      </div>
      <motion.div
        className="w-full h-full bg-primary/20 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          times: [0, 0.7, 1],
        }}
      />

      {/* Flying bees */}
      <motion.div
        className="absolute"
        initial={{ x: -100, y: 50, opacity: 0 }}
        animate={{
          x: [null, 250],
          y: [null, 100, 0, 100],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <BeeLogo size={30} />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ x: 250, y: 150, opacity: 0 }}
        animate={{
          x: [null, -100],
          y: [null, 50, 150, 50],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 2,
        }}
      >
        <BeeLogo size={25} />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <BeeLogo size={120} className="animate-float" />
      </motion.div>
    </div>
  )
}

