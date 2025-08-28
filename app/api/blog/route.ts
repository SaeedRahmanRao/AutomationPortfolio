import { NextResponse } from 'next/server'
import { getAllBlogPosts, getBlogPostById } from '@/lib/blog'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  try {
    if (slug) {
      // Get specific blog post
      const post = getBlogPostById(slug)
      if (!post) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
      }
      return NextResponse.json(post)
    } else {
      // Get all blog posts
      const posts = getAllBlogPosts()
      return NextResponse.json(posts)
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
