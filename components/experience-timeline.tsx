import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Calendar, Bot, Upload, FileText, Mail, Database, Users } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Automated Resume Screening",
      description: "Built a workflow that automatically screens and ranks resumes based on job requirements.",
      tools: "n8n + Gemini AI",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Social Media Scheduler",
      description: "Developed an automated system to schedule and post social media content across platforms.",
      tools: "Make + Zapier",
      icon: <Calendar className="h-10 w-10 text-primary" />,
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
      tools: "Flowsie, GHL, Zapier",
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Email Responder",
      description: "Created an intelligent email responder that categorizes and replies to inquiries.",
      tools: "Gumloop + Gmail API",
      icon: <Mail className="h-10 w-10 text-primary" />,
    },
    {
      title: "Web Scraper to Notion",
      description: "Built a system to extract data from websites and organize it in structured Notion databases.",
      tools: "n8n",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Lead Manager",
      description: "Developed an automated lead management system for tracking, nurturing, and converting leads.",
      tools: "GHL, HubSpot, Sheets",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {experiences.map((exp, index) => (
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
            <p className="text-muted-foreground">{exp.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
