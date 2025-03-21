"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Palette, Type, Layout, Smartphone, Plus, Trash2, GripVertical, ExternalLink, ImageIcon } from "lucide-react"

export function StorefrontEditor() {
  const [products, setProducts] = useState([
    { id: 1, title: "Premium Course", price: 99.99, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, title: "Exclusive E-Book", price: 19.99, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, title: "Membership", price: 29.99, image: "/placeholder.svg?height=100&width=100" },
  ])

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="design">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  <span>Design</span>
                </TabsTrigger>
                <TabsTrigger value="content" className="flex items-center gap-2">
                  <Layout className="w-4 h-4" />
                  <span>Content</span>
                </TabsTrigger>
                <TabsTrigger value="typography" className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  <span>Typography</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="design" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Colors</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex">
                        <Input id="primary-color" type="color" value="#7C3AED" className="w-12 h-10 p-1" />
                        <Input value="#7C3AED" className="flex-1 ml-2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="background-color">Background Color</Label>
                      <div className="flex">
                        <Input id="background-color" type="color" value="#FFFFFF" className="w-12 h-10 p-1" />
                        <Input value="#FFFFFF" className="flex-1 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Appearance</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="border-radius">Border Radius</Label>
                        <span className="text-sm text-muted-foreground">8px</span>
                      </div>
                      <Slider id="border-radius" defaultValue={[8]} max={20} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="spacing">Spacing</Label>
                        <span className="text-sm text-muted-foreground">16px</span>
                      </div>
                      <Slider id="spacing" defaultValue={[16]} max={40} step={4} />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Products</h3>
                  <Button size="sm" className="gap-1">
                    <Plus className="w-4 h-4" />
                    Add Product
                  </Button>
                </div>

                <div className="space-y-4">
                  {products.map((product) => (
                    <Card key={product.id} className="p-4">
                      <div className="flex items-center gap-4">
                        <GripVertical className="w-5 h-5 text-muted-foreground cursor-move" />
                        <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <Input defaultValue={product.title} className="mb-1" />
                          <div className="flex gap-2">
                            <Input defaultValue={product.price.toString()} className="w-24" />
                            <Input defaultValue="https://example.com/product" className="flex-1" />
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="typography" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Fonts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="heading-font">Heading Font</Label>
                      <select id="heading-font" className="w-full h-10 px-3 rounded-md border">
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>Montserrat</option>
                        <option>Poppins</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="body-font">Body Font</Label>
                      <select id="body-font" className="w-full h-10 px-3 rounded-md border">
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>Open Sans</option>
                        <option>Lato</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Font Sizes</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="heading-size">Heading Size</Label>
                        <span className="text-sm text-muted-foreground">24px</span>
                      </div>
                      <Slider id="heading-size" defaultValue={[24]} min={16} max={48} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="body-size">Body Size</Label>
                        <span className="text-sm text-muted-foreground">16px</span>
                      </div>
                      <Slider id="body-size" defaultValue={[16]} min={12} max={24} step={1} />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-20">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-lg font-medium">Preview</h3>
              <Button variant="ghost" size="sm" className="gap-1">
                <ExternalLink className="w-4 h-4" />
                Open
              </Button>
            </div>

            <div className="w-64 h-[500px] border-8 border-gray-800 rounded-3xl overflow-hidden bg-white">
              <div className="h-6 bg-gray-800 flex justify-center items-center">
                <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="p-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>

                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="h-16 bg-gray-100 rounded-lg flex items-center px-3">
                      <div className="w-10 h-10 bg-gray-200 rounded mr-3"></div>
                      <div>
                        <div className="h-3 w-20 bg-gray-300 rounded mb-1"></div>
                        <div className="h-3 w-12 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <Smartphone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Mobile Preview</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

