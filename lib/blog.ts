import fs from 'fs'
import path from 'path'

export interface BlogPost {
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

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  // Check if the blog directory exists
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.html'))
    .map(fileName => {
      const id = fileName.replace(/\.html$/, '')
      return getBlogPostById(id)
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getBlogPostById(id: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${id}.html`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Extract metadata from HTML head
    const titleMatch = fileContents.match(/<title>(.*?)<\/title>/)
    const descriptionMatch = fileContents.match(/<meta name="description" content="(.*?)"/)
    const dateMatch = fileContents.match(/<meta name="date" content="(.*?)"/)
    const readTimeMatch = fileContents.match(/<meta name="readTime" content="(.*?)"/)
    const categoryMatch = fileContents.match(/<meta name="category" content="(.*?)"/)
    const tagsMatch = fileContents.match(/<meta name="tags" content="(.*?)"/)
    
    // Extract content from body
    const bodyMatch = fileContents.match(/<body>([\s\S]*?)<\/body>/)
    
    if (!titleMatch || !descriptionMatch || !dateMatch || !readTimeMatch || 
        !categoryMatch || !tagsMatch || !bodyMatch) {
      return null
    }

    const title = titleMatch[1]
    const description = descriptionMatch[1]
    const date = dateMatch[1]
    const readTime = readTimeMatch[1]
    const category = categoryMatch[1]
    const tags = tagsMatch[1].split(',')
    const content = bodyMatch[1].replace(/<body>|<\/body>/g, '').trim()
    
    // Create excerpt from first paragraph
    const excerptMatch = content.match(/<p>(.*?)<\/p>/)
    const excerpt = excerptMatch ? excerptMatch[1].substring(0, 150) + '...' : description

    return {
      id,
      title,
      description,
      date,
      readTime,
      category,
      tags,
      content,
      excerpt
    }
  } catch (error) {
    console.error(`Error reading blog post ${id}:`, error)
    return null
  }
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.html'))
    .map(fileName => fileName.replace(/\.html$/, ''))
}
