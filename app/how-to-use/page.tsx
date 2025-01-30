import Link from 'next/link';
import React from 'react';

export default function HowToUsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>How to Use the Web Scraper Tool</h1>
        <p>
          This page explains how to use the current version of the web scraping tool.
        </p>

        <section>
          <h2>Understanding the Components</h2>
          <p>
            The tool consists of the following key components:
          </p>
          <ul>
            <li>
              <strong>`app/lib/browserbase.ts`</strong>: This file contains the core logic for interacting with Browserbase and extracting information from web pages.
              <ul>
                <li>
                  `createSession()`: Creates a new Browserbase session.
                </li>
                <li>
                  `getPageInfo(message, summarize)`: Navigates to a Google search results page based on the `message`, extracts the main content from the first result, and optionally summarizes it if `summarize` is true.
                </li>
                 <li>
                  `summarizeText(text)`: Uses an AI model to summarize the given text.
                </li>
              </ul>
            </li>
            <li>
              <strong>`app/api/chat/route.ts`</strong>: This is your API endpoint that handles incoming requests.
              <ul>
                <li>
                  It accepts a POST request with a JSON body containing:
                  <ul>
                    <li>
                      `userMessage`: The search query or question.
                    </li>
                    <li>
                      `outputFormat`: The desired output format (`text`, `json`, or `markdown`).
                    </li>
                     <li>
                      `summarize`: A boolean indicating whether to summarize the extracted content.
                    </li>
                  </ul>
                </li>
                <li>
                  It uses `getPageInfo` to fetch the content.
                </li>
                <li>
                  It formats the extracted content based on `outputFormat`.
                </li>
                 <li>
                  It uses an AI model to generate a response based on the extracted content and the user's message.
                </li>
                <li>
                  It returns a JSON response containing:
                  <ul>
                    <li>
                      `content`: The AI-generated response.
                    </li>
                    <li>
                      `extractedContent`: The extracted content in the specified format.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>`app/page.tsx`</strong>: This is your home page, which currently just has links to the docs and history page.
            </li>
            <li>
              <strong>`app/history/page.tsx`</strong>: This is a placeholder for the history page.
            </li>
          </ul>
        </section>

        <section>
          <h2>How to Use the Tool</h2>
          <p>
            Since you don't have a UI yet, you'll need to use a tool like `curl`, Postman, or a similar API testing tool to send POST requests to your API endpoint.
          </p>
          <h3>Example using `curl`:</h3>
          <ol>
            <li>
              <strong>Basic Text Output:</strong>
              <pre>
                <code>
                  curl -X POST \
                    -H "Content-Type: application/json" \
                    -d '{`\n`
                      "userMessage": "What is the capital of France?",`\n`
                      "outputFormat": "text",`\n`
                      "summarize": false`\n`
                    }' \
                    http://localhost:3000/api/chat
                </code>
              </pre>
              <p>
                Replace `http://localhost:3000` with your actual development server address.
                This will return a JSON response with the AI's answer and the extracted text.
              </p>
            </li>
            <li>
              <strong>JSON Output:</strong>
              <pre>
                <code>
                  curl -X POST \
                    -H "Content-Type: application/json" \
                    -d '{`\n`
                      "userMessage": "What is the capital of France?",`\n`
                      "outputFormat": "json",`\n`
                      "summarize": false`\n`
                    }' \
                    http://localhost:3000/api/chat
                </code>
              </pre>
              <p>
                This will return a JSON response with the AI's answer and the extracted text as a JSON object.
              </p>
            </li>
            <li>
              <strong>Markdown Output:</strong>
              <pre>
                <code>
                  curl -X POST \
                    -H "Content-Type: application/json" \
                    -d '{`\n`
                      "userMessage": "What is the capital of France?",`\n`
                      "outputFormat": "markdown",`\n`
                      "summarize": false`\n`
                    }' \
                    http://localhost:3000/api/chat
                </code>
              </pre>
              <p>
                This will return a JSON response with the AI's answer and the extracted text in markdown format.
              </p>
            </li>
             <li>
              <strong>Summarized Text Output:</strong>
              <pre>
                <code>
                  curl -X POST \
                    -H "Content-Type: application/json" \
                    -d '{`\n`
                      "userMessage": "What is the capital of France?",`\n`
                      "outputFormat": "text",`\n`
                      "summarize": true`\n`
                    }' \
                    http://localhost:3000/api/chat
                </code>
              </pre>
              <p>
                This will return a JSON response with the AI's answer and the summarized extracted text.
              </p>
            </li>
          </ol>
          <p>
            <strong>Explanation:</strong>
          </p>
          <ul>
            <li>
              `-X POST`: Specifies that you are making a POST request.
            </li>
            <li>
              `-H "Content-Type: application/json"`: Sets the content type of the request to JSON.
            </li>
            <li>
              `-d '{...}'`: Provides the JSON data for the request body.
            </li>
            <li>
              `http://localhost:3000/api/chat`: The URL of your API endpoint.
            </li>
          </ul>
        </section>

        <section>
          <h2>Important Notes:</h2>
          <ul>
            <li>
              <strong>Environment Variables:</strong> Make sure you have set the `BROWSERBASE_API_KEY` and `BROWSERBASE_PROJECT_ID` environment variables in your `.env.local` file.
            </li>
            <li>
              <strong>Development Server:</strong> Ensure your Next.js development server is running (`npm run dev` or `yarn dev`).
            </li>
             <li>
              <strong>Error Handling:</strong> The API endpoint includes error handling, so if something goes wrong, you'll receive a JSON response with an error message.
            </li>
          </ul>
        </section>

        <section>
          <h2>Next Steps:</h2>
          <ol>
            <li>
              <strong>Build a UI:</strong> You'll need to create a user interface (using React, for example) that allows users to input their queries, select output formats, and view the results. This UI will send POST requests to the `/api/chat` endpoint.
            </li>
            <li>
              <strong>Implement History:</strong> You'll need to implement the history page to store and display previous queries and results.
            </li>
            <li>
              <strong>Monetization:</strong> You'll need to implement a payment system to handle subscriptions or API access.
            </li>
          </ol>
        </section>
        <Link href="/">Back to Home</Link>
      </div>
    </main>
  );
}
