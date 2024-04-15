const axios = require('axios');
const express = require('express');
const router = express.Router();
const logger = require('../modules/logger');
const { GoogleGenerativeAI } = require("@google/generative-ai");

router.post('/chatgpt', async (req, res, next) => {
  try {
    const { prompt } = req.body;
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
      'https://api.pawan.krd/v1/chat/completions', reqBody,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CHATGPT_API}`,
        },
      }
    );

    res.status(200).json({data: response.data.choices[0].message.content})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});
 


router.post('/gemini', async (req, res, next) => {
  try {
    const { prompt } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-latest"});

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.status(200).json({data: response.text()})
  } catch (error) {
    logger.warn(error);
    next(error);
  }
});


module.exports = router;