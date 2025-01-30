'use client'

import ReactMarkdown from 'react-markdown'

interface DocsPageProps {
  markdownContent: string
}

export default function DocsPage({ markdownContent }: DocsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8 prose dark:prose-invert max-w-none">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  )
}
