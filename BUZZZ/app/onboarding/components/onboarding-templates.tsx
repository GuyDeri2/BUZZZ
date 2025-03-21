"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function OnboardingTemplates({ onNext }: { onNext: () => void }) {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const templates = [
    {
      id: 1,
      name: "Modern",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Minimal",
      color: "bg-gradient-to-br from-gray-100 to-gray-300",
    },
    {
      id: 3,
      name: "Bold",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      name: "Elegant",
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      id: 5,
      name: "Vibrant",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
  ]

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length)
  }

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Choose Your Template</h2>
      <p className="text-center text-muted-foreground">Select a template that matches your style</p>

      <div className="relative flex justify-center py-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={prevTemplate}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="relative w-64 h-[500px] overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * 256 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {templates.map((template, index) => (
              <div key={template.id} className="w-64 flex-shrink-0 px-2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full h-[480px] rounded-3xl overflow-hidden border-8 border-gray-800 ${
                    selectedTemplate === template.id ? "ring-4 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="h-6 bg-gray-800 flex justify-center items-center">
                    <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className={`h-full ${template.color}`}>
                    <div className="p-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/20 mb-4"></div>
                      <div className="h-4 bg-white/30 rounded mb-2"></div>
                      <div className="h-3 bg-white/30 rounded w-3/4 mx-auto mb-6"></div>

                      <div className="space-y-4">
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <p className="text-center mt-2 font-medium">{template.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={nextTemplate}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onNext}
          disabled={selectedTemplate === null}
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

