"use client"

import { motion } from "framer-motion"

interface BeeLogoProps {
  className?: string
  size?: number
  animated?: boolean
}

export function BeeLogo({ className = "", size = 40, animated = true }: BeeLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Bee body */}
      <motion.div
        className="absolute inset-0"
        initial={animated ? { rotate: 0 } : false}
        animate={animated ? { rotate: [0, 2, 0, -2, 0] } : false}
        transition={animated ? { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" } : {}}
      >
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bee body */}
          <motion.ellipse cx="50" cy="50" rx="30" ry="25" fill="#FFD100" stroke="#000000" strokeWidth="4" />

          {/* Bee stripes */}
          <path d="M40 35 H60 V40 H40 Z" fill="#000000" />
          <path d="M35 45 H65 V50 H35 Z" fill="#000000" />
          <path d="M40 55 H60 V60 H40 Z" fill="#000000" />

          {/* Wings */}
          <motion.ellipse
            cx="30"
            cy="35"
            rx="15"
            ry="10"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2"
            initial={animated ? { rotate: 0 } : false}
            animate={animated ? { rotate: [0, 15, 0] } : false}
            transition={animated ? { repeat: Number.POSITIVE_INFINITY, duration: 0.3, ease: "linear" } : {}}
          />

          <motion.ellipse
            cx="70"
            cy="35"
            rx="15"
            ry="10"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2"
            initial={animated ? { rotate: 0 } : false}
            animate={animated ? { rotate: [0, -15, 0] } : false}
            transition={animated ? { repeat: Number.POSITIVE_INFINITY, duration: 0.3, ease: "linear" } : {}}
          />

          {/* Eyes */}
          <circle cx="40" cy="40" r="3" fill="#000000" />
          <circle cx="60" cy="40" r="3" fill="#000000" />

          {/* Smile */}
          <path d="M45 50 Q50 55 55 50" stroke="#000000" strokeWidth="2" fill="none" />

          {/* Antenna */}
          <motion.path
            d="M40 30 Q35 20 30 15"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            initial={animated ? { rotate: 0 } : false}
            animate={animated ? { rotate: [-5, 5, -5] } : false}
            transition={animated ? { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" } : {}}
          />

          <motion.path
            d="M60 30 Q65 20 70 15"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            initial={animated ? { rotate: 0 } : false}
            animate={animated ? { rotate: [5, -5, 5] } : false}
            transition={animated ? { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" } : {}}
          />

          {/* Stinger */}
          <path d="M50 75 L50 85" stroke="#000000" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>
    </div>
  )
}

