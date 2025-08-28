"use client"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { useState } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold">
            Saeed<span className="text-primary">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="items-center space-x-6">
            <a href="/#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            <a href="/#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="/blog" className="hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild size="sm" className="inline-flex">
              <a href="/#contact">Let's Connect</a>
            </Button>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur-sm">
          <div className="container py-4 space-y-3">
            <a 
              href="/#about" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/#experience" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="/#skills" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="/blog" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/#contact" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild size="sm" className="w-full mt-4">
              <a href="/#contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
