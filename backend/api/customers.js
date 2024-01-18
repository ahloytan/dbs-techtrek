'use strict';

const express = require('express');
const router = express.Router();
let Customers = require('../models/customers');
let Firebase = require('../models/firebase');
const logger = require('../modules/logger');


router.post('/', async function (req, res, next) {
    try {
        let customer = await Customers.addCustomer();

        res.json({ customer });

    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.get('/', async function (req, res, next) {
    try {
        let customers = await Customers.getAllCustomers();

        res.json({ customers });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.put('/', async function (req, res, next) {
    try {
        let customers = await Customers.updateCustomer();

        res.json({ customers });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.delete('/', async function (req, res, next) {
    try {
        let customer = await Customers.deleteCustomer();

        res.json({ customer });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;