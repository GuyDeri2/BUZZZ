"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { 
  Palette, 
  Type, 
  Layout, 
  Smartphone, 
  Plus, 
  Trash2, 
  GripVertical, 
  ExternalLink, 
  ImageIcon, 
  ShoppingBag,
  Tag, 
  Instagram,
  Sparkles, 
  MoveVertical,
  Link as LinkIcon,
  Upload,
  ChevronUp,
  ChevronDown
} from "lucide-react"
import { useStore } from "@/contexts/StoreContext"

type ProductType = {
  id: number
  title: string
  price: number
  originalPrice?: number
  discountType?: 'fixed' | 'percentage'
  discountValue?: number
  image: string
  link: string
  source?: 'external' | 'manual' | 'instagram'
  isPopular?: boolean
  isSale?: boolean
}

export function StorefrontEditor() {
  const { settings, updateSettings } = useStore()
  const [newProductUrl, setNewProductUrl] = useState("")
  const [products, setProducts] = useState<ProductType[]>([
    { 
      id: 1, 
      title: "Premium Course", 
      price: 99.99, 
      originalPrice: 149.99,
      discountType: 'fixed',
      discountValue: 50,
      image: "/placeholder.svg?height=100&width=100",
      link: "https://example.com/product1",
      source: 'manual',
      isPopular: true,
      isSale: true
    },
    { 
      id: 2, 
      title: "Exclusive E-Book", 
      price: 19.99, 
      image: "/placeholder.svg?height=100&width=100",
      link: "https://example.com/product2",
      source: 'external'
    },
    { 
      id: 3, 
      title: "Membership", 
      price: 29.99, 
      originalPrice: 39.99,
      discountType: 'percentage',
      discountValue: 25,
      image: "/placeholder.svg?height=100&width=100",
      link: "https://example.com/product3",
      source: 'instagram',
      isSale: true
    },
  ])

  const moveProductUp = (index: number) => {
    if (index === 0) return
    const newProducts = [...products]
    const temp = newProducts[index]
    newProducts[index] = newProducts[index - 1]
    newProducts[index - 1] = temp
    setProducts(newProducts)
  }

  const moveProductDown = (index: number) => {
    if (index === products.length - 1) return
    const newProducts = [...products]
    const temp = newProducts[index]
    newProducts[index] = newProducts[index + 1]
    newProducts[index + 1] = temp
    setProducts(newProducts)
  }

  const fetchProductFromUrl = () => {
    // In a real app, this would make an API call to fetch product details
    // For demo purposes, we're adding a sample product
    if (!newProductUrl) return

    const newProduct: ProductType = {
      id: Date.now(),
      title: "New External Product",
      price: 39.99,
      image: "/placeholder.svg?height=100&width=100",
      link: newProductUrl,
      source: 'external'
    }
    
    setProducts([...products, newProduct])
    setNewProductUrl("")
  }

  const addManualProduct = () => {
    const newProduct: ProductType = {
      id: Date.now(),
      title: "New Product",
      price: 0,
      image: "/placeholder.svg?height=100&width=100",
      link: "",
      source: 'manual'
    }
    
    setProducts([...products, newProduct])
  }

  const toggleProductFeature = (id: number, feature: 'isPopular' | 'isSale') => {
    setProducts(products.map(product => 
      product.id === id ? {...product, [feature]: !product[feature]} : product
    ))
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const updateProductField = (id: number, field: string, value: any) => {
    setProducts(products.map(product => 
      product.id === id ? {...product, [field]: value} : product
    ))
  }

  const renderDiscountLabel = (product: ProductType) => {
    if (!product.discountType || !product.discountValue) return null
    
    const label = product.discountType === 'percentage' 
      ? `${product.discountValue}% OFF` 
      : `$${product.discountValue} OFF`
      
    return (
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        {label}
      </span>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="design">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  <span>Design</span>
                </TabsTrigger>
                <TabsTrigger value="content" className="flex items-center gap-2">
                  <Layout className="w-4 h-4" />
                  <span>Content</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="design" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Colors</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex">
                        <Input 
                          id="primary-color" 
                          type="color" 
                          value={settings.primaryColor} 
                          onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                          className="w-12 h-10 p-1" 
                        />
                        <Input 
                          value={settings.primaryColor} 
                          onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                          className="flex-1 ml-2" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="background-color">Background Color</Label>
                      <div className="flex">
                        <Input 
                          id="background-color" 
                          type="color" 
                          value={settings.backgroundColor} 
                          onChange={(e) => updateSettings({ backgroundColor: e.target.value })}
                          className="w-12 h-10 p-1" 
                        />
                        <Input 
                          value={settings.backgroundColor} 
                          onChange={(e) => updateSettings({ backgroundColor: e.target.value })}
                          className="flex-1 ml-2" 
                        />
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
                        <span className="text-sm text-muted-foreground">{settings.borderRadius}px</span>
                      </div>
                      <Slider 
                        id="border-radius" 
                        value={[settings.borderRadius]} 
                        onValueChange={(value) => updateSettings({ borderRadius: value[0] })}
                        max={20} 
                        step={1} 
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="spacing">Spacing</Label>
                        <span className="text-sm text-muted-foreground">{settings.spacing}px</span>
                      </div>
                      <Slider 
                        id="spacing" 
                        value={[settings.spacing]} 
                        onValueChange={(value) => updateSettings({ spacing: value[0] })}
                        max={40} 
                        step={4} 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Fonts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="heading-font">Heading Font</Label>
                      <select 
                        id="heading-font" 
                        value={settings.headingFont}
                        onChange={(e) => updateSettings({ headingFont: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border"
                      >
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>Montserrat</option>
                        <option>Poppins</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="body-font">Body Font</Label>
                      <select 
                        id="body-font" 
                        value={settings.bodyFont}
                        onChange={(e) => updateSettings({ bodyFont: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border"
                      >
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
                        <span className="text-sm text-muted-foreground">{settings.headingSize}px</span>
                      </div>
                      <Slider 
                        id="heading-size" 
                        value={[settings.headingSize]} 
                        onValueChange={(value) => updateSettings({ headingSize: value[0] })}
                        min={16} 
                        max={48} 
                        step={1} 
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="body-size">Body Size</Label>
                        <span className="text-sm text-muted-foreground">{settings.bodySize}px</span>
                      </div>
                      <Slider 
                        id="body-size" 
                        value={[settings.bodySize]} 
                        onValueChange={(value) => updateSettings({ bodySize: value[0] })}
                        min={12} 
                        max={24} 
                        step={1} 
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Products</h3>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={addManualProduct} className="gap-1">
                      <Plus className="w-4 h-4" />
                      Add Product
                    </Button>
                    <Button size="sm" className="gap-1" variant="outline">
                      <Instagram className="w-4 h-4" />
                      Import from Instagram
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <Input 
                    placeholder="Paste product URL to import..." 
                    value={newProductUrl}
                    onChange={(e) => setNewProductUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={fetchProductFromUrl}>
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Fetch Product
                  </Button>
                </div>

                <div className="space-y-4">
                  {products.map((product, index) => (
                    <Card key={product.id} className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6" 
                            onClick={() => moveProductUp(index)}
                            disabled={index === 0}
                          >
                            <ChevronUp className="h-4 w-4" />
                          </Button>
                          <GripVertical className="w-5 h-5 text-muted-foreground mx-auto" />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6" 
                            onClick={() => moveProductDown(index)}
                            disabled={index === products.length - 1}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="relative w-16 h-16 rounded bg-muted flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-muted-foreground" />
                          {product.source === 'instagram' && (
                            <div className="absolute bottom-0 right-0 bg-pink-500 text-white rounded-full p-1">
                              <Instagram className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 space-y-3">
                          <Input 
                            value={product.title} 
                            onChange={(e) => updateProductField(product.id, 'title', e.target.value)}
                            className="mb-1" 
                          />
                          <div className="flex gap-2">
                            <div className="flex items-center gap-1 w-32">
                              <span className="text-sm">$</span>
                              <Input 
                                type="number" 
                                value={product.price} 
                                onChange={(e) => updateProductField(product.id, 'price', parseFloat(e.target.value))}
                                className="flex-1" 
                              />
                            </div>
                            {product.isSale && (
                              <div className="flex items-center gap-1 w-32">
                                <span className="text-sm">Original:</span>
                                <Input 
                                  type="number" 
                                  value={product.originalPrice || 0} 
                                  onChange={(e) => updateProductField(product.id, 'originalPrice', parseFloat(e.target.value))}
                                  className="flex-1" 
                                />
                              </div>
                            )}
                            <Input 
                              placeholder="Product URL" 
                              value={product.link} 
                              onChange={(e) => updateProductField(product.id, 'link', e.target.value)}
                              className="flex-1" 
                            />
                          </div>
                          <div className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`sale-${product.id}`} 
                                checked={product.isSale || false}
                                onCheckedChange={() => toggleProductFeature(product.id, 'isSale')}
                              />
                              <Label htmlFor={`sale-${product.id}`} className="text-sm">On Sale</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`popular-${product.id}`} 
                                checked={product.isPopular || false}
                                onCheckedChange={() => toggleProductFeature(product.id, 'isPopular')}
                              />
                              <Label htmlFor={`popular-${product.id}`} className="text-sm">Popular</Label>
                            </div>
                            {product.isSale && (
                              <div className="flex items-center gap-2">
                                <select 
                                  value={product.discountType || 'fixed'}
                                  onChange={(e) => updateProductField(product.id, 'discountType', e.target.value)}
                                  className="h-8 px-2 text-sm rounded-md border"
                                >
                                  <option value="fixed">$ Off</option>
                                  <option value="percentage">% Off</option>
                                </select>
                                <Input 
                                  type="number" 
                                  value={product.discountValue || 0}
                                  onChange={(e) => updateProductField(product.id, 'discountValue', parseFloat(e.target.value))}
                                  className="w-16 h-8 text-sm" 
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Upload className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-500"
                            onClick={() => removeProduct(product.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
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

            <div 
              className="w-64 h-[500px] border-8 border-gray-800 rounded-3xl overflow-hidden"
              style={{ 
                backgroundColor: settings.backgroundColor,
                borderRadius: `${settings.borderRadius}px`,
                fontFamily: settings.bodyFont
              }}
            >
              <div className="h-6 bg-gray-800 flex justify-center items-center">
                <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="p-4 overflow-auto h-[calc(100%-24px)]">
                <div 
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                  style={{ backgroundColor: `${settings.primaryColor}20` }}
                ></div>
                <div 
                  className="h-8 rounded mb-2 bg-gradient-to-r from-primary to-primary/70"
                  style={{ 
                    backgroundColor: settings.primaryColor,
                    fontFamily: settings.headingFont,
                    fontSize: `${settings.headingSize}px`
                  }}
                ></div>
                <div 
                  className="h-3 rounded w-3/4 mx-auto mb-6"
                  style={{ 
                    backgroundColor: settings.primaryColor,
                    fontFamily: settings.bodyFont,
                    fontSize: `${settings.bodySize}px`,
                    opacity: 0.7
                  }}
                ></div>

                <div className="space-y-4">
                  {products.map((product) => (
                    <div 
                      key={product.id} 
                      className="relative h-24 rounded-lg flex items-center px-3 transition-all hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: `${settings.primaryColor}10`,
                        borderRadius: `${settings.borderRadius}px`,
                        boxShadow: product.isPopular ? `0 0 8px ${settings.primaryColor}80` : 'none',
                        animation: product.isPopular ? 'pulse 2s infinite' : 'none',
                      }}
                    >
                      {renderDiscountLabel(product)}
                      
                      {product.isPopular && (
                        <div className="absolute top-1 left-1 flex items-center">
                          <Sparkles className="w-3 h-3 text-yellow-500" />
                        </div>
                      )}
                      
                      <div 
                        className="w-16 h-16 rounded mr-3 relative overflow-hidden"
                        style={{ backgroundColor: `${settings.primaryColor}20` }}
                      >
                        {product.source === 'instagram' && (
                          <div className="absolute bottom-0 right-0 bg-pink-500 w-4 h-4 flex items-center justify-center">
                            <Instagram className="w-2 h-2 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div 
                          className="h-3 w-20 rounded mb-1"
                          style={{ backgroundColor: settings.primaryColor }}
                        ></div>
                        <div className="flex items-center gap-1">
                          <div 
                            className="h-3 w-12 rounded"
                            style={{ backgroundColor: settings.primaryColor }}
                          ></div>
                          {product.originalPrice && (
                            <div 
                              className="h-2 w-8 rounded relative"
                              style={{ 
                                backgroundColor: settings.primaryColor,
                                opacity: 0.5
                              }}
                            >
                              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-red-500"></div>
                            </div>
                          )}
                        </div>
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

