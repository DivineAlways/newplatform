import { anthropic } from '@ai-sdk/anthropic';
import { convertToCoreMessages, generateText } from 'ai';

export async function POST(request: Request) {
    try {
        const { userMessage } = await request.json();

        if (!userMessage) {
            return new Response(JSON.stringify({ error: "userMessage is required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const aiResponse = await generateText({
            model: anthropic("claude-3-5-sonnet-20240620"),
            messages: convertToCoreMessages([
                { role: "system", content: "You are a helpful assistant for educational and training platforms." },
                { role: "user", content: userMessage }
            ]),
        });

        return new Response(JSON.stringify({ content: aiResponse.text }), {
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
