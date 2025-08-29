"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm mt-12">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="text-center sm:text-left">
            <a href="/" className="text-xl font-bold">
              Saeed<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              AI Agent & Automation Expert • Full Stack Developer
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
            <a href="/#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="/#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="/blog" className="hover:text-primary transition-colors">Blogs</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:saeed@example.com" aria-label="Email" className="p-2 rounded hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {year} Saeed ur Rahman. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


