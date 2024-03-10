'use strict';

const express = require('express');
const router = express.Router();
let Customers = require('../models/customers');
let Firebase = require('../models/firebase');
const logger = require('../modules/logger');


router.post('/', async function (req, res, next) {
    try {
        const { address, avatar, email, name, phoneNumber } = req.body;
        await Firebase.addCustomer(address, avatar, email, name, phoneNumber);

        res.json({ 'message': `Record for ${email} has successfully been created!` });

    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.get('/', async function (req, res, next) {
    try {
        let customers = await Firebase.getAllCustomers();

        res.json({ customers });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.put('/', async function (req, res, next) {
    try {
        let customers = await Firebase.updateCustomer();

        res.json({ customers });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.delete('/', async function (req, res, next) {
    try {
        let customer = await Firebase.deleteCustomer();

        res.json({ customer });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;