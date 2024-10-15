import { anthropic } from '@ai-sdk/anthropic';
import { convertToCoreMessages, generateText } from 'ai';
import { JSDOM } from 'jsdom';
import { chromium } from 'playwright';
import { Readability } from '@mozilla/readability';

// Simplified session creation
async function createSession() {
  const response = await fetch(`https://www.browserbase.com/v1/sessions`, {
    method: "POST",
    headers: {
      "x-bb-api-key": process.env.BROWSERBASE_API_KEY as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ projectId: process.env.BROWSERBASE_PROJECT_ID }),
  });
  const { id } = await response.json();
  return id;
}

// Page info fetching from google search
async function getPageInfo(message: string) {
  const sessionId = await createSession();
  const wsUrl = `wss://connect.browserbase.com?apiKey=${process.env.BROWSERBASE_API_KEY}&sessionId=${sessionId}`;
  
  const browser = await chromium.connectOverCDP(wsUrl);
  const page = browser.contexts()[0].pages()[0];
  
  // Use the user's message to create the search query
  const searchQuery = encodeURIComponent(`${message}?`);
  await page.goto(`https://www.google.com/search?q=${searchQuery}`);
  
  const content = await page.content();
  // Parse the content into a readable format
  const dom = new JSDOM(content);

  // Use the Readability library to extract the article content
  const article = new Readability(dom.window.document).parse();
  
  await browser.close();

  // Return the article content
  return article?.textContent || '';
}

// GET request to generate a response based on userMessage
export async function GET(request: Request) {

  const userMessage = "What is the weather in San Francisco?";

  const info = await getPageInfo(userMessage);
  const response = await generateText({
    model: anthropic("claude-3-5-sonnet-20240620"),
    messages: convertToCoreMessages([
      { role: "system", content: "You are a helpful assistant" },
      { role: "user", content: `Info: ${info}\n\nQuestion: ${userMessage}` }
    ]),
  });

  return new Response(JSON.stringify({ content: response.text }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
