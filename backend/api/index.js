'use strict';

const express = require('express');
const router = express.Router();

const jwtChecker = require('../util/jwtChecker');

const customers = require('./customers')
const genAI = require('./genAI')
const login = require('./login')
const ocr = require('./ocr')

router.use('/customers', jwtChecker, customers);
router.use('/genAI', genAI);
router.use('/login', login);
router.use('/ocr', ocr);

module.exports = router;