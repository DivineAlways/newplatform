import { JSDOM } from 'jsdom';
import { chromium } from 'playwright';
import { Readability } from '@mozilla/readability';
import { generateText, convertToCoreMessages } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

// Simplified session creation
async function createSession() {
  try {
    const bb_api_key = process.env.BROWSERBASE_API_KEY!;
    const response = await fetch(`https://www.browserbase.com/v1/sessions`, {
      method: "POST",
      headers: {
        "x-bb-api-key": bb_api_key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId: process.env.BROWSERBASE_PROJECT_ID }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to create session: ${response.status} - ${JSON.stringify(error)}`);
    }

    const { id } = await response.json();
    return id;
  } catch (error: any) {
    console.error("Error creating session:", error);
    throw new Error(`Failed to create session: ${error.message}`);
  }
}

// Function to summarize text using the AI model
async function summarizeText(text: string, maxChars: number = 10000) {
    try {
        const response = await generateText({
            model: anthropic("claude-3-5-sonnet-20240620"),
            messages: convertToCoreMessages([
                { role: "system", content: "You are a helpful assistant that summarizes text." },
                { role: "user", content: `Summarize the following text:\n\n${text.substring(0, maxChars)}` }
            ]),
        });
        return response.text;
    } catch (error: any) {
        console.error("Error summarizing text:", error);
        throw new Error(`Failed to summarize text: ${error.message}`);
    }
}


// Page info fetching from google search
async function getPageInfo(message: string, summarize: boolean = false, maxChars: number = 10000) {
  try {
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

    if (summarize) {
        textContent = await summarizeText(textContent, maxChars);
    }

    return textContent;
  } catch (error: any) {
    console.error("Error getting page info:", error);
    throw new Error(`Failed to get page info: ${error.message}`);
  }
}

export { createSession, getPageInfo };
