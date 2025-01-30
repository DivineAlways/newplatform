'use client'

import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import Markdown from 'react-markdown'
import { useState, useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Documentation - BrowserBase',
  description: 'Learn how to use BrowserBase AI tools and endpoints'
}

function Sidebar({ activeSection, setActiveSection, sections }) {
  return (
    <nav className="w-64 bg-gray-900 p-6 h-screen overflow-y-auto fixed left-0 top-0">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Documentation</h2>
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-2 rounded ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const markdownContent = readFileSync(
    join(process.cwd(), 'app/how-to-use.md'),
    'utf-8'
  )

  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'core-components', title: 'Core Components' },
    { id: 'api-endpoints', title: 'API Endpoints' },
    { id: 'web-interface', title: 'Web Interface' },
    { id: 'api-access', title: 'API Access' },
    { id: 'endpoint-examples', title: 'Endpoint Examples' }
  ]

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
      />
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto py-12 px-8">
          <div className="prose prose-invert prose-lg">
            <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
              <Markdown
                className="prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl 
                           prose-headings:text-gray-100 prose-headings:font-bold prose-headings:mb-6 
                           prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                           prose-ul:text-gray-300 prose-li:my-2
                           prose-code:text-blue-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                           prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg
                           prose-a:text-blue-400 hover:prose-a:text-blue-300"
              >
                {markdownContent}
              </Markdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
