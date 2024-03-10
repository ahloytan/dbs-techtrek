'use strict';

const express = require('express');
const router = express.Router();

const jwtValidator = require('../util/jwtValidator');

const customers = require('./customers')
const genAI = require('./genAI')
const login = require('./login')
const itineraries = require('./itineraries')
const ocr = require('./ocr')

router.use('/customers', jwtValidator, customers);
router.use('/genAI', genAI);
router.use('/itineraries', itineraries);
router.use('/login', login);
router.use('/ocr', ocr);

module.exports = router;