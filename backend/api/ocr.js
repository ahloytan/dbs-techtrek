const express = require('express');
const router = express.Router();
const { ocrSpace } = require('ocr-space-api-wrapper'); //https://www.npmjs.com/package/ocr-space-api-wrapper

router.post('/', async (req, res) => {
    try { 
        const data = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png');
        res.status(200).json(data);

    } catch (error) {
        console.error('Error fetching rates:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

module.exports = router;