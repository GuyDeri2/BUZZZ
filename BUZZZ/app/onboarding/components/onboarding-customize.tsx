"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, Palette, Type, Layout } from "lucide-react"

export function OnboardingCustomize({ onNext }: { onNext: () => void }) {
  const [primaryColor, setPrimaryColor] = useState("#7C3AED")
  const [fontSize, setFontSize] = useState(16)
  const [borderRadius, setBorderRadius] = useState(8)

  const colors = [
    "#7C3AED", // Purple
    "#EC4899", // Pink
    "#F59E0B", // Amber
    "#10B981", // Emerald
    "#3B82F6", // Blue
    "#EF4444", // Red
    "#000000", // Black
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Customize Your Store</h2>
      <p className="text-center text-muted-foreground">Make it your own with colors, fonts, and layout options</p>

      <Tabs defaultValue="colors">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span>Colors</span>
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2">
            <Type className="w-4 h-4" />
            <span>Typography</span>
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex items-center gap-2">
            <Layout className="w-4 h-4" />
            <span>Layout</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Color</label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full transition-all ${
                    primaryColor === color ? "ring-2 ring-offset-2 ring-primary" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setPrimaryColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="w-full h-[300px] border rounded-lg overflow-hidden">
              <div className="h-12" style={{ backgroundColor: primaryColor }}></div>
              <div className="p-4">
                <div
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                  style={{ backgroundColor: `${primaryColor}20` }}
                ></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>

                <div className="space-y-4">
                  <div className="h-12 rounded-lg" style={{ backgroundColor: `${primaryColor}15` }}></div>
                  <div className="h-12 rounded-lg" style={{ backgroundColor: `${primaryColor}15` }}></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-medium mb-2">Font Size</label>
            <Slider
              value={[fontSize]}
              min={12}
              max={24}
              step={1}
              onValueChange={(value) => setFontSize(value[0])}
              className="mb-6"
            />
            <p className="text-sm text-muted-foreground text-center">{fontSize}px</p>
          </div>

          <div className="mt-6">
            <div className="w-full h-[300px] border rounded-lg overflow-hidden p-4">
              <div className="mb-6 text-center">
                <h3 style={{ fontSize: `${fontSize + 8}px` }} className="font-bold mb-2">
                  Your Store Name
                </h3>
                <p style={{ fontSize: `${fontSize}px` }} className="text-muted-foreground">
                  Your bio goes here. Tell your audience about yourself.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4">
                  <span style={{ fontSize: `${fontSize}px` }}>Product 1</span>
                </div>
                <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4">
                  <span style={{ fontSize: `${fontSize}px` }}>Product 2</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-medium mb-2">Border Radius</label>
            <Slider
              value={[borderRadius]}
              min={0}
              max={20}
              step={1}
              onValueChange={(value) => setBorderRadius(value[0])}
              className="mb-6"
            />
            <p className="text-sm text-muted-foreground text-center">{borderRadius}px</p>
          </div>

          <div className="mt-6">
            <div className="w-full h-[300px] border rounded-lg overflow-hidden p-4">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-200" style={{ borderRadius: `${borderRadius}px` }}></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>

              <div className="space-y-4">
                <div className="h-12 bg-gray-100 flex items-center px-4" style={{ borderRadius: `${borderRadius}px` }}>
                  <span>Product 1</span>
                </div>
                <div className="h-12 bg-gray-100 flex items-center px-4" style={{ borderRadius: `${borderRadius}px` }}>
                  <span>Product 2</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg" className="gap-2 bg-black text-white hover:bg-black/80">
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

