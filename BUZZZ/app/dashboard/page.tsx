"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "./components/dashboard-sidebar"
import { StorefrontEditor } from "./components/storefront-editor"
import { AnalyticsDashboard } from "./components/analytics-dashboard"
import { Settings } from "./components/settings"
import { Menu, X } from "lucide-react"
import { BeeLogo } from "../components/bee-logo"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1">
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-primary/10 backdrop-blur supports-[backdrop-filter]:bg-primary/5">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <BeeLogo size={30} />
              <h1 className="text-xl font-bold">BUZZZ</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/preview" target="_blank">
              <Button variant="outline" size="sm" className="border-black text-black hover:bg-black/5">
                Preview Store
              </Button>
            </Link>
            <Button size="sm" className="bg-black text-white hover:bg-black/80">
              Publish Changes
            </Button>
          </div>
        </header>

        <main className="p-4 md:p-6">
          <Tabs defaultValue="editor" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="editor">Storefront Editor</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="space-y-4">
              <StorefrontEditor />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <AnalyticsDashboard />
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Settings />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

