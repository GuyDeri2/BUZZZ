import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  Home,
  ShoppingBag,
  BarChart,
  Settings,
  HelpCircle,
  MessageSquare,
  CreditCard,
  FileText,
  LogOut,
} from "lucide-react"
import { BeeLogo } from "@/app/components/bee-logo"

interface DashboardSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function DashboardSidebar({ open, setOpen }: DashboardSidebarProps) {
  const sidebarLinks = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: ShoppingBag, label: "Products", href: "/dashboard/products" },
    { icon: BarChart, label: "Analytics", href: "/dashboard/analytics" },
    { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
    { icon: FileText, label: "Pages", href: "/dashboard/pages" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  const sidebarContent = (
    <div className="flex flex-col h-full py-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="px-4 py-2 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <BeeLogo size={30} />
          <h2 className="text-lg font-bold">BUZZZ</h2>
        </div>
        <p className="text-sm text-black/70">manage.buzzz.com/mystore</p>
      </div>

      <div className="flex-1 px-3 space-y-1">
        {sidebarLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button
              variant={link.href === "/dashboard" ? "secondary" : "ghost"}
              className={`w-full justify-start ${link.href === "/dashboard" ? "bg-black text-white" : "hover:bg-primary/20"}`}
            >
              <link.icon className="w-4 h-4 mr-2" />
              {link.label}
            </Button>
          </Link>
        ))}
      </div>

      <div className="px-3 mt-6 space-y-1">
        <Button variant="ghost" className="w-full justify-start hover:bg-primary/20">
          <HelpCircle className="w-4 h-4 mr-2" />
          Help & Support
        </Button>
        <Button variant="ghost" className="w-full justify-start hover:bg-primary/20">
          <MessageSquare className="w-4 h-4 mr-2" />
          Feedback
        </Button>
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0">
          {sidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden w-64 border-r md:block">{sidebarContent}</div>
    </>
  )
}

