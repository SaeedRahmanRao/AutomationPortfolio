import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Saeed ur Rahman - AI Agent & Automation Expert",
  description: "Portfolio of Saeed ur Rahman, AI Agent & Automation Expert, Full Stack Developer",
    generator: 'v0.dev'
}

// TypeScript declaration for Zapier custom element
declare global {
  // Ensure this is outside any other namespace or interface
  namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "is-popup"?: string;
        "chatbot-id"?: string;
      };
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async type="module" src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          {/* @ts-ignore */}
          <zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="cmdbsal2j003zkabx3hoox27n"></zapier-interfaces-chatbot-embed>
        </ThemeProvider>
      </body>
    </html>
  )
}