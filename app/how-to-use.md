# How to Use the Web Scraper Tool

This page explains how to use the current version of the web scraping tool.

## Understanding the Components

The tool consists of the following key components:

- **`app/lib/browserbase.ts`**: This file contains the core logic for interacting with Browserbase and extracting information from web pages.
  - `createSession()`: Creates a new Browserbase session.
  - `getPageInfo(message, summarize)`: Navigates to a Google search results page based on the `message`, extracts the main content from the first result, and optionally summarizes it if `summarize` is true.
  - `summarizeText(text)`: Uses an AI model to summarize the given text.
- **`app/api/chat/route.ts`**: This is your API endpoint that handles incoming requests.
  - It accepts a POST request with a JSON body containing:
    - `userMessage`: The search query or question.
    - `outputFormat`: The desired output format (`text`, `json`, or `markdown`).
    - `summarize`: A boolean indicating whether to summarize the extracted content.
  - It uses `getPageInfo` to fetch the content.
  - It formats the extracted content based on `outputFormat`.
  - It uses an AI model to generate a response based on the extracted content and the user's message.
  - It returns a JSON response containing:
    - `content`: The AI-generated response.
    - `extractedContent`: The extracted content in the specified format.
- **`app/page.tsx`**: This is your home page, which currently just has links to the docs and history page.
- **`app/history/page.tsx`**: This is a placeholder for the history page.

## How to Use the Tool

Since you don't have a UI yet, you'll need to use a tool like `curl`, Postman, or a similar API testing tool to send POST requests to your API endpoint.

### Example using `curl`:

1.  **Basic Text Output:**
    ```bash
    curl -X POST \
      -H "Content-Type: application/json" \
      -d '{
        "userMessage": "What is the capital of France?",
        "outputFormat": "text",
        "summarize": false
      }' \
      http://localhost:3000/api/chat
    ```
    Replace `http://localhost:3000` with your actual development server address. This will return a JSON response with the AI's answer and the extracted text.

2.  **JSON Output:**
    ```bash
    curl -X POST \
      -H "Content-Type: application/json" \
      -d '{
        "userMessage": "What is the capital of France?",
        "outputFormat": "json",
        "summarize": false
      }' \
      http://localhost:3000/api/chat
    ```
    This will return a JSON response with the AI's answer and the extracted text as a JSON object.

3.  **Markdown Output:**
    ```bash
    curl -X POST \
      -H "Content-Type: application/json" \
      -d '{
        "userMessage": "What is the capital of France?",
        "outputFormat": "markdown",
        "summarize": false
      }' \
      http://localhost:3000/api/chat
    ```
    This will return a JSON response with the AI's answer and the extracted text in markdown format.

4.  **Summarized Text Output:**
    ```bash
    curl -X POST \
      -H "Content-Type: application/json" \
      -d '{
        "userMessage": "What is the capital of France?",
        "outputFormat": "text",
        "summarize": true
      }' \
      http://localhost:3000/api/chat
    ```
    This will return a JSON response with the AI's answer and the summarized extracted text.

**Explanation:**

- `-X POST`: Specifies that you are making a POST request.
- `-H "Content-Type: application/json"`: Sets the content type of the request to JSON.
- `-d '{...}'`: Provides the JSON data for the request body.
- `http://localhost:3000/api/chat`: The URL of your API endpoint.

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