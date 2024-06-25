'use strict';

const express = require('express');
const router = express.Router();

const { jwtValidator } = require('../util/jwt-validator');

const countries = require('./countries');
const customers = require('./customers');
const dashboard = require('./dashboard');
const destinations = require('./destinations');
const llm = require('./llm');
const account = require('./account');
const itineraries = require('./itineraries');
const ocr = require('./ocr');
const telegram = require('./telegram');

router.use('/countries', jwtValidator, countries);
router.use('/customers', jwtValidator, customers);
router.use('/dashboard', jwtValidator, dashboard);
router.use('/destinations', jwtValidator, destinations);
router.use('/llm', llm);
router.use('/itineraries', jwtValidator, itineraries);
router.use('/account', account);
router.use('/ocr', jwtValidator, ocr);
router.use('/telegram', telegram);

module.exports = router;