import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import DocsPage from '@/app/how-to-use/DocsPage'

export const metadata: Metadata = {
  title: 'Documentation - BrowserBase',
  description: 'Learn how to use BrowserBase AI tools and endpoints'
}

export default function Page() {
  // Read the markdown file
  const markdownContent = readFileSync(
    join(process.cwd(), 'app/how-to-use.md'),
    'utf-8'
  )

  return <DocsPage markdownContent={markdownContent} />
}
