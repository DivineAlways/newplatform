# BrowserBase AI Tools Documentation

This documentation explains how to use BrowserBase's AI-powered tools and endpoints.

---

## Core Components

---

### Base Components

- **BaseEndpointForm**: A reusable React component that provides a consistent interface for all endpoints
  - Props:
    - `endpoint`: The API endpoint to use
    - `title`: Form title
    - `description`: Form description
    - `extraFields`: Optional additional form fields

### Backend Components

- **`app/lib/browserbase.ts`**: Core logic for Browserbase interactions
  - `createSession()`: Creates new Browserbase sessions
  - `getPageInfo()`: Handles web content extraction
  - `summarizeText()`: AI-powered text summarization

### API Endpoints

Each endpoint is designed for specific use cases and accepts POST requests with:
- Required fields:
  - `userMessage`: Your query or request
  - `outputFormat`: Response format (`text`, `json`, or `markdown`)
- Optional fields:
  - `summarize`: Whether to summarize content (boolean)
  - Additional fields specific to each endpoint

## Available Endpoints

BrowserBase offers specialized endpoints for different use cases. Each endpoint is accessible through our React components or direct API calls.

### Using the Web Interface

1. Navigate to the desired tool page
2. Fill in the form fields:
   - Enter your query/request
   - Select output format
   - Add any endpoint-specific options
3. Click Submit to process your request

### API Access

All endpoints are accessible via API calls using tools like `curl`, Postman, or any HTTP client. Each endpoint follows this basic structure:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Your request here",
    "outputFormat": "text|json|markdown",
    "summarize": true|false,
    ...endpoint-specific-fields
  }' \
  http://localhost:3000/api/{endpoint-name}
```

### Common Parameters

- `userMessage`: Your query or request
- `outputFormat`: Desired response format
  - `text`: Plain text response
  - `json`: Structured JSON data
  - `markdown`: Formatted markdown
- `summarize`: Optional boolean to request summarized content

## Important Notes:

- **Environment Variables:** Make sure you have set the `BROWSERBASE_API_KEY` and `BROWSERBASE_PROJECT_ID` environment variables in your `.env.local` file.
- **Development Server:** Ensure your Next.js development server is running (`npm run dev` or `yarn dev`).
- **Error Handling:** The API endpoint includes error handling, so if something goes wrong, you'll receive a JSON response with an error message.

## Next Steps:

1.  **Build a UI:** You'll need to create a user interface (using React, for example) that allows users to input their queries, select output formats, and view the results. This UI will send POST requests to the `/api/chat` endpoint.
2.  **Implement History:** You'll need to implement the history page to store and display previous queries and results.
3.  **Monetization:** You'll need to implement a payment system to handle subscriptions or API access.


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


 For each endpoint, you can use tools like `curl`, Postman, or any API testing tool. Here are examples using `curl`:

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
