const axios = require('axios');
const express = require('express');
const router = express.Router();
const logger = require('../modules/logger');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { CHATGPT_API, GEMINI_API_KEY, AWAN_API_KEY } = process.env;

router.post('/chatgpt', async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) throw new Error("Empty message!");

    const reqBody = {
      "model": "pai-001-light",
      "max_tokens": 100,
      "messages": [
          {
              "role": "system",
              "content": "You are an helpful assistant."
          },
          {
              "role": "user",
              "content": prompt
          }
      ]
    }

    const response = await axios.post(
      'https://api.pawan.krd/v1/chat/completions', 
      reqBody,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CHATGPT_API}`,
        },
      }
    );

    res.status(200).json({data: response.data.choices[0].message.content})
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
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});

    const result = await model.generateContent(prompt);
    const { response } = await result;

    res.status(200).json({data: response.text()})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});

router.post('/awan', async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) throw new Error("Empty message!");

    const reqBody = {
      "model": "Meta-Llama-3-8B-Instruct",
      "messages": [
        {"role": "user", "content": prompt},
      ],
    }

    const response = await axios.post(
      'https://api.awanllm.com/v1/chat/completions', 
      reqBody,
      {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${AWAN_API_KEY}`
        },
      }
    );

    res.status(200).json({data: response.data.choices[0].message.content})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});

module.exports = router;