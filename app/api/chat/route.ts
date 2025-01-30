import { anthropic } from '@ai-sdk/anthropic';
import { convertToCoreMessages, generateText } from 'ai';
import { getPageInfo } from '@/app/lib/browserbase'; // Import the function

// GET request to generate a response based on userMessage
export async function GET(request: Request) {

  const userMessage = "What is the weather in Atlanta Ga today?";

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
