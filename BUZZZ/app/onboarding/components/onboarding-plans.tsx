"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ShoppingBag, Link, Youtube, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

type Plan = "affiliate" | "ecommerce" | "youtube" | "tips"

export function OnboardingPlans({ onNext }: { onNext: () => void }) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)

  const plans = [
    {
      id: "affiliate",
      title: "Affiliate Marketing",
      description: "Promote products and earn commissions",
      icon: Link,
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Sell your own products or merchandise",
      icon: ShoppingBag,
    },
    {
      id: "youtube",
      title: "Content Creation",
      description: "Showcase your videos, podcasts, or articles",
      icon: Youtube,
    },
    {
      id: "tips",
      title: "Tips & Donations",
      description: "Receive support from your audience",
      icon: DollarSign,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">How do you plan to get there?</h2>
      <p className="text-center text-muted-foreground">Select the primary way you want to achieve your goals</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {plans.map((plan) => (
          <motion.div key={plan.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className={`p-4 cursor-pointer transition-all ${
                selectedPlan === plan.id ? "border-black bg-primary/20" : "hover:border-primary"
              }`}
              onClick={() => setSelectedPlan(plan.id as Plan)}
            >
              <div className="flex flex-col items-center text-center gap-2 p-2">
                <div
                  className={`p-3 rounded-full ${selectedPlan === plan.id ? "bg-black text-primary" : "bg-primary/20"}`}
                >
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="font-medium">{plan.title}</h3>
                <p className="text-sm text-black/70">{plan.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onNext}
          disabled={!selectedPlan}
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

