const google_bard_api = require('bard-ai-google')
const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/chatgpt', async (req, res) => {
    try {
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
                "content": "What's the weather like today in Singapore?"
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
      console.error('Error fetching rates:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.post('/bard', async (req, res) => {
    try {
      const cookie = process.env.BARD_COOKIE;
      const data = await google_bard_api("What's the weather like today in Singapore?", cookie);
      console.log(data);
    } catch (error) {
      console.error('Error fetching rates:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;