const express = require('express');
const router = express.Router();
const logger = require('../modules/logger');
const { ocrSpace } = require('ocr-space-api-wrapper'); //https://www.npmjs.com/package/ocr-space-api-wrapper

router.post('/', async (req, res, next) => {
    try { 
        const data = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png');
        res.status(200).json(data);

    } catch (error) {
        logger.warn(error);
        next(error);
    }

})

module.exports = router;