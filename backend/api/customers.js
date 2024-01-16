'use strict';

const express = require('express');
const router = express.Router();
let Customers = require('../models/customers');
const logger = require('../modules/logger');

router.get('/', async function (req, res, next) {
    try {
        let customers = await Customers.getAllCustomers();

        res.json({ customers });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
  });

module.exports = router;