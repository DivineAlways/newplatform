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
