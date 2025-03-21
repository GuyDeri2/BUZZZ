"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { OnboardingGoals } from "./components/onboarding-goals"
import { OnboardingPlans } from "./components/onboarding-plans"
import { OnboardingProfile } from "./components/onboarding-profile"
import { OnboardingTemplates } from "./components/onboarding-templates"
import { OnboardingCustomize } from "./components/onboarding-customize"
import { OnboardingCelebration } from "./components/onboarding-celebration"
import { OnboardingSocials } from "./components/onboarding-socials"
import { BeeLogo } from "../components/bee-logo"

const steps = ["Goals", "Plans", "Subscription", "Socials", "Profile", "Template", "Customize", "Preview", "Celebrate"]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const progress = ((currentStep + 1) / steps.length) * 100

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 via-primary/5 to-background">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" size="sm" onClick={goToPreviousStep} disabled={currentStep === 0} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <BeeLogo size={24} animated={false} />
            <div className="text-sm font-medium">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        </div>

        <Progress value={progress} className="h-2 mb-8 bg-gray-200">
          <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
        </Progress>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <Card className="w-full max-w-2xl p-6">
              {currentStep === 0 && <OnboardingGoals onNext={goToNextStep} />}
              {currentStep === 1 && <OnboardingPlans onNext={goToNextStep} />}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-center">Select a Plan</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="p-4 border-2 border-primary">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Starter</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Free
                        </span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Up to 5 products</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Standard templates</span>
                        </li>
                      </ul>
                      <Button onClick={goToNextStep} className="w-full">
                        Select
                      </Button>
                    </Card>
                    <Card className="p-4 border-2">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Premium</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-muted rounded-full">$9.99/mo</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>Unlimited products</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>Premium templates</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>Custom domain</span>
                        </li>
                      </ul>
                      <Button variant="outline" onClick={goToNextStep} className="w-full">
                        Select
                      </Button>
                    </Card>
                  </div>
                </div>
              )}
              {currentStep === 3 && <OnboardingSocials onNext={goToNextStep} />}
              {currentStep === 4 && <OnboardingProfile onNext={goToNextStep} />}
              {currentStep === 5 && <OnboardingTemplates onNext={goToNextStep} />}
              {currentStep === 6 && <OnboardingCustomize onNext={goToNextStep} />}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-center">Preview Your Store</h2>
                  <div className="flex justify-center">
                    <div className="w-64 h-[500px] border-8 border-gray-800 rounded-3xl overflow-hidden bg-white">
                      <div className="h-6 bg-gray-800 flex justify-center items-center">
                        <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="p-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>

                        <div className="space-y-4">
                          <div className="h-16 bg-gray-100 rounded-lg"></div>
                          <div className="h-16 bg-gray-100 rounded-lg"></div>
                          <div className="h-16 bg-gray-100 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={goToNextStep} size="lg" className="gap-2">
                      Looks Great!
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
              {currentStep === 8 && <OnboardingCelebration />}
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

