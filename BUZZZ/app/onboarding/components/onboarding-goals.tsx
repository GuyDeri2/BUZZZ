"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, DollarSign, Users, Share2 } from "lucide-react"
import { motion } from "framer-motion"

type Goal = "money" | "exposure" | "share"

export function OnboardingGoals({ onNext }: { onNext: () => void }) {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)

  const goals = [
    {
      id: "money",
      title: "Make Money",
      description: "Sell products, get affiliate commissions, or receive tips",
      icon: DollarSign,
    },
    {
      id: "exposure",
      title: "Gain Exposure",
      description: "Grow your audience and increase your online presence",
      icon: Users,
    },
    {
      id: "share",
      title: "Share Content",
      description: "Create a hub for all your content in one place",
      icon: Share2,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">What are your goals?</h2>
      <p className="text-center text-muted-foreground">Let us know what you want to achieve with your BUZZZ store</p>

      <div className="grid gap-4">
        {goals.map((goal) => (
          <motion.div key={goal.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className={`p-4 cursor-pointer transition-all ${
                selectedGoal === goal.id ? "border-black bg-primary/20" : "hover:border-primary"
              }`}
              onClick={() => setSelectedGoal(goal.id as Goal)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-full ${selectedGoal === goal.id ? "bg-black text-primary" : "bg-primary/20"}`}
                >
                  <goal.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">{goal.title}</h3>
                  <p className="text-sm text-black/70">{goal.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onNext}
          disabled={!selectedGoal}
          size="lg"
          className="gap-2 bg-black text-white hover:bg-black/80"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

