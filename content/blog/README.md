# Blog Posts

This directory contains all blog posts for the portfolio website. Each blog post is stored as an individual HTML file.

## File Structure

```
content/blog/
├── README.md
├── getting-started-with-automation.html
├── building-ai-chatbots.html
└── workflow-automation-best-practices.html
```

## Adding New Blog Posts

To add a new blog post:

1. Create a new HTML file in this directory with the following naming convention:
   - Use kebab-case (lowercase with hyphens)
   - Example: `my-new-blog-post.html`

2. Use the following HTML template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Blog Post Title</title>
    <meta name="description" content="Brief description of your blog post">
    <meta name="date" content="YYYY-MM-DD">
    <meta name="readTime" content="X min read">
    <meta name="category" content="Category Name">
    <meta name="tags" content="tag1,tag2,tag3">
</head>
<body>
    <article>
        <h2>Your Main Heading</h2>
        <p>Your blog content goes here...</p>
        
        <h3>Subheading</h3>
        <p>More content...</p>
        
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Wrap up your blog post...</p>
    </article>
</body>
</html>
```

## Metadata Fields

- **title**: The main title of your blog post
- **description**: A brief description (used for SEO and previews)
- **date**: Publication date in YYYY-MM-DD format
- **readTime**: Estimated reading time (e.g., "5 min read")
- **category**: Main category (e.g., "Automation", "AI & Chatbots", "Integration")
- **tags**: Comma-separated list of tags

## Content Guidelines

- Write your content inside the `<article>` tag
- Use semantic HTML elements (h2, h3, h4, p, ul, ol, etc.)
- Keep paragraphs concise and readable
- Use proper heading hierarchy
- Include relevant examples and code snippets when appropriate

## Automation Integration

This structure is designed to work with automation tools. You can:

1. Use n8n or Zapier to automatically create new blog post files
2. Set up webhooks to trigger blog post creation
3. Integrate with content management systems
4. Automate the publishing process

## URL Structure

Blog posts will be accessible at:
- Blog listing: `/blog`
- Individual posts: `/blog/[filename-without-extension]`

Example: `getting-started-with-automation.html` becomes `/blog/getting-started-with-automation`
