import { NextRequest, NextResponse } from 'next/server'

// You'll need to install the Google AI SDK
// npm install @google/generative-ai

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    // Check if API key is configured
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    // Import the Google AI SDK dynamically
    const { GoogleGenerativeAI } = await import('@google/generative-ai')
    
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

    // Create context about Saeed's portfolio
    const context = `You are Saeed's AI assistant. Saeed is an AI Agent & Automation Expert and Full Stack Developer. Here's what you should know about him:

Key Information:
- Name: Saeed ur Rahman
- Role: AI Agent & Automation Expert | Full Stack Developer
- Focus: Helping businesses automate smarter workflows and build scalable tech solutions
- Education: Computer Science graduate
- Experience: Hands-on experience in automating business processes

Skills & Expertise:
- Automation Platforms: n8n, Zapier, Make, Gumloop, Flowise, GHL, HubSpot, Voiceflow, Vapi, MCP
- Content & AI: Synthesia, Runway, Heygen
- Frontend: React.js, Next.js, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Prisma, SQL, Firebase
- Other Tools: Git, Streamlit, WordPress API, Gmail API, Notion API, Google Sheets API, Vercel

Services:
- Building intelligent workflows
- Creating smart chatbots
- Developing full-stack tools
- Streamlining tasks and scaling solutions
- Creating efficient systems that save time and resources

Contact:
- Email: raosaeedrahmankhan@gmail.com
- Phone: +923106096384
- LinkedIn: https://www.linkedin.com/in/saeed-ur-rahman-802911256/
- GitHub: https://github.com/SaeedRahmanRao

Your role is to help visitors learn more about Saeed's work, answer questions about his expertise, and provide helpful information about automation and development. Be friendly, professional, and knowledgeable. Keep responses concise but informative.`

    // Prepare conversation history
    let conversationHistory = (history || [])
  .filter((msg: any) => msg.role === 'user' || msg.role === 'assistant') // allow only user & assistant
  .map((msg: any) => ({
    role: msg.role === 'user' ? 'user' : 'model', // map assistant → model
    parts: [{ text: msg.content }]
  }))

// Ensure the first message is from the user, if not, remove until it is
while (conversationHistory.length && conversationHistory[0].role !== 'user') {
  conversationHistory.shift()
}
    // Start chat
    const chat = model.startChat({
      history: conversationHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    })

    // Send message with context
    const prompt = `${context}\n\nUser message: ${message}\n\nPlease respond as Saeed's AI assistant:`
    
    const result = await chat.sendMessage(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ response: text })

  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
