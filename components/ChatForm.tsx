'use client';

import { useState } from 'react';

interface ChatResponse {
  content: string;
  extractedContent: string;
}

export default function ChatForm() {
  const [userMessage, setUserMessage] = useState('');
  const [summarize, setSummarize] = useState(false);
  const [outputFormat, setOutputFormat] = useState<'text' | 'markdown' | 'json'>('text');
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage,
          summarize,
          outputFormat,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to get response');
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-black dark:text-white">
            Enter your message
          </label>
          <textarea
            id="message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            rows={4}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={summarize}
              onChange={(e) => setSummarize(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-black dark:text-white">Summarize content</span>
          </label>

          <select
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value as 'text' | 'markdown' | 'json')}
            className="p-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="text">Text</option>
            <option value="markdown">Markdown</option>
            <option value="json">JSON</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {response && (
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <h3 className="font-medium mb-2 text-black dark:text-white">AI Response:</h3>
            <p className="whitespace-pre-wrap text-black dark:text-white">{response.content}</p>
          </div>
          
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <h3 className="font-medium mb-2 text-black dark:text-white">Extracted Content:</h3>
            <p className="whitespace-pre-wrap text-black dark:text-white">{response.extractedContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
