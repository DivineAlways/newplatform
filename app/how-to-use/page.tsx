import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import Markdown from 'react-markdown'

export const metadata: Metadata = {
  title: 'How to Use - BrowserBase',
  description: 'Learn how to use BrowserBase AI tools and endpoints'
}

export default function HowToUsePage() {
  // Read the markdown file
  const markdownContent = readFileSync(
    join(process.cwd(), 'app/how-to-use.md'),
    'utf-8'
  )

  return (
    <main className="flex min-h-screen flex-col items-center p-8 max-w-5xl mx-auto">
      <div className="prose prose-invert w-full">
        <Markdown>{markdownContent}</Markdown>
      </div>
    </main>
  )
}
