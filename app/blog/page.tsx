"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content: string
  excerpt: string
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        if (response.ok) {
          const posts = await response.json()
          setBlogPosts(posts)
        } else {
          console.error('Failed to fetch blog posts')
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return (
    <div className="min-h-screen bg-background">




      {/* Blog Header */}
      <div className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Blogs</h1>
              <p className="text-muted-foreground mt-2">
                Insights on automation, AI, and modern development practices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-muted-foreground">Loading blog posts...</div>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-muted-foreground">No blog posts found.</div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="group">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                                 </div>
               </CardContent>
             </Card>
           ))}
          </div>
        )}
      </div>
    </div>
  )
}
