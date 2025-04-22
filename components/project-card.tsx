import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bug, Users, ShoppingCart, Cloud, FileText, BarChart } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  icon: string
}

export default function ProjectCard({ title, description, image, tags, demoUrl, githubUrl, icon }: ProjectCardProps) {
  // Map of icon names to Lucide React components
  const iconMap: Record<string, React.ReactNode> = {
    Bug: <Bug className="h-5 w-5" />,
    Users: <Users className="h-5 w-5" />,
    ShoppingCart: <ShoppingCart className="h-5 w-5" />,
    Cloud: <Cloud className="h-5 w-5" />,
    FileText: <FileText className="h-5 w-5" />,
    BarChart: <BarChart className="h-5 w-5" />,
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-1">
        <div className="flex items-center gap-2">
          <div className="rounded-full p-1 bg-primary/10 text-primary">{iconMap[icon]}</div>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5 hover:bg-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        {demoUrl && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
