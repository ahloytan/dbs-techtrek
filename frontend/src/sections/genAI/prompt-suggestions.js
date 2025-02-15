
const prompts = [
    "Regenerate response",
    "Use prompt suggestions",
    "Toggle web search",
    "Select a tone",
    "Improve",
    "Make longer",
    "Explain in simple words",
    "Summarize in three lines",
    "Translate content"
];

export default function promptSuggestions({selectPrompt}) {
    return (
            <div className="py-4 flex w-full gap-x-2 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                {prompts.map((prompt, index) => (
                    <button
                        key={index}
                        className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
                        onClick={() => selectPrompt(prompt)}
                    >
                        {prompt}
                    </button>
                ))}
            </div>
    )
}