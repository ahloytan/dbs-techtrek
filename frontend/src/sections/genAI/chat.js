import ChatPromptActions from "@/components/genAI/chat-prompt-actions";

export default function Chat ({chatHistory}) {
    
    return chatHistory.map((msg, index) => (
                index % 2 == 0 ? (
                    <div className="flex flex-row px-2 py-4 sm:px-4" key={index}>
                        <img
                            className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                            src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                        />
        
                        <div className="flex max-w-full items-center">
                            <p>{[msg]}</p>
                        </div>
                    </div>
                ) : (
                    <div key={index}>
                        <ChatPromptActions text={msg}/>
                        <div className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 dark:bg-slate-900 sm:px-4">
                            <img
                                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                                src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
                            />
            
                            <div className="flex max-w-full items-center rounded-xl">
                                <p>{[msg]}</p>
                            </div>
                        </div>
                    </div>
                )
            )
        )
}