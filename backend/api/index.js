'use strict';

const express = require('express');
const router = express.Router();

const jwt_validator = require('../util/jwt-validator');

const countries = require('./countries');
const customers = require('./customers');
const dashboard = require('./dashboard');
const destinations = require('./destinations');
const llm = require('./llm');
const account = require('./account');
const itineraries = require('./itineraries');
const ocr = require('./ocr');
const telegram = require('./telegram');

router.use('/countries', jwt_validator, countries);
router.use('/customers', jwt_validator, customers);
router.use('/dashboard', jwt_validator, dashboard);
router.use('/destinations', jwt_validator, destinations);
router.use('/llm', jwt_validator, llm);
router.use('/itineraries', jwt_validator, itineraries);
router.use('/account', account);
router.use('/ocr', jwt_validator, ocr);
router.use('/telegram', telegram);

module.exports = router;