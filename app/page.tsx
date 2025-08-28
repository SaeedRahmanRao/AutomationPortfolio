import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitlabIcon as GitHub, Linkedin, Mail, Calendar, Download, Phone } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsGrid from "@/components/skills-grid"
import ProjectCard from "@/components/project-card"
import { BubbleChat } from 'flowise-embed-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="container py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold">Saeed ur Rahman</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              AI Agent & Automation Expert | Full Stack Developer
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Helping businesses automate smarter workflows and build scalable tech solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="/resume/SaeedRahman-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8" >About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a Computer Science graduate with hands-on experience in automating business processes using
                platforms like n8n, Zapier, and Voiceflow. I build intelligent workflows, smart chatbots, and full-stack
                tools that help streamline tasks and scale solutions.
              </p>
              <p className="text-lg">
                With a strong foundation in modern web technologies and a passion for automation, I create efficient
                systems that save time and resources while enhancing overall business performance.
              </p>
            </div>
            <div>
            <Image
              src="/saeed-photo.png"
              alt="Saeed ur Rahman"
              width={256}
              height={256}
              className="rounded-full object-cover mt-8 md:mt-0 ml-20 mx-auto"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="content">Content & AI</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="others">Others</TabsTrigger>
            </TabsList>

            <TabsContent value="automation" className="mt-4">
              <SkillsGrid
                skills={[
                  { name: "n8n", icon: "Workflow" },
                  { name: "Zapier", icon: "Zap" },
                  { name: "Make", icon: "Link" },
                  { name: "Gumloop", icon: "Circle" },
                  { name: "Flowise", icon: "Workflow" },
                  { name: "GHL", icon: "Flag" },
                  { name: "HubSpot", icon: "AtSign" },
                  { name: "Voiceflow", icon: "MessageSquare" },
                  { name: "Vapi", icon: "Phone" },     
                  { name: "MCP", icon: "Settings" },
                ]}
              />
            </TabsContent>

            <TabsContent value="content" className="mt-4">
              <SkillsGrid
                skills={[
                  { name: "Synthesia", icon: "Video" },
                  { name: "Runway", icon: "Film" },
                  { name: "Heygen", icon: "Camera" },
                ]}
              />
            </TabsContent>

            <TabsContent value="frontend" className="mt-4">
              <SkillsGrid
                skills={[
                  { name: "React.js", icon: "Code" },
                  { name: "Next.js", icon: "Code" },
                  { name: "Tailwind CSS", icon: "Paintbrush" },
                ]}
              />
            </TabsContent>

            <TabsContent value="backend" className="mt-4">
              <SkillsGrid
                skills={[
                  { name: "Node.js", icon: "Server" },
                  { name: "Express", icon: "Server" },
                  { name: "MongoDB", icon: "Database" },
                  { name: "Prisma", icon: "Database" },
                  { name: "SQL", icon: "Database" },
                  { name: "Firebase", icon: "Flame" },
                ]}
              />
            </TabsContent>

            <TabsContent value="others" className="mt-4">
              <SkillsGrid
                skills={[
                  { name: "Git", icon: "GitBranch" },
                  { name: "Streamlit", icon: "BarChart" },
                  { name: "WordPress API", icon: "Globe" },
                  { name: "Gmail API", icon: "Mail" },
                  { name: "Notion API", icon: "FileText" },
                  { name: "Google Sheets API", icon: "Table" },
                  { name: "Vercel", icon: "Cloud" },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      /*{/* Projects Section
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Full-stack Issue Tracker"
              description="A comprehensive issue tracking dashboard for development teams"
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "Prisma", "SQL"]}
              demoUrl="#"
              githubUrl="#"
              icon="Bug"
            />

            <ProjectCard
              title="Social Media App Interface"
              description="Real-time social media UI with dynamic feed and interactions"
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Firebase"]}
              demoUrl="#"
              githubUrl="#"
              icon="Users"
            />

            <ProjectCard
              title="eCommerce Store"
              description="Full-featured online store with cart, checkout and payment integration"
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Node.js", "MongoDB"]}
              demoUrl="#"
              githubUrl="#"
              icon="ShoppingCart"
            />

            <ProjectCard
              title="Weather Dashboard"
              description="Interactive weather app with forecast and location search"
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "OpenWeatherMap API"]}
              demoUrl="#"
              githubUrl="#"
              icon="Cloud"
            />

            <ProjectCard
              title="SEO Content Pipeline"
              description="Automated SEO content generation and publishing system"
              image="/placeholder.svg?height=300&width=500"
              tags={["n8n", "WordPress API"]}
              demoUrl="#"
              githubUrl="#"
              icon="FileText"
            />

            <ProjectCard
              title="Data Visualization Dashboard"
              description="Interactive data visualization dashboard for business analytics"
              image="/placeholder.svg?height=300&width=500"
              tags={["Python", "Streamlit", "Pandas"]}
              demoUrl="#"
              githubUrl="#"
              icon="BarChart"
            />
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <span>raosaeedrahmankhan@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <span>+923106096384</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Calendar className="text-primary" />
                  {/* <a href="https://calendly.com/raosaeedrahmankhan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Schedule a meeting
                  </a> 
                </div> */}
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/saeed-ur-rahman-802911256/"
                    className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/SaeedRahmanRao"
                    className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors"
                  >
                    <GitHub size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Saeed ur Rahman. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

