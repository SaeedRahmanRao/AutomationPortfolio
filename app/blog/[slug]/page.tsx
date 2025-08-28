"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
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

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch the specific blog post
        const postResponse = await fetch(`/api/blog?slug=${params.slug}`)
        if (postResponse.ok) {
          const postData = await postResponse.json()
          setPost(postData)
        } else {
          notFound()
        }

        // Fetch all posts for related articles
        const allPostsResponse = await fetch('/api/blog')
        if (allPostsResponse.ok) {
          const allPosts = await allPostsResponse.json()
          const related = allPosts
            .filter((p: BlogPost) => p.id !== params.slug)
            .slice(0, 2)
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error('Error fetching blog data:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogData()
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <div className="text-muted-foreground">Loading blog post...</div>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">


      {/* Article Header */}
      <div className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={14} />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{relatedPost.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <BookOpen size={12} />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.id}`} className="hover:underline">
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
