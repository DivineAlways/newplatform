import { JSDOM } from 'jsdom';
import { chromium } from 'playwright';
import { Readability } from '@mozilla/readability';

// Simplified session creation
async function createSession() {
  const bb_api_key = process.env.BROWSERBASE_API_KEY!
  const response = await fetch(`https://www.browserbase.com/v1/sessions`, {
    method: "POST",
    headers: {
      "x-bb-api-key": bb_api_key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ projectId: process.env.BROWSERBASE_PROJECT_ID }),
  });
  const { id } = await response.json();
  return id;
}

// Page info fetching from google search
async function getPageInfo(message: string, maxChars: number = 10000) {
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
  let textContent = article?.textContent || '';
  
  // Limit the text content
  if (textContent.length > maxChars) {
    textContent = textContent.substring(0, maxChars);
  }

  return textContent;
}

export { createSession, getPageInfo };
