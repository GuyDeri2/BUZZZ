"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import confetti from "canvas-confetti"
import { BeeLogo } from "@/app/components/bee-logo"

export function OnboardingCelebration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Trigger confetti animation
    const canvas = canvasRef.current
    if (!canvas) return

    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })

    // First burst - yellow and black confetti
    myConfetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
      colors: ["#FFD100", "#000000", "#FFFFFF"],
    })

    // Second burst after a delay
    setTimeout(() => {
      myConfetti({
        particleCount: 50,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
        colors: ["#FFD100", "#000000", "#FFFFFF"],
      })
    }, 250)

    // Third burst after another delay
    setTimeout(() => {
      myConfetti({
        particleCount: 50,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
        colors: ["#FFD100", "#000000", "#FFFFFF"],
      })
    }, 400)

    return () => {
      // Clean up
      myConfetti.reset()
    }
  }, [])

  return (
    <div className="space-y-6 text-center relative">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-50"></canvas>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 flex items-center justify-center">
            <BeeLogo size={120} animated={true} />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">Your Store is Live!</h2>
        <p className="text-black/70 mb-8">Congratulations! Your BUZZZ store is now ready to share with the world.</p>
      </motion.div>

      <div className="flex justify-center">
        <Link href="/dashboard">
          <Button size="lg" className="gap-2 bg-black text-white hover:bg-black/80 text-lg">
            Go to Dashboard
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Flying bees */}
      <motion.div
        className="absolute top-0 left-0"
        initial={{ x: -50, y: 50, opacity: 0 }}
        animate={{
          x: [null, 300],
          y: [null, 0, 100, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <BeeLogo size={30} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-0"
        initial={{ x: 50, y: 50, opacity: 0 }}
        animate={{
          x: [null, -300],
          y: [null, 100, 0, 100],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 1,
        }}
      >
        <BeeLogo size={25} />
      </motion.div>
    </div>
  )
}

