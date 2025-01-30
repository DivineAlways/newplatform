'use client';

import { FormEvent } from 'react';

interface BaseEndpointFormProps {
  endpoint: string;
  title: string;
  description: string;
  extraFields?: React.ReactNode;
}

export default function BaseEndpointForm({ endpoint, title, description, extraFields }: BaseEndpointFormProps) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <textarea
            name="input"
            rows={4}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your message..."
            required
          />
        </div>
        {extraFields}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
