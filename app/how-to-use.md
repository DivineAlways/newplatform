# How to Use BrowserBase AI Tools

This guide explains how to use the various AI-powered tools available through our API endpoints.

## Available Endpoints

We offer several specialized endpoints for different use cases:

1. `/api/web-scrape` - Web scraping and content extraction
2. `/api/chat` - General chat and conversation
3. `/api/content-creation` - Content generation and writing
4. `/api/market-research` - Market analysis and research
5. `/api/education` - Educational content and learning
6. `/api/ecommerce` - E-commerce and product analysis
7. `/api/social-media` - Social media content and strategy
8. `/api/software-testing` - Software testing assistance
9. `/api/workflow-automation` - Workflow and automation help
10. `/api/accessibility` - Accessibility improvements
11. `/api/ai-browsing` - AI-assisted web browsing

## Endpoint-Specific Usage

Each endpoint accepts POST requests with specific parameters. Here are examples for each endpoint:

### 1. Web Scraping (`/api/web-scrape`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Extract information about Tesla's latest car models",
    "outputFormat": "markdown",
    "summarize": true
  }' \
  http://localhost:3000/api/web-scrape
```

### 2. Chat (`/api/chat`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "What are the benefits of renewable energy?",
    "outputFormat": "text"
  }' \
  http://localhost:3000/api/chat
```

### 3. Content Creation (`/api/content-creation`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Write a blog post about sustainable living",
    "outputFormat": "markdown",
    "tone": "professional"
  }' \
  http://localhost:3000/api/content-creation
```

### 4. Market Research (`/api/market-research`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Analyze the electric vehicle market trends",
    "outputFormat": "json",
    "depth": "detailed"
  }' \
  http://localhost:3000/api/market-research
```

### 5. Education (`/api/education`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Explain quantum computing for beginners",
    "outputFormat": "markdown",
    "level": "beginner"
  }' \
  http://localhost:3000/api/education
```

### 6. E-commerce (`/api/ecommerce`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Analyze pricing strategies for online stores",
    "outputFormat": "json"
  }' \
  http://localhost:3000/api/ecommerce
```

### 7. Social Media (`/api/social-media`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Generate engaging Twitter posts about AI technology",
    "outputFormat": "json",
    "platform": "twitter"
  }' \
  http://localhost:3000/api/social-media
```

### 8. Software Testing (`/api/software-testing`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Generate test cases for a login system",
    "outputFormat": "markdown",
    "testType": "integration"
  }' \
  http://localhost:3000/api/software-testing
```

### 9. Workflow Automation (`/api/workflow-automation`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Create a workflow for content approval process",
    "outputFormat": "json"
  }' \
  http://localhost:3000/api/workflow-automation
```

### 10. Accessibility (`/api/accessibility`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Check website accessibility compliance",
    "outputFormat": "markdown",
    "standard": "WCAG2.1"
  }' \
  http://localhost:3000/api/accessibility
```

### 11. AI Browsing (`/api/ai-browsing`)
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Research and compare cloud service providers",
    "outputFormat": "markdown",
    "depth": "comprehensive"
  }' \
  http://localhost:3000/api/ai-browsing
```

## Important Notes:

- **Environment Variables:** Make sure you have set up your environment variables in `.env.local`
- **Development Server:** Ensure your Next.js development server is running (`npm run dev`)
- **Error Handling:** All endpoints include error handling and will return appropriate error messages
