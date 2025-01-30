export default function HistoryPage() {
    const updates = [
        {
            date: "2024-01-30",
            version: "1.0.0",
            changes: [
                "Initial release of BrowserBase",
                "Added core web scraping functionality",
                "Implemented AI-powered browsing features",
                "Created base endpoint form components",
                "Set up Next.js 14 project structure"
            ]
        },
        {
            date: "2024-01-30",
            version: "1.0.1",
            changes: [
                "Added Documentation page with ReactMarkdown support",
                "Fixed DocsPage component implementation",
                "Improved error handling in API routes",
                "Enhanced type safety across components"
            ]
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Update History</h1>
                <div className="space-y-8">
                    {updates.map((update, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Version {update.version}</h2>
                                <span className="text-gray-500">{update.date}</span>
                            </div>
                            <ul className="list-disc list-inside space-y-2">
                                {update.changes.map((change, changeIndex) => (
                                    <li key={changeIndex} className="text-gray-700 dark:text-gray-300">
                                        {change}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
