import ChatPromptActions from "@/components/genAI/chat-prompt-actions";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // choose any Highlight.js theme

export default function Chat ({chatHistory}) {
    return chatHistory.map((msg, index) => (
                msg.role === "user" ? (
                    <div className="flex flex-row px-2 py-4 sm:px-4" key={index}>
                        <img
                            className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                            src="/assets/avatars/dpgc.webp"
                        />
        
                        <div className="flex max-w-full items-center">
                            <p>{[msg.content]}</p>
                        </div>
                    </div>
                ) : (
                    <div key={index}>
                        <ChatPromptActions text={msg}/>
                        <div className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 dark:bg-slate-900 sm:px-4">
                            <img
                                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                                src="/assets/avatars/dpgc1.webp"
                            />
            
                            <div className="flex max-w-full items-center rounded-xl">
                                <div>
                                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )
        )
}