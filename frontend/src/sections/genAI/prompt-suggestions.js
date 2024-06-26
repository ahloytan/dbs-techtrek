export default function promptSuggestions() {
    return (
            <div
            className="mt-4 flex w-full gap-x-2 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300 sm:text-sm"
            >
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Regenerate response
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Use prompt suggestions
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Toggle web search
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Select a tone
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Improve
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Make longer
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Explain in simple words
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Summarize in three lines
                </button>
                <button
                className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                >
                Translate content
                </button>
            </div>
    )
}