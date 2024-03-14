'use strict';

const express = require('express');
const router = express.Router();
let Customers = require('../models/customers');
const logger = require('../modules/logger');


router.post('/', async function (req, res, next) {
    try {
        const { address, avatar, email, name, phoneNumber } = req.body;
        await Customers.addCustomer(address, avatar, email, name, phoneNumber);

        res.json({ 'message': `Record for ${email} has successfully been created!` });

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

router.get('/one', async function (req, res, next) {
    try {
        let email = 1
        let customers = await Customers.getCustomer(email);

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