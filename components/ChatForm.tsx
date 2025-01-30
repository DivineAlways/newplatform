'use client';

import BaseEndpointForm from './endpoints/BaseEndpointForm';

export default function ChatForm() {
  return (
    <BaseEndpointForm
      endpoint="chat"
      title="Chat Interface"
      description="General chat and conversation interface for natural language interactions."
      extraFields={
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="summarize"
              className="rounded"
            />
            <span className="text-sm text-black dark:text-white">Summarize content</span>
          </label>
        </div>
      }
    />
  );
}
