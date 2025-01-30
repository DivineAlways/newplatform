import { anthropic } from '@ai-sdk/anthropic';
import { convertToCoreMessages, generateText } from 'ai';
import { getPageInfo } from '@/app/lib/browserbase';

export async function POST(request: Request) {
    try {
        const { userMessage, outputFormat, summarize } = await request.json();

        if (!userMessage) {
            return new Response(JSON.stringify({ error: "userMessage is required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const info = await getPageInfo(userMessage, summarize);

        let responseContent;

        if (outputFormat === 'json') {
            responseContent = JSON.stringify({ content: info });
        } else if (outputFormat === 'markdown') {
            responseContent = `\`\`\`\n${info}\n\`\`\``;
        } else {
            responseContent = info;
        }

        const aiResponse = await generateText({
            model: anthropic("claude-3-5-sonnet-20240620"),
            messages: convertToCoreMessages([
                { role: "system", content: "You are a helpful assistant for e-commerce and lead generation." },
                { role: "user", content: `Info: ${info}\n\nQuestion: ${userMessage}` }
            ]),
        });

        return new Response(JSON.stringify({ content: aiResponse.text, extractedContent: responseContent }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error: unknown) {
        console.error("API Error:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
