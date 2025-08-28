# Chatbot Setup Instructions

## 🚀 Setting Up Your Gemini AI Chatbot

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Install Required Dependencies

```bash
npm install @google/generative-ai
```

### 3. Configure Environment Variables

Create a `.env.local` file in your project root and add:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Features Included

✅ **Modern Chat Interface**
- Floating chat button in bottom-right corner
- Expandable chat window
- Real-time message exchange
- Loading indicators

✅ **Smart Context**
- Pre-configured with Saeed's portfolio information
- Knows about his skills, experience, and services
- Can answer questions about automation and development

✅ **Responsive Design**
- Works on desktop and mobile
- Matches your portfolio's design theme
- Smooth animations and transitions

✅ **Conversation Memory**
- Remembers chat history for context
- Maintains conversation flow
- Professional and helpful responses

### 5. How It Works

1. **Chat Button**: Fixed floating button in bottom-right corner
2. **Click to Open**: Expands into a full chat interface
3. **AI Assistant**: Powered by Gemini Pro model
4. **Context Aware**: Knows about Saeed's work and expertise
5. **Real-time**: Instant responses with loading indicators

### 6. Customization

You can customize the chatbot by editing:
- `components/chatbot.tsx` - UI and behavior
- `app/api/chatbot/route.ts` - AI responses and context
- Environment variables for API configuration

### 7. Security Notes

- API key is stored in environment variables (not in code)
- `.env.local` is automatically ignored by Git
- Never commit your actual API key to version control

### 8. Testing

Once set up, you can test the chatbot by:
1. Starting your development server: `npm run dev`
2. Opening your portfolio website
3. Clicking the chat button in the bottom-right corner
4. Asking questions about Saeed's work or expertise

The chatbot is now ready to help visitors learn more about your portfolio! 🎉
