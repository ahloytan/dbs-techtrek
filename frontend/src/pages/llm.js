import Head from 'next/head';
import { useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PromptSuggestions from '@/sections/genAI/prompt-suggestions';
import Chat from '@/sections/genAI/chat';
import { Avatar, Box, Container, Typography, Stack, Button } from '@mui/material';
import { sendPromptToLLM } from '@/api/llm';
import PromptLoader from '@/components/genAI/prompt-loading';

const chatHistory = [
  `What are three great applications of quantum computing?`,
  `The three great applications of quantum computing are: Optimization of
  complex problems, Drug Discovery and Cryptography.`
];


const models = [
  {
    name: "groq",
    title: "Groq",
    icon: "groq.png",
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
    title: "DeepSeek (WIP)",
    icon: "deepseek.png",
    isDisabled: true
  }
];

const Page = () => {
    const [selectedModel, setLLMModel] = useState("groq");
    const [prompt, setPrompt] = useState("Who is Youn Soo Bin from LCK?");
    const [isLoading, setIsLoading] = useState(false);

    const selectedLLM = (selectedModel) => {
      setLLMModel(selectedModel)
    };

    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setPrompt(newValue);
    };

    const sendPrompt = async () => {
      setPrompt("");
      setIsLoading(true);
      let answer = await sendPromptToLLM(selectedModel, prompt);
      chatHistory.push(prompt);
      chatHistory.push(answer);
      setIsLoading(false);
    }

    const onEnterKeyPressed = (e) => {
      if (e.key === 'Enter') {
        sendPrompt(); 
        e.preventDefault();
      }
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
                <PromptSuggestions/>
                {/* Prompt message input */}
                <div className="mt-2">
                  <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600"
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"
                        ></path>
                        <path d="M5 10a7 7 0 0 0 14 0"></path>
                        <path d="M8 21l8 0"></path>
                        <path d="M12 17l0 4"></path>
                      </svg>
                      <span className="sr-only">Use voice input</span>
                    </button>
                    <textarea
                      value={prompt}
                      onChange={handleInputChange}
                      onKeyDown={(e) => onEnterKeyPressed(e) }
                      id="chat-input"
                      className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
                      placeholder="Enter your prompt"
                      rows="1"
                      required
                    ></textarea>
                    <Button
                      variant="contained"
                      onClick={sendPrompt}
                      disabled={isLoading || !prompt}
                      sx={{position: 'absolute', bottom: '8px', right: '10px'}}
                    >
                      Send
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