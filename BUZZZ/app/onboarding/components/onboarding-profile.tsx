"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Upload } from "lucide-react"
import { motion } from "framer-motion"

export function OnboardingProfile({ onNext }: { onNext: () => void }) {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Set Up Your Profile</h2>
      <p className="text-center text-muted-foreground">Add your profile information to personalize your store</p>

      <div className="flex justify-center mb-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
          <label htmlFor="profile-image" className="cursor-pointer">
            <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-primary/50 hover:border-primary">
              {profileImage ? (
                <img src={profileImage || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center text-muted-foreground">
                  <Upload className="w-6 h-6 mb-1" />
                  <span className="text-xs">Upload</span>
                </div>
              )}
            </div>
            <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </motion.div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Display Name
          </label>
          <Input
            id="name"
            placeholder="Your name or brand name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium mb-1">
            Bio
          </label>
          <Textarea
            id="bio"
            placeholder="Tell your audience about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
          />
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onNext}
          disabled={!name.trim()}
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

