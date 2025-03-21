"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Youtube, Facebook, Twitter, Music, Plus } from "lucide-react"
import { motion } from "framer-motion"

export function OnboardingSocials({ onNext }: { onNext: () => void }) {
  const [connectedSocials, setConnectedSocials] = useState<string[]>([])

  const socials = [
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "bg-pink-500",
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      color: "bg-red-500",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: Twitter,
      color: "bg-sky-400",
    },
    {
      id: "spotify",
      name: "Spotify",
      icon: Music,
      color: "bg-green-500",
    },
  ]

  const toggleSocial = (id: string) => {
    if (connectedSocials.includes(id)) {
      setConnectedSocials(connectedSocials.filter((socialId) => socialId !== id))
    } else {
      setConnectedSocials([...connectedSocials, id])
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Connect Your Socials</h2>
      <p className="text-center text-muted-foreground">
        Link your social media accounts to import content and grow your audience
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {socials.map((social) => {
          const isConnected = connectedSocials.includes(social.id)
          const SocialIcon = social.icon

          return (
            <motion.button
              key={social.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleSocial(social.id)}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                isConnected ? "border-black bg-primary/20" : "border-border hover:border-primary"
              }`}
            >
              <div className={`p-2 rounded-full text-white ${social.color}`}>
                <SocialIcon className="w-5 h-5" />
              </div>
              <span className="font-medium">{social.name}</span>
              <div className="ml-auto">
                {isConnected ? (
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <Plus className="w-5 h-5 text-black/70" />
                )}
              </div>
            </motion.button>
          )
        })}
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg" className="gap-2 bg-black text-white hover:bg-black/80">
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

