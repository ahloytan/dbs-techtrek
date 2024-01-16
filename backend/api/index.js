'use strict';

const express = require('express');
const router = express.Router();

const customers = require('./customers')
const genAI = require('./genAI')
const login = require('./login')


router.use('/customers', customers);
router.use('/genAI', genAI);
router.use('/login', login);

module.exports = router;