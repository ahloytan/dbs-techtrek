'use strict';

const express = require('express');
const router = express.Router();

const jwtValidator = require('../util/jwtValidator');

const customers = require('./customers');
const destinations = require('./destinations');
const genAI = require('./genAI');
const account = require('./account');
const itineraries = require('./itineraries');
const ocr = require('./ocr');

router.use('/customers', jwtValidator, customers);
router.use('/destinations', destinations);
router.use('/genAI', genAI);
router.use('/itineraries', itineraries);
router.use('/account', account);
router.use('/ocr', ocr);

module.exports = router;