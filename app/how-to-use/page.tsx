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
    <main className="flex min-h-screen flex-col items-center py-12 px-4 sm:px-8">
      <div className="prose prose-invert prose-lg w-full max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
          <Markdown 
            className="prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl 
                       prose-headings:text-gray-100 prose-headings:font-bold prose-headings:mb-6 
                       prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                       prose-ul:text-gray-300 prose-li:my-2
                       prose-code:text-blue-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                       prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg"
          >
            {markdownContent}
          </Markdown>
        </div>
      </div>
    </main>
  )
}
