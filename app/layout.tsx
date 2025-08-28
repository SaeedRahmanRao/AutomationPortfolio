import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Chatbot from "@/components/chatbot"

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
      "vapi-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "assistant-id"?: string;
        "public-key"?: string;
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
        <script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          async
          type="text/javascript"
        ></script>
        {/* <style dangerouslySetInnerHTML={{
          __html: `
            .vapi-widget-container {
              position: fixed;
              bottom: 20px;
              right: 20px;
              z-index: 9999;
            }
            
            .chatbot-container {
              position: fixed;
              bottom: 20px;
              right: 20px;
              z-index: 9998;
            }
          `
        }} /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Chatbot />
          {/* <div className="chatbot-container">
            {/* @ts-ignore */}
            {/*<zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="cmdbsal2j003zkabx3hoox27n"></zapier-interfaces-chatbot-embed>
          </div>
          <div className="vapi-widget-container">
            {/* @ts-ignore */}
           {/*} <vapi-widget assistant-id="306da57c-b295-4783-9206-7a0df0a4d29c" public-key="23566303-b8f0-499e-841e-401f6aa4b1be"></vapi-widget>
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  )
}