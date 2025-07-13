import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PromptSuggestions from '@/sections/genAI/prompt-suggestions';
import Chat from '@/sections/genAI/chat';
import { Avatar, Box, Container, Typography, Stack, Button } from '@mui/material';
import { clearUserChat, sendPromptToLLM, getChatHistory } from '@/api/llm';
import PromptLoader from '@/components/genAI/prompt-loading';

const chatHistory1 = [
  {
    role: "system",
    content: "Hello! How may I help you today? Go ahead and ask me a question!"
  }
];


const models = [
  {
    name: "groq",
    title: "Groq",
    icon: "groq.png",
    isDisabled: false
  },
  {
    name: "mistral",
    title: "Mistral",
    icon: "mistral.png",
    isDisabled: false
  },
  {
    name: "hugging-face",
    title: "Hugging Face",
    icon: "hf.png",
    isDisabled: false
  },
  {
    name: "gemini",
    title: "Gemini",
    icon: "gemini.png",
    isDisabled: false
  },
  {
    name: "deepseek",
    title: "DeepSeek",
    icon: "deepseek.png",
    isDisabled: false
  }
];

const Page = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [selectedModel, setLLMModel] = useState("groq");
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const selectedLLM = (selectedModel) => {
      setLLMModel(selectedModel)
    };

    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setPrompt(newValue);
    };

    const onEnterKeyPressed = (e) => {
      if (e.key === 'Enter') {
        sendPrompt(); 
        e.preventDefault();
      }
    }

    const resetPrompt = (event) => {
      setPrompt("");
    }

    const handleSelectedPrompt = (prompt) => {
      setPrompt(prompt);
    }
    
    useEffect(() => {
      fetchChatHistory();
    }, []);

    //http
    const sendPrompt = async () => {
      setIsLoading(true);
      chatHistory.push({ role: "user", content: prompt });
      setPrompt("");
      await sendPromptToLLM(selectedModel, prompt)
        .then((answer) => {
          chatHistory.push({ role: "system", content: answer });
          console.log(chatHistory)
        })
        .finally(() => setIsLoading(false));
    }

    const clearChat = async () => {
      setIsLoading(true);
      setPrompt("");
      await clearUserChat()
        .then(() => setChatHistory(chatHistory1))
        .finally(() => setIsLoading(false));
    }

    const fetchChatHistory = async () => {
      const chatHistory = await getChatHistory();
  
      if (chatHistory.length) {
        setChatHistory(chatHistory);
        return;
      }

      setChatHistory(chatHistory1)
    }

    return (
        <>
          <Head>
            <title>
              Generative AI | DBS TechTrek
            </title>
          </Head>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              paddingBottom: 8
            }}
          >
            <Container maxWidth="xl">
              <Stack spacing={3} className="mb-4">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={4}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">
                    Generative AI
                    </Typography>
                    <Stack
                      alignItems="center"
                      direction="row"
                      className="flex flex-wrap"
                    >
                      {models.map((model) => (
                        <Button
                          key={model.name}
                          color="inherit"
                          variant={selectedModel == model.name ? 'contained' : ''}
                          startIcon={
                            <Avatar
                              src={`/assets/llm/${model.icon}`}
                            />
                          }
                          onClick={() => selectedLLM(model.name)}
                          disabled={model.isDisabled}
                        >
                          {model.title}
                        </Button> 
                      ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              {/* Prompt Messages Container - Modify the height according to your need */}
              <div id="chatbox" className="flex h-full w-full flex-col">
                {/* Prompt Messages */}
                <div
                  className="flex-1 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
                >
                  <Chat chatHistory={chatHistory}/>
                  {isLoading && <PromptLoader/>}
                </div>
                {/* Prompt suggestions */}
                <PromptSuggestions selectPrompt={handleSelectedPrompt}/>
                {/* Prompt message input */}
                <div className="mt-2">
                  <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
                  <div className="relative">
                    {
                    prompt && <button
                      type="button"
                      onClick={resetPrompt}
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <span className="sr-only">Clear chat</span>
                    </button>
                    }
                    <textarea
                      value={prompt}
                      onChange={handleInputChange}
                      onKeyDown={(e) => onEnterKeyPressed(e) }
                      id="chat-input"
                      className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-40 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
                      placeholder="Enter your prompt"
                      rows="1"
                      required
                    ></textarea>
                    <Button
                      variant="contained"
                      onClick={sendPrompt}
                      disabled={isLoading || !Boolean(prompt)}
                      sx={{position: 'absolute', bottom: '8px', right: '80px'}}
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 2L11 13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </Button>

                    <Button
                      variant="contained"
                      onClick={clearChat}
                      disabled={isLoading || Boolean(prompt)}
                      sx={{position: 'absolute', bottom: '8px', right: '10px'}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </Box>
        </>
    )
}


Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default Page;