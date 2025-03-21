import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroAnimation } from "./components/hero-animation"
import { BeeLogo } from "./components/bee-logo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 via-primary/5 to-background">
      <div className="container px-4 py-8 mx-auto">
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <BeeLogo size={40} />
            <h1 className="text-2xl font-bold">BUZZZ</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-black text-white hover:bg-black/80">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        <main className="flex flex-col items-center justify-center py-12 text-center">
          <HeroAnimation />

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Your Personal
            <span className="block text-primary bg-black px-4 py-2 rounded-lg inline-block mt-2">Digital Store</span>
          </h1>

          <p className="max-w-md mt-6 text-lg">
            Create your own landing page and storefront to promote content, products, and affiliate links.
          </p>

          <div className="flex flex-col gap-4 mt-10 sm:flex-row">
            <Link href="/onboarding">
              <Button size="lg" className="gap-2 group bg-primary text-black hover:bg-primary/90 font-bold text-lg">
                Start Your Store
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/examples">
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/5">
                See Examples
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

