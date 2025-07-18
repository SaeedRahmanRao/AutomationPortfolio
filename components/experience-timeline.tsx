"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Calendar, Bot, Upload, FileText, Mail, Database, Users, Globe, BarChart2, ShoppingCart, CloudSun, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExperienceTimeline() {
  const [tab, setTab] = useState<"automation" | "webdev">("automation")
  const [showAll, setShowAll] = useState(false)

  type Project = {
    title: string
    description: string
    tools: string
    icon: React.ReactNode
    demoUrl?: string
  }

  const automationProjects: Project[] = [
    {
      title: "MCP Server (Model-Context-Protocol)",
      description: "AI-native workflow execution: Accepts natural-language prompts, auto-creates/updates Airtable tasks, generates summaries with Gemini, and sends Slack updates.",
      tools: "n8n, Airtable, Gemini, Slack, Clause, Cursor",
      icon: <Brain className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_aiinfra-mcp-autonomousagents-activity-7351203846628458497-G_3q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Lead Capturing & Notification Bot",
      description: "Captures leads via webhook, validates & scores, stores in Sheets, sends Slack alerts and follow-up emails.",
      tools: "n8n, Google Sheets, Slack, Gmail, Webhook",
      icon: <Users className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_n8n-automation-nocode-activity-7350902619491467264-f2h5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "AI Voice Appointment Setter",
      description: "Voice agent handles calls, understands intent, books slots in Google/Outlook, sends confirmations, supports reschedules/reminders.",
      tools: "Vapi.ai, Make.com, Gemini AI, Google Calendar, Outlook, ElevenLabs",
      icon: <Bot className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-voiceautomation-geminiai-activity-7331061531855491094-Vcw6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "YouTube Video Summarizer",
      description: "Fetches latest YouTube videos, summarizes with Gemini, stores in Google Docs, sends email updates.",
      tools: "Gemini, Google Docs, Make, Email",
      icon: <FileText className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-youtube-activity-7305263247970992129-Au21?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",

    },
    {
      title: "Multi-Stage RAG (in Flowise)",
      description: "Routes queries to vector DB/web, grades for relevance, self-corrects, detects hallucinations, fallback for low confidence.",
      tools: "Flowise",
      icon: <Brain className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-rag-retrievalaugmentedgeneration-activity-7304427112407429120-iCy3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "AI Research Agent",
      description: "Real-time web search, chat & analysis with AI, up-to-date and reliable responses.",
      tools: "Serper API, Ollama (LLaMA), Flowise",
      icon: <Bot className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-researchagent-activity-7303707464615526400-8Lo6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Web Scraper + Enrichment Automation",
      description: "Scrapes company data, enriches with Apollo/SimilarWeb/ProxyClub/ChatGPT, stores structured data in Sheets.",
      tools: "Web Scraper, Apollo, SimilarWeb, ProxyClub, ChatGPT, Google Sheets, Gumloop",
      icon: <Database className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-webscraping-activity-7303340288637337601-904E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "AI Chatbot with Humor (Local Setup)",
      description: "Chatbot with memory, humor, file upload support. Runs locally with full control.",
      tools: "Flowise, Ollama",
      icon: <Bot className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-chatbot-flowise-activity-7303151776730406913-wRIZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Social Media Auto Poster",
      description: "Generates content with Gemini and auto-posts to LinkedIn, Facebook, Instagram.",
      tools: "Google Sheets, Gemini, Make.com",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-socialmedia-activity-7302975342216900608-lNya?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Form Response Automation",
      description: "Parses and stores form responses, uses AI for analysis, sends personalized follow-ups.",
      tools: "Google Forms, Text Parser, Google Sheets, Gemini, Email, Make.com",
      icon: <Mail className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-productivity-activity-7302666153951191040-pkcp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Blog Post Generator",
      description: "Input blog topic, AI generates post, final output in Google Docs.",
      tools: "Google Sheets, Gemini, Google Docs, Make.com",
      icon: <FileText className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-contentmarketing-activity-7302380852917788673-riaX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Email Autoresponder",
      description: "AI-powered responses to inquiries, fully automated communication.",
      tools: "Make.com, Gemini AI",
      icon: <Mail className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-emailautomation-activity-7302261758096793600-6NaH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "AI Agent with Calendar Integration",
      description: "Handles chat interactions, manages scheduling and memory.",
      tools: "n8n, Google Gemini, Google Calendar",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-n8n-activity-7301932944468668416-A6Sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Automated Resume Screening",
      description: "Built a workflow that automatically screens and ranks resumes based on job requirements.",
      tools: "Gumloop + ChatGPT + OCR pdf parsing",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Social Media Scheduler",
      description: "Developed an automated system to schedule and post social media content across platforms.",
      tools: "Make + Zapier",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_ai-automation-socialmedia-activity-7302975342216900608-lNya?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "YouTube Upload Automation",
      description: "Created a workflow to automate video uploads, metadata management, and scheduling.",
      tools: "n8n",
      icon: <Upload className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI Blog Publishing",
      description: "Built a pipeline for generating, reviewing, and publishing SEO-optimized blog content.",
      tools: "WordPress API + n8n",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "Appointment Setter Bot",
      description: "Developed a conversational bot that schedules appointments based on availability.",
      tools: "N8N, GHL, Zapier",
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Email Responder",
      description: "Created an intelligent email responder that categorizes and replies to inquiries.",
      tools: "Make + Gmail API",
      icon: <Mail className="h-10 w-10 text-primary" />,
    },
    {
      title: "Web Scraper",
      description: "Built a system to extract data from websites and organize it in structured Notion databases.",
      tools: "Make",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Lead Manager",
      description: "Developed an automated lead management system for tracking, nurturing, and converting leads.",
      tools: "GHL, HubSpot, Sheets",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ]

  const webDevProjects: Project[] = [
    {
      title: "Issue Tracker Dashboard",
      description: "Functional project management features like ticket status, assignment, filters.",
      tools: "Next.js, Prisma, Node.js, SQL",
      icon: <LayoutList className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_developed-a-full-stack-issue-tracker-using-activity-7231978864107810816-cWhL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Personal Portfolio",
      description: "Integrated Voiceflow chatbot for interactive user experience. Showcases automation and AI projects.",
      tools: "Next.js, React.js, Tailwind CSS, Vercel",
      icon: <Globe className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_nextjs-voiceflow-ai-activity-7298631707165868033-3Vmk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Social Media App Interface",
      description: "Includes posts, comments, and user authentication. Real-time features using Firebase.",
      tools: "React.js, Firebase",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Billing Receipt Generator with PRA Integration (Dough Joe Pizza Shop)",
      description:
        "A real-time billing receipt generator for Dough Joe Pizza Shop, built with Next.js. Integrates with Pakistan Revenue Automation (PRA) for tax compliance. Calculates orders, applies discounts, supports dynamic tax (5% or 16%), and generates PRA-compliant invoices. Uses server-side rendering for real-time updates and Tailwind CSS for styling.",
      tools: "Next.js, Tailwind CSS, PRA API",
      icon: <FileText className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_billing-receipt-generator-with-pra-integration-activity-7288867633175621633-UJvo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Visualized data trends and stats dynamically — useful in AI/ML analytics.",
      tools: "Python, Streamlit, Pandas, Matplotlib",
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_bigdata-datascience-machinelearning-activity-7290816661631229952-1L3Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Weather Web App",
      description: "Real-time weather data and visual interface for global search.",
      tools: "Next.js, Tailwind CSS, OpenWeatherMap API",
      icon: <CloudSun className="h-10 w-10 text-primary" />,
      demoUrl: "https://www.linkedin.com/posts/saeed-ur-rahman-802911256_i-developed-skycast-a-weather-app-built-activity-7291548148538191872-Dyug?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8jqEIBZp0L7uZ34jbsg6ycHNOY55g4JWw",
    },
    {
      title: "Full-Stack eCommerce Website",
      description: "Includes product catalog, cart, checkout, and order management.",
      tools: "React.js, Node.js, Express, MongoDB",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
  ]

  const projects = tab === "automation" ? automationProjects : webDevProjects
  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <div>
      <div className="flex gap-4 mb-8">
        <Button
          variant={tab === "automation" ? "default" : "outline"}
          onClick={() => { setTab("automation"); setShowAll(false); }}
        >
          Automation
        </Button>
        <Button
          variant={tab === "webdev" ? "default" : "outline"}
          onClick={() => { setTab("webdev"); setShowAll(false); }}
        >
          Web Development
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((exp, index) => (
          <Card
            key={index}
            className="overflow-hidden border border-muted transition-all hover:shadow-md hover:border-primary/20"
          >
            <CardHeader className="pb-3">
              <div className="mb-2">{exp.icon}</div>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription className="text-sm text-primary font-medium">{exp.tools}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              {exp.demoUrl && (
                <Button asChild size="sm" variant="outline">
                  <a href={exp.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Demo
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {projects.length > 6 && (
        <div className="flex justify-center mt-8">
          <Button variant="secondary" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  )
}
