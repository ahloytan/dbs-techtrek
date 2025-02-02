const axios = require('axios');
const express = require('express');
const router = express.Router();
const logger = require('../modules/logger');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { CHATGPT_API, GEMINI_API_KEY, GROQ_API_KEY, HUGGING_FACE_API_KEY } = process.env;
const Groq = require('groq-sdk');
const { HfInference } = require('@huggingface/inference');
const LLM = require('../models/llm');
 
router.get('/chat-history', async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    const messages = await LLM.getConversation(token);

    res.status(200).json({data: messages})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});

//https://ai.google.dev/tutorials/get_started_node#multi-turn-conversations-chat
router.post('/gemini', async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) throw new Error("Empty message!");

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

    const result = await model.generateContent(prompt);
    const { response } = await result;

    const [, token] = req.headers.authorization.split(' ');
    await LLM.addMessage(token, prompt, "user");
    await LLM.addMessage(token, response.text(), "system");

    res.status(200).json({data: response.text()})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});

router.post('/groq', async (req, res, next) => {
  const groq = new Groq({ apiKey: GROQ_API_KEY });
  try {
    const { prompt } = req.body;
    if (!prompt) throw new Error("Empty message!");

    const [, token] = req.headers.authorization.split(' ');
    await LLM.addMessage(token, prompt, "user");
    const messages = await LLM.getConversation(token);
  
    const response = await groq.chat.completions.create({
      messages,
      model: "llama-3.3-70b-versatile",
    });

    const content = response.choices[0].message.content;
    await LLM.addMessage(token, content, "system");

    res.status(200).json({data: content});
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});

router.post('/hugging-face', async (req, res, next) => {
  const hf = new HfInference(HUGGING_FACE_API_KEY);
  try {
    const { prompt } = req.body;
    if (!prompt) throw new Error("Empty message!");

    const [, token] = req.headers.authorization.split(' ');
    await LLM.addMessage(token, prompt, "user");
    const messages = await LLM.getConversation(token);

    const response = hf.chatCompletionStream({
      model: "Qwen/Qwen2.5-Coder-32B-Instruct", //https://huggingface.co/docs/api-inference/en/tasks/chat-completion?code=js
      messages: messages,
      max_tokens: 1000
    });

    let output = ""
    for await (const chunk of response) {
      if (chunk?.choices?.length > 0) {
        output += chunk.choices[0].delta.content;
      }  
    }

    await LLM.addMessage(token, output, "system");

    res.status(200).json({data: output})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});


// router.post('/awan', async (req, res, next) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) throw new Error("Empty message!");

//     const reqBody = {
//       "model": "Meta-Llama-3-8B-Instruct",
//       "messages": [
//         {"role": "user", "content": prompt},
//       ],
//     }

//     const response = await axios.post(
//       'https://api.awanllm.com/v1/chat/completions', 
//       reqBody,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `Bearer ${AWAN_API_KEY}`
//         },
//       }
//     );

//     res.status(200).json({data: response.data.choices[0].message.content})
//   } catch (error) {
//     logger.warn(error);
//     next(error);
//   }
// });

// router.post('/chatgpt', async (req, res, next) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) throw new Error("Empty message!");

//     const reqBody = {
//       "model": "pai-001-light",
//       "max_tokens": 100,
//       "messages": [
//           {
//               "role": "system",
//               "content": "You are an helpful assistant."
//           },
//           {
//               "role": "user",
//               "content": prompt
//           }
//       ]
//     }

//     const response = await axios.post(
//       'https://api.pawan.krd/v1/chat/completions', 
//       reqBody,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${CHATGPT_API}`,
//         },
//       }
//     );

//     res.status(200).json({data: response.data.choices[0].message.content})
//   } catch (error) {
//     logger.warn(error);
//     next(error);
//   }
// });

module.exports = router;