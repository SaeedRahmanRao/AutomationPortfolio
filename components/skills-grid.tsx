import type React from "react"
import Image, { StaticImageData } from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  AtSign,
  BarChart,
  Camera,
  Circle,
  Cloud,
  Code,
  Database,
  Film,
  Flame,
  FlowerIcon as Flow,
  GitBranch,
  Globe,
  FileText,
  Link,
  Mail,
  MessageSquare,
  Paintbrush,
  Server,
  Table,
  Video,
  Workflow,
  Flag,
  Zap,
  Phone,      // Added for Vapi
  Settings,   // Added for MCP
} from "lucide-react"

interface SkillProps {
  name: string
  icon: string | StaticImageData // <-- Allow both string and imported image
}

interface SkillsGridProps {
  skills: SkillProps[]
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  // Map of icon names to Lucide React components
  const iconMap: Record<string, React.ReactNode> = {
    AtSign: <AtSign className="h-6 w-6" />,
    BarChart: <BarChart className="h-6 w-6" />,
    Camera: <Camera className="h-6 w-6" />,
    Circle: <Circle className="h-6 w-6" />,
    Cloud: <Cloud className="h-6 w-6" />,
    Code: <Code className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />,
    Film: <Film className="h-6 w-6" />,
    Flame: <Flame className="h-6 w-6" />,
    Flow: <Flow className="h-6 w-6" />,
    GitBranch: <GitBranch className="h-6 w-6" />,
    Globe: <Globe className="h-6 w-6" />,
    FileText: <FileText className="h-6 w-6" />,
    Link: <Link className="h-6 w-6" />,
    Mail: <Mail className="h-6 w-6" />,
    MessageSquare: <MessageSquare className="h-6 w-6" />,
    Paintbrush: <Paintbrush className="h-6 w-6" />,
    Server: <Server className="h-6 w-6" />,
    Table: <Table className="h-6 w-6" />,
    Video: <Video className="h-6 w-6" />,
    Workflow: <Workflow className="h-6 w-6" />,
    Flag: <Flag className="h-6 w-6" />,
    Zap: <Zap className="h-6 w-6" />,
    Phone: <Phone className="h-6 w-6" />,         // Added for Vapi
    Settings: <Settings className="h-6 w-6" />,   // Added for MCP
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="overflow-hidden border-muted transition-all hover:shadow-md hover:border-primary/20"
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="rounded-full p-3 bg-muted mb-3">
              {typeof skill.icon !== "string" ? (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              ) : (
                iconMap[skill.icon] || null
              )}
            </div>
            <p className="font-medium">{skill.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
